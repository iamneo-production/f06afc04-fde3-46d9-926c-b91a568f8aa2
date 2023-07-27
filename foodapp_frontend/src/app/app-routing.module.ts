import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
=======
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
import { RestaurantdashboardComponent } from './restaurantdashboard/restaurantdashboard.component';
import { HomeComponent } from './home/home.component';
import { UserAuthGuard, RestaurantAuthGuard, AdminAuthGuard } from './auth.guard';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';



>>>>>>> 6b19261a154fa6f742850d81fde2fa5a4b2337f2




const routes: Routes = [
<<<<<<< HEAD
  {path:'header',component:HeaderComponent},
  { path: 'order-tracking', component: OrderTrackingComponent },
  
   {path:'**',pathMatch:'full',redirectTo:'order-tracking'}
=======

  {path: 'header',component:HeaderComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'userlogin',component:UserloginComponent},
  {path: 'usersignup',component:UsersignupComponent},
  { path: 'profile', component: ProfileComponent },
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'resdetails', component: ResdetailsComponent},
  {path: 'adminlogin',component:AdminloginComponent},
  {path: 'adminsignup',component:AdminsignupComponent},
  {path: 'restaurantlogin',component:RestaurantloginComponent},
  {path: 'restaurantsignup',component:RestaurantsignupComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'home', component: HomeComponent, canActivate: [UserAuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [UserAuthGuard]},
  {path: 'menu/:id',component:MenuComponent, canActivate: [UserAuthGuard]},
  {path: 'restaurantlist',component:RestaurantlistComponent, canActivate: [UserAuthGuard]},
  {path: 'checkout',component:CheckoutComponent, canActivate: [UserAuthGuard]},
  {path: 'ordertracking',component:OrdertrackingComponent, canActivate: [UserAuthGuard]},
  {path: 'restaurantdashboard', component: RestaurantdashboardComponent, canActivate: [RestaurantAuthGuard] },
  {path: 'adminpanel', component: AdminpanelComponent, canActivate: [AdminAuthGuard] },

  
  {path:'**',pathMatch:'full',redirectTo:'dashboard'}
>>>>>>> 6b19261a154fa6f742850d81fde2fa5a4b2337f2


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
