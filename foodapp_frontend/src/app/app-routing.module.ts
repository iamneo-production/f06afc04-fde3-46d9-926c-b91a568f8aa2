import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
