import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  
    {path:'Checkout',component:CheckoutComponent},
    {path:'Cart',component:CartComponent},

{path:'**',pathMatch:'full',redirectTo:'Cart'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
