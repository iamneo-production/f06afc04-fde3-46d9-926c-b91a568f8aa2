import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResloginComponent } from './reslogin/reslogin.component';
import { RessignupComponent } from './ressignup/ressignup.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ResdetailsComponent } from './resdetails/resdetails.component';
<<<<<<< HEAD
import { CustomerService } from './customer.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResloginComponent,
    RessignupComponent,
    ProfileComponent,
=======
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    DashboardComponent,
    UserloginComponent,
    UsersignupComponent,
    AdminsignupComponent,
    AdminloginComponent,
    RestaurantloginComponent,
    RestaurantsignupComponent,
    ContactusComponent,
    AboutComponent,
    AdminpanelComponent,
    MenuComponent,
    RestaurantdashboardComponent,
    HomeComponent,
    RestaurantlistComponent,
    CheckoutComponent,
    RestaurantdetailsComponent,
>>>>>>> b4bc5ad83b4543cda3b6f54f26fee259cf11f943
    UpdateCustomerComponent,
    UpdateDetailsComponent,
    ResdetailsComponent,
<<<<<<< HEAD

 
=======
    NotificationComponent,
    ProfileComponent,
    OrderHistoryComponent,
    OrdertrackingComponent,
>>>>>>> b4bc5ad83b4543cda3b6f54f26fee259cf11f943
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }

