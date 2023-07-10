import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
<<<<<<< HEAD
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 099de46 (updated the home and search components for home screen)
=======
import {  FormsModule } from '@angular/forms';
>>>>>>> ec75852 (header, userlogin, dashboard was updated)


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ec75852 (header, userlogin, dashboard was updated)
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RestaurantloginComponent } from './restaurantlogin/restaurantlogin.component';
import { RestaurantsignupComponent } from './restaurantsignup/restaurantsignup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
<<<<<<< HEAD
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantdashboardComponent } from './restaurantdashboard/restaurantdashboard.component';
import { HomeComponent } from './home/home.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ResdetailsComponent } from './resdetails/resdetails.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
=======

@NgModule({
  declarations: [
    AppComponent,
>>>>>>> ec75852 (header, userlogin, dashboard was updated)
    HeaderComponent,
    DashboardComponent,
    UserloginComponent,
    UsersignupComponent,
    AdminsignupComponent,
    AdminloginComponent,
    RestaurantloginComponent,
    RestaurantsignupComponent,
    ContactusComponent,
<<<<<<< HEAD
    AboutComponent,
    AdminpanelComponent,
    MenuComponent,
    RestaurantdashboardComponent,
    HomeComponent,
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
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent
>>>>>>> 099de46 (updated the home and search components for home screen)
=======
    AboutComponent
>>>>>>> ec75852 (header, userlogin, dashboard was updated)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
<<<<<<< HEAD
    HttpClientModule,
    FormsModule

=======
    FormsModule,
    HttpClientModule,
>>>>>>> 099de46 (updated the home and search components for home screen)
=======
    FormsModule

>>>>>>> ec75852 (header, userlogin, dashboard was updated)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
