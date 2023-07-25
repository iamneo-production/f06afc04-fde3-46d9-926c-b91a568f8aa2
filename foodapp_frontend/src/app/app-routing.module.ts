import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { NotificationComponent } from './notification/notification.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { ResloginComponent } from './reslogin/reslogin.component';
import { RessignupComponent } from './ressignup/ressignup.component';
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

import { ResdetailsComponent } from './resdetails/resdetails.component';




>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55




<<<<<<< HEAD
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
  {path: 'restaurantdashboard', component: RestaurantdashboardComponent, canActivate: [RestaurantAuthGuard] },
  {path: 'adminpanel', component: AdminpanelComponent, canActivate: [AdminAuthGuard] },
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55

const routes: Routes = [
  // Other routes...
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'order-create', component: OrderCreateComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'update-details/:id', component: UpdateDetailsComponent},
  {path: 'resdetails', component: ResdetailsComponent},
  {path: 'reslogin', component: ResloginComponent},
  {path: 'ressignup', component: RessignupComponent},
  {path:'',redirectTo:'reslogin',pathMatch:'full'},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] // Apply the AuthGuard to the profile route
  }
  
<<<<<<< HEAD
=======
  {path:'**',pathMatch:'full',redirectTo:'dashboard'}
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
