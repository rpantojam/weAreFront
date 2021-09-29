import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component'
import { CartComponent } from './cart/cart.component';
import { AddCartComponent } from './addCart/addCart.component';

const routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, patchMatch: "full" },
  { path: "home", component: HomeComponent, patchMatch: "full" },
  { path: "products", component: ProductComponent, patchMatch: "full" }, 
  { path: "cart", component: CartComponent, patchMatch: "full" },
  { path: "addCart", component: AddCartComponent, patchMatch: "full" }
];

export const routing = RouterModule.forRoot(routes);
