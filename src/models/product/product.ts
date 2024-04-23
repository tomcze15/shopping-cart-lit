import { v4 as uuidv4 } from 'uuid';
import { IProductConfig } from '@models/product/product_types';

export class Product {
  id: string;
  public name: string;
  public isChecked: boolean;

  constructor({ id, name, isChecked }: IProductConfig) {
    this.id = id || uuidv4();
    this.name = name;
    this.isChecked = isChecked;
  }
}
