import { Observable } from 'rxjs';
import { Product } from '../../../models/product/product';
import { ProductId } from '../../../models/product/product_types';

export interface IProductsApi {
  selectProducts(): Observable<Product[]>;
  checkProduct(id: ProductId): void;
  uncheckProduct(id: ProductId): void;
  checkAllProducts(): void;
  uncheckAllProducts(): void;
  toggleProduct(id: ProductId): void;
}
