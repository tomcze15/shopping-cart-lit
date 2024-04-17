import { ProductsStore } from '../shopping_list/state/products_store';
import { ProductsQuery } from '../shopping_list/state/products_query';
import { ProductsRepository } from '../shopping_list/state/products_repository';
import { ProductsService } from '../shopping_list/state/products_service';

export class ShoppingListInitializer {
  public init(): ProductsService {
    const productsStore = new ProductsStore();
    const productsQuery = new ProductsQuery(productsStore);
    const productsRepository = new ProductsRepository(
      productsStore,
      productsQuery
    );

    return new ProductsService(productsRepository);
  }
}
