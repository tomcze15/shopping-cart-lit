import { EntityStore, StoreConfig } from '@datorama/akita';
import { IProductState } from '@features/shopping_list/state/products_state_types';
import { INITIAL_PRODUCTS_STATE } from '@features/shopping_list/state/products_state_constants';
import { ProductId } from '@models/product/product_types';

@StoreConfig({ name: 'Products' })
export class ProductsStore extends EntityStore<IProductState> {
  constructor() {
    super(INITIAL_PRODUCTS_STATE);
  }

  public updateProductChecked(id: ProductId, isChecked: boolean) {
    this.update(id, { isChecked });
  }
}
