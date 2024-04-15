import { IProductConfig } from '@models/product/product_types';

export class Product {
  public name: string;
  public icon: string;
  public isActive: boolean;

  constructor({ name, icon, isActive }: IProductConfig) {
    this.name = name;
    this.icon = icon;
    this.isActive = isActive;
  }
}
