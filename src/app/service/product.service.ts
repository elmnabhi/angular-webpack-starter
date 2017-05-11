import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Response, Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "../domain/Product";

@Injectable()
export class ProductService {

  defaultUrl : string = "http://" + process.env.BACK_URI + "/todo";
  headersJson: Headers = new Headers({ 'Content-Type': 'application/json' });
  headersOther: Headers = new Headers({'Content-Type': 'application/pdf'})
  options: RequestOptions = new RequestOptions({headers: this.headersJson});

  constructor(private http: Http) {}

  getProducts() : Observable<Product[]> {
    return this.http.get(this.defaultUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createProduct(product : Product) : Observable<Product> {
    let body = JSON.stringify(product);
    return this.http.post(this.defaultUrl, body, this.options)
      .map((product) => { return product })
      .catch((error) => Observable.throw(error))
  }

  deleteProduct(producId: string): Observable<Response> {
    let deleteOptions: RequestOptions = new RequestOptions({body: '', headers: this.headersJson});
    return this.http.delete(this.defaultUrl + "/" + producId, deleteOptions)
      .catch(this.handleError);
  }

  updateProduct(product : Product) {
    let body = JSON.stringify([{'op': 'replace', 'path': '/active', 'value': !product.price}])
    return this.http.patch(this.defaultUrl.concat("/",product.id), body, this.options)
      .catch((error) => Observable.throw(error))
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}


