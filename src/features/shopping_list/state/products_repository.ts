import { Observable } from 'rxjs';
import { ProductsStore } from '@features/shopping_list/state/products_store';
import { Product } from '@models/product/product';
import { ProductId } from '@models/product/product_types';
import { ProductsQuery } from '@features/shopping_list/state/products_query';

export class ProductsRepository {
  constructor(
    private store: ProductsStore,
    private query: ProductsQuery
  ) {}

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

  public updateProductChecked(id: ProductId, isChecked: boolean) {
    this.store.updateProductChecked(id, isChecked);
  }
}
