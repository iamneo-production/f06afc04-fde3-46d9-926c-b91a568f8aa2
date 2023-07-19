import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';



const routes: Routes = [

  {path:'header',component:HeaderComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'restaurantlogin',component:RestaurantloginComponent},
  {path:'restaurantsignup',component:RestaurantsignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'cart',component:CartComponent},
  { path: 'menu', component: MenuComponent },

  
  {path:'**',pathMatch:'full',redirectTo:'dashboard'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
