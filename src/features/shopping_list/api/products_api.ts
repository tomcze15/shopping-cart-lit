import { Observable } from 'rxjs';
import { IProductsApi } from '../../shopping_list/api/products_api_types';
import { ProductId } from '../../../models/product/product_types';
import { ProductsService } from '../../shopping_list/state/products_service';
import { Product } from '../../../models/product/product';

export class ProductsApi implements IProductsApi {
  private _productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this._productsService = productsService;
  }

  public addProduct(productName: string) {
    this._productsService.addProduct(
      new Product({ name: productName, isChecked: false })
    );
  }

  public removeProduct(productId: ProductId) {
    this._productsService.removeProduct(productId);
  }

  public selectProducts(): Observable<Product[]> {
    return this._productsService.selectProducts();
  }

  public checkAllProducts(): void {
    this._productsService.checkAllProducts();
  }

  public uncheckAllProducts(): void {
    this._productsService.uncheckAllProducts();
  }

  public toggleProduct(id: ProductId) {
    const product = this._productsService.getProductById(id);

    if (!product) return;

    if (product.isChecked) {
      this._productsService.uncheckProduct(id);
      return;
    }

    this._productsService.checkProduct(id);
  }
}
