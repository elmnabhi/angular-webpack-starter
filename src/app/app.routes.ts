import {Route, RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {DisplayProductComponent} from "./product/displayProduct/display-product.component";
import {HomeComponent} from "./home/home.component";


const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'product', component: DisplayProductComponent}
]

export const routing = RouterModule.forRoot(routes);
