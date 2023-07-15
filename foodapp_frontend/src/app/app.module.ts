import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { HeaderComponent } from './header/header.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderTrackingComponent,
    HeaderComponent,
    CancelOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
