import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

import { CommonModule } from '@angular/common';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { NotificationComponent } from './notification/notification.component';
import { ResloginComponent } from './reslogin/reslogin.component';
import { RessignupComponent } from './ressignup/ressignup.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
=======
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RestaurantdashboardComponent } from './restaurantdashboard/restaurantdashboard.component';
import { HomeComponent } from './home/home.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { OrderTrackingComponent } from './ordertracking/ordertracking.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { OrderComponent } from './order/order.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    UpdateCustomerComponent,
    OrderHistoryComponent,
    OrderCreateComponent,
    NotificationComponent,
    ResloginComponent,
    RessignupComponent,
    ResdetailsComponent,
    UpdateDetailsComponent,
    
   
=======
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
    OrderTrackingComponent,
    UpdateCustomerComponent,
    ResdetailsComponent,
    UpdateDetailsComponent,
    OrderComponent,
    NotificationComponent,
    ProfileComponent,
    OrderHistoryComponent
>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    CommonModule
=======
    FormsModule

>>>>>>> 68beb65b1438c5fec4706e0e680ce1345a0abb55
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
