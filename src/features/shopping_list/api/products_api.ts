// import { IProductsApi } from '@features/shopping_list/api/products_api_types';
// import { ProductId } from '@features/shopping_list/state/products_state_types';
// import { ProductsService } from '@features/shopping_list/state/products_service';

import { IProductsApi } from '../../shopping_list/api/products_api_types';
import { ProductId } from '../../../models/product/product_types';
import { ProductsService } from '../../shopping_list/state/products_service';

import { Observable } from 'rxjs';
import { Product } from '@models/product/product';

export class ProductsApi implements IProductsApi {
  productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  selectProducts(): Observable<Product[]> {
    return this.productsService.selectProducts();
  }

  getAllProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  checkProduct(id: ProductId): void {
    id;
  }
  uncheckProduct(id: ProductId): void {
    id;
  }
  checkAllProducts(): void {}
  uncheckAllProducts(): void {}

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
