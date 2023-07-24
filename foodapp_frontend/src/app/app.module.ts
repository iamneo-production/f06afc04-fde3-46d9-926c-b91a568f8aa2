import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a7d4add (Update Restaurant)
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

import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantdashboardComponent } from './restaurantdashboard/restaurantdashboard.component';
import { HomeComponent } from './home/home.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
<<<<<<< HEAD
import { CheckoutComponent } from './checkout/checkout.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
=======


>>>>>>> a7d4add (Update Restaurant)
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
   
    MenuComponent,
    RestaurantdashboardComponent,
    HomeComponent,
<<<<<<< HEAD
    RestaurantlistComponent,
    CheckoutComponent,
    RestaurantdetailsComponent,
    UpdateCustomerComponent,
    ResdetailsComponent,
    NotificationComponent,
    ProfileComponent,
    OrderHistoryComponent,
    OrdertrackingComponent,
=======
    RestaurantlistComponent
>>>>>>> a7d4add (Update Restaurant)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

<<<<<<< HEAD
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> e632fe5 (frontebd)
=======
>>>>>>> a7d4add (Update Restaurant)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }