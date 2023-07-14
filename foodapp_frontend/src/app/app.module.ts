import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import {  FormsModule,  ReactiveFormsModule } from '@angular/forms';
=======
import {  FormsModule } from '@angular/forms';
>>>>>>> 07b30fd81a250e6070f26c7afcfe9712e30cc599
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
<<<<<<< HEAD
import { UserlistComponent } from './userlist/userlist.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { NotificationComponent } from './notification/notification.component';

=======
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
>>>>>>> 07b30fd81a250e6070f26c7afcfe9712e30cc599

@NgModule({
  declarations: [
    AppComponent,
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
    UserlistComponent,
    AboutComponent,
    UpdateuserComponent,
    NotificationComponent,
  

=======
    AboutComponent,
    AdminpanelComponent
>>>>>>> 07b30fd81a250e6070f26c7afcfe9712e30cc599
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule,
    ReactiveFormsModule
=======
    FormsModule
>>>>>>> 07b30fd81a250e6070f26c7afcfe9712e30cc599

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
