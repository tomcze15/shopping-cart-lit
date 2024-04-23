import { Observable } from 'rxjs';
import { Product } from '@models/product/product';
import { ProductId } from '@models/product/product_types';

export interface IProductsApi {
  addProduct(productName: string): void;
  removeProduct(id: ProductId): void;
  selectProducts(): Observable<Product[]>;
  checkAllProducts(): void;
  uncheckAllProducts(): void;
  toggleProduct(id: ProductId): void;
}
