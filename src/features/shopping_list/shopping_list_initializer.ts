import { ProductsStore } from '@features/shopping_list/state/products_store';
import { ProductsQuery } from '@features/shopping_list/state/products_query';
import { ProductsRepository } from '@features/shopping_list/state/products_repository';
import { ProductsService } from '@features/shopping_list/state/products_service';
import ShoppingListEventEmitter from '@features/shopping_list/events/shopping_list_event_emitter.ts';
import { Product } from '@models/product/product.ts';

export class ShoppingListInitializer {
  public init(): ProductsService {
    const productsStore = new ProductsStore();
    const productsQuery = new ProductsQuery(productsStore);
    const productsRepository = new ProductsRepository(
      productsStore,
      productsQuery
    );

    const productsService = new ProductsService(productsRepository);

    ShoppingListEventEmitter.onAddProduct((productName) => {
      productsService.addProduct(
        new Product({
          name: productName,
          isChecked: false,
        })
      );
    });

    ShoppingListEventEmitter.onDeleteProduct((productId) => {
      productsService.removeProduct(productId);
    });

    ShoppingListEventEmitter.onCheckAllProducts(() =>
      productsService.checkAllProducts()
    );

    ShoppingListEventEmitter.onUncheckAllProducts(() =>
      productsService.uncheckAllProducts()
    );

    return productsService;
  }
}
