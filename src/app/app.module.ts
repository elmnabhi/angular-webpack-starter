import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DisplayProductComponent} from "./product/displayProduct/display-product.component";
import {ProductService} from "./service/product.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {ModalModule} from "ng2-bootstrap";
import {routing} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./navbar/navbar.component";
import {FormsModule} from "@angular/forms";
import {SimpleNotificationsModule, NotificationsService} from "angular2-notifications";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FilterTitlePipe} from "./pipe/filter.pipe";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        routing,
        ModalModule.forRoot(),
        FormsModule,
        SimpleNotificationsModule,
        BrowserAnimationsModule

    ],
    providers: [
        ProductService, NotificationsService
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        DisplayProductComponent,
        FilterTitlePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
