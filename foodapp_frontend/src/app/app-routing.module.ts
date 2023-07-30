import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


import { ProfileComponent } from './profile/profile.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
<<<<<<< HEAD

=======
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
>>>>>>> b4bc5ad83b4543cda3b6f54f26fee259cf11f943

import { UpdateDetailsComponent } from './update-details/update-details.component';

import { ResloginComponent } from './reslogin/reslogin.component';
import { RessignupComponent } from './ressignup/ressignup.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';





const routes: Routes = [
<<<<<<< HEAD
  // Other routes...
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile/:id', component: ProfileComponent },
  {path: 'update-customer/:id', component: UpdateCustomerComponent},

  {path: 'update-details/:id', component: UpdateDetailsComponent},
  {path: 'resdetails', component: ResdetailsComponent},
  {path: 'reslogin', component: ResloginComponent},
  {path: 'ressignup', component: RessignupComponent},
  {path:'',redirectTo:'reslogin',pathMatch:'full'},
  {
    path: 'profile',
    component: ProfileComponent,
    // Apply the AuthGuard to the profile route
  }
=======

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
  {path: 'ordertracking',component:OrdertrackingComponent, canActivate: [UserAuthGuard]},
  {path: 'restaurantdashboard', component: RestaurantdashboardComponent, canActivate: [RestaurantAuthGuard] },
  {path: 'adminpanel', component: AdminpanelComponent, canActivate: [AdminAuthGuard] },
  {path: 'adminsignup',component:AdminsignupComponent, canActivate: [AdminAuthGuard] },

>>>>>>> b4bc5ad83b4543cda3b6f54f26fee259cf11f943
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }