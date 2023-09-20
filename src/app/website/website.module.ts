// website-pages.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    MyOrdersComponent,
    MyProfileComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'my-profile', component: MyProfileComponent },
    ]),
  ],
})
export class WebsitePagesModule {}
