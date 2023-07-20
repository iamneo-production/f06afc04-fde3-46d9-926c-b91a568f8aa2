import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    UpdateCustomerComponent,
    OrderHistoryComponent,
    OrderCreateComponent,
    NotificationComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
