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
import { CustomerService } from './customer.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResloginComponent,
    RessignupComponent,
    ProfileComponent,
    UpdateCustomerComponent,
    UpdateDetailsComponent,
    ResdetailsComponent,

 
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
