import { Product } from '../../../models/product/product';
import { ProductId } from '../../../models/product/product_types';
import { EntityState } from '@datorama/akita';

export interface IProductState extends EntityState<Product, ProductId> {}
