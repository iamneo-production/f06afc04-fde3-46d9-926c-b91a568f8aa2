import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';




const routes: Routes = [
  {path:'header',component:HeaderComponent},
  { path: 'order-tracking', component: OrderTrackingComponent },
  
   {path:'**',pathMatch:'full',redirectTo:'order-tracking'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
