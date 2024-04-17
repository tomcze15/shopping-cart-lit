import { EntityStore, StoreConfig } from '@datorama/akita';
import { IProductState } from '../../shopping_list/state/products_state_types';
import { INITIAL_PRODUCTS_STATE } from '../../shopping_list/state/products_state_constants';
import { ProductId } from '../../../models/product/product_types';

@StoreConfig({ name: 'Products', idKey: 'name' })
export class ProductsStore extends EntityStore<IProductState> {
  constructor() {
    super(INITIAL_PRODUCTS_STATE);
  }

  updateProductChecked(id: ProductId, isChecked: boolean) {
    this.update(id, { isChecked });
  }
}
