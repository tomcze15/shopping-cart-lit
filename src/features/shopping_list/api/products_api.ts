import { Observable } from 'rxjs';
import { IProductsApi } from '../../shopping_list/api/products_api_types';
import { ProductId } from '../../../models/product/product_types';
import { ProductsService } from '../../shopping_list/state/products_service';
import { Product } from '../../../models/product/product';

export class ProductsApi implements IProductsApi {
  productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  addProduct(productName: string) {
    this.productsService.addProduct(
      new Product({ name: productName, isChecked: false })
    );
  }

  removeProduct(productId: ProductId) {
    this.productsService.removeProduct(productId);
  }

  selectProducts(): Observable<Product[]> {
    return this.productsService.selectProducts();
  }

  checkAllProducts(): void {
    this.productsService.checkAllProducts();
  }

  uncheckAllProducts(): void {
    this.productsService.uncheckAllProducts();
  }

  toggleProduct(id: ProductId) {
    const product = this.productsService.getProductById(id);

    if (!product) return;

    if (product.isChecked) {
      this.productsService.uncheckProduct(id);
      return;
    }

    this.productsService.checkProduct(id);
  }
}
