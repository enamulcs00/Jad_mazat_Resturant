import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RestaurantRoutingModule } from "./restaurant-routing.module";
import { CategoryComponent } from "./category/category.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { UiSwitchModule } from "ngx-ui-switch";
import { AddRestaurantComponent } from "./restaurant/add-restaurant/add-restaurant.component";
import { ViewRestaurantComponent } from "./restaurant/view-restaurant/view-restaurant.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { OrderComponent } from "./order/order.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { OutletComponent } from "./restaurant/outlet/outlet.component";
import { FoodTypeComponent } from "./restaurant/food-type/food-type.component";
import { FoodItemComponent } from "./restaurant/food-item/food-item.component";
import { AddFoodItemComponent } from "./restaurant/food-item/add-food-item/add-food-item.component";
// import { RestaurantTypeModalComponent } from './restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component';
import { ViewOrderComponent } from "./order/view-order/view-order.component";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module
// import { PaginationModule } from "ngx-bootstrap";
import { AddOnsComponent } from "./add-ons/add-ons/add-ons.component";
import { AddEditaddOnsComponent } from "./add-ons/add-editadd-ons/add-editadd-ons.component";

@NgModule({
  declarations: [
    CategoryComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    ViewRestaurantComponent,
    OrderComponent,
    OutletComponent,
    FoodTypeComponent,
    FoodItemComponent,
    AddFoodItemComponent,
    ViewOrderComponent,
    AddOnsComponent,
    AddEditaddOnsComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    NgMultiSelectDropDownModule.forRoot(),
    GooglePlaceModule,
    // PaginationModule.forRoot(),
    NgxPaginationModule,
  ],
  entryComponents: [],
})
export class RestaurantModule {}
