import { ProductsStore } from '../../shopping_list/state/products_store';
import { Product } from '../../../models/product/product';
import { ProductId } from '../../../models/product/product_types';
import { ProductsQuery } from '../../shopping_list/state/products_query';
import { Observable } from 'rxjs';

export class ProductsRepository {
  constructor(
    private store: ProductsStore,
    private query: ProductsQuery
  ) {}

  public getAllProduct(): Product[] {
    return this.query.getAll();
  }

  public getProductById(id: ProductId): Product | undefined {
    return this.query.getEntity(id);
  }

  public selectProducts$(): Observable<Product[]> {
    return this.query.selectAll();
  }

  public addProduct(product: Product): void {
    this.store.add(product);
  }

  public removeProductById(id: ProductId): void {
    this.store.remove(id);
  }

  public getCheckedProducts(): Product[] {
    return this.query.getCheckedProducts();
  }

  public updateProductChecked(id: ProductId, isChecked: boolean) {
    this.store.updateProductChecked(id, isChecked);
  }

  updateProductName(id: ProductId, newName: string) {
    this.store.update(id, { name: newName });
  }
}
