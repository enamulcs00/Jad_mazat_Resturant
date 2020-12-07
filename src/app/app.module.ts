import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import "hammerjs";
import { MaterialModule } from "./cooldash/pages/material/material.module";
import { CategorymodalComponent } from "./cooldash/pages/restaurant/category/categorymodal/categorymodal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ng6-toastr-notifications";
import { AngularWebStorageModule } from "angular-web-storage";
import { ItemsModalComponent } from "./cooldash/pages/restaurant/order/items-modal/items-modal.component";
import { AcceptModalComponent } from "./cooldash/pages/restaurant/order/accept-modal/accept-modal.component";
import { AuthGuard } from "./commonservice/auth.guard";
import { AuthguardGuardGuard } from "./commonservice/authguard-guard.guard";
import { OrderService } from "./cooldash/services/order.service";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { OutletmodalComponent } from "./cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component";
import { RestaurantTypeModalComponent } from './cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorymodalComponent,
    ItemsModalComponent,
    AcceptModalComponent,
    OutletmodalComponent,
    RestaurantTypeModalComponent,
    ForgotPasswordModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularWebStorageModule,
    HttpClientModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmDirectionModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCudljC7a_B3udFOKv1YiY2N190wrRRVAw",
      libraries: ["geometry", "places"]
    })
  ],
  providers: [AuthGuard, AuthguardGuardGuard, OrderService],
  bootstrap: [AppComponent],
  entryComponents: [
    CategorymodalComponent,
    ItemsModalComponent,
    AcceptModalComponent,
    OutletmodalComponent,
    RestaurantTypeModalComponent,
    ForgotPasswordModalComponent
  ]
})
export class AppModule { }
