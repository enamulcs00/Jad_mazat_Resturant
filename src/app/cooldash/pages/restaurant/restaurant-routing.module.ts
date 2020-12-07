import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { AddRestaurantComponent } from "./restaurant/add-restaurant/add-restaurant.component";
import { ViewRestaurantComponent } from "./restaurant/view-restaurant/view-restaurant.component";
import { OrderComponent } from "./order/order.component";
import { OutletComponent } from "./restaurant/outlet/outlet.component";
import { FoodTypeComponent } from './restaurant/food-type/food-type.component';
import { FoodItemComponent } from './restaurant/food-item/food-item.component';
import { AddFoodItemComponent } from './restaurant/food-item/add-food-item/add-food-item.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';
import { AddOnsComponent } from './add-ons/add-ons/add-ons.component';
import { AddEditaddOnsComponent } from './add-ons/add-editadd-ons/add-editadd-ons.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Category"
    },
    children: [
      {
        path: "category",
        component: CategoryComponent,
        data: {
          title: ""
        }
      },
      {
        path: "restaurant",
        component: RestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddRestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewRestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "profile",
        component: AddRestaurantComponent,
        data: {
          title: ""
        }
      },
      {
        path: "order",
        component: OrderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "outlet",
        component: OutletComponent,
        data: {
          title: ""
        }
      },
      {
        path: "food-type",
        component: FoodTypeComponent,
        data: {
          title: ""
        }
      },
      {
        path: "food-item",
        component: FoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: 'add-ons',
        component: AddOnsComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add-add/add-add-ons/:id',
        component: AddEditaddOnsComponent,
        data: {
          title: ''
        }
      },
      {
        path: 'add-add/edit-add-ons/:id/:itemId',
        component: AddEditaddOnsComponent,
        data: {
          title: ''
        }
      },
      {
        path: "add-food-item/:id",
        component: AddFoodItemComponent,
        data: {
          title: ""
        }
      }, {
        path: "add-food-item/:id/:itemId",
        component: AddFoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-order/:id",
        component: ViewOrderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-order/:id",
        component: ViewOrderComponent,
        data: {
          title: ""
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
