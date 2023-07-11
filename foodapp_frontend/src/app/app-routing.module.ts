import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  
    {path:'Checkout',component:CheckoutComponent},
    {path:'Cart',component:CartComponent},

{path:'**',pathMatch:'full',redirectTo:'Cart'}

  
=======
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RestaurantloginComponent } from './restaurantlogin/restaurantlogin.component';
import { RestaurantsignupComponent } from './restaurantsignup/restaurantsignup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [

  {path:'Header',component:HeaderComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'Userlogin',component:UserloginComponent},
  {path:'Usersignup',component:UsersignupComponent},
  {path:'Adminlogin',component:AdminloginComponent},
  {path:'Adminsignup',component:AdminsignupComponent},
  {path:'Restaurantlogin',component:RestaurantloginComponent},
  {path:'Restaurantsignup',component:RestaurantsignupComponent},
  {path:'About',component:AboutComponent},
  {path:'Contactus',component:ContactusComponent},

  
  {path:'**',pathMatch:'full',redirectTo:'Dashboard'}


>>>>>>> ec75852372be6f1a12583025cd1786856d5ad35b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
