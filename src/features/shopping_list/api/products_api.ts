import { Observable } from 'rxjs';
import { IProductsApi } from '@features/shopping_list/api/products_api_types';
import { ProductsService } from '@features/shopping_list/state/products_service';
import { ProductId } from '@models/product/product_types';
import { Product } from '@models/product/product';

export class ProductsApi implements IProductsApi {
  private productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  public addProduct(productName: string) {
    this.productsService.addProduct(
      new Product({ name: productName, isChecked: false })
    );
  }

  public removeProduct(productId: ProductId) {
    this.productsService.removeProduct(productId);
  }

  public selectProducts(): Observable<Product[]> {
    return this.productsService.selectProducts$();
  }

  public checkAllProducts(): void {
    this.productsService.checkAllProducts();
  }

  public uncheckAllProducts(): void {
    this.productsService.uncheckAllProducts();
  }

  public toggleProduct(id: ProductId) {
    const product = this.productsService.getProductById(id);

    if (!product) return;

    if (product.isChecked) {
      this.productsService.uncheckProduct(id);
      return;
    }

    this.productsService.checkProduct(id);
  }
}
