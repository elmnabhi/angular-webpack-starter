import {BrowserJsonp} from "@angular/http/src/backends/browser_jsonp";
import {Binary} from "@angular/compiler/src/expression_parser/ast";

export class Product {
  constructor(
    public id : string,
    public title : string,
    public price : string,
  ){}
}
