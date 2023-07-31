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
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';







const routes: Routes = [

  {path: 'header',component:HeaderComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path: 'userlogin',component:UserloginComponent},
  {path: 'usersignup',component:UsersignupComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'resdetails', component: ResdetailsComponent},
  {path: 'adminlogin',component:AdminloginComponent},
  {path: 'restaurantlogin',component:RestaurantloginComponent},
  {path: 'restaurantsignup',component:RestaurantsignupComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'home', component: HomeComponent, canActivate: [UserAuthGuard]},
  {path: 'cart', component: CartComponent, canActivate: [UserAuthGuard]},
  {path: 'menu',component:MenuComponent, canActivate: [UserAuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [UserAuthGuard] },
  {path: 'update-customer/:id', component: UpdateCustomerComponent, canActivate: [UserAuthGuard]},
  {path: 'order-history', component: OrderHistoryComponent, canActivate: [UserAuthGuard]},
  {path: 'restaurantlist',component:RestaurantlistComponent, canActivate: [UserAuthGuard]},
  {path: 'notification', component: NotificationComponent, canActivate: [UserAuthGuard]},
  {path: 'restaurantdetails',component:RestaurantdetailsComponent, canActivate: [UserAuthGuard]},
  {path: 'checkout',component:CheckoutComponent, canActivate: [UserAuthGuard]},
  {path: 'ordertracking',component:OrdertrackingComponent},
  {path: 'restaurantdashboard', component: RestaurantdashboardComponent, canActivate: [RestaurantAuthGuard] },
  {path: 'adminpanel', component: AdminpanelComponent, canActivate: [AdminAuthGuard] },
  {path: 'adminsignup',component:AdminsignupComponent, canActivate: [AdminAuthGuard] },

  
  {path:'**',pathMatch:'full',redirectTo:'dashboard'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }