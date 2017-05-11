import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../../domain/product";
import {ProductService} from "../../service/product.service";
import {ModalDirective} from "ng2-bootstrap/modal";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: "display-product",
  templateUrl: "./display-product.component.html",
})

export class DisplayProductComponent implements OnInit{

  @ViewChild('addProduct')
  addProductModal : ModalDirective;

  query = "";
  product : Product = new Product(null, "", "");
  products: Product[];

  errorOccurred: boolean = false;

  ngOnInit() {
    this.getProducts();
  }

  constructor(private productService: ProductService,
              private notificationsService: NotificationsService,
              private router: Router) {
  };

  openAddProductModal(){
    this.addProductModal.show();
  }

  dismissAddProductModal() {
    this.addProductModal.hide();
  }

  private saveProduct(product: Product) {
    this.errorOccurred = false;
    this.notificationsService.success("Notification", "Product Saved");
    console.log(product);
    this. dismissAddProductModal();
  }

  private deleteProduct(productId : String) {
    this.notificationsService.success("Notification", "Product removed");
    console.log(productId);
  }

  private getProducts() {
    this.products = [{id: "Product::1", title: "Watch", price: "120.99"}, {
      id: "Product::2",
      title: "Mobile",
      price: "600"
    }];
  }
}
