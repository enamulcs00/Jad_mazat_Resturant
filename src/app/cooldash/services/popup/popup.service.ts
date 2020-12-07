import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CategorymodalComponent } from "../../pages/restaurant/category/categorymodal/categorymodal.component";
import { ItemsModalComponent } from "../../pages/restaurant/order/items-modal/items-modal.component";
import { AcceptModalComponent } from "../../pages/restaurant/order/accept-modal/accept-modal.component";
import { OutletmodalComponent } from "../../pages/restaurant/restaurant/outletmodal/outletmodal.component";
import { RestaurantTypeModalComponent } from '../../pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component';
import { ForgotPasswordModalComponent } from 'src/app/forgot-password-modal/forgot-password-modal.component';

@Injectable({
  providedIn: "root"
})
export class PopupService {
  constructor(public dialog: MatDialog) { }

  addRestaurant() {
    const dialogRef = this.dialog.open(CategorymodalComponent);
    return dialogRef.afterClosed();
  }

  editRestaurant(item) {
    const dialogRef = this.dialog.open(CategorymodalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  itemList(item) {
    const dialogRef = this.dialog.open(ItemsModalComponent);
    dialogRef.componentInstance.items = item;
    return dialogRef.afterClosed();
  }

  orderAcceptModal() {
    const dialogRef = this.dialog.open(AcceptModalComponent);
    return dialogRef.afterClosed();
  }

  addOutlet(id) {
    const dialogRef = this.dialog.open(OutletmodalComponent);
    dialogRef.componentInstance.restaurantId = id;
    return dialogRef.afterClosed();
  }

  editOutlet(item) {
    const dialogRef = this.dialog.open(OutletmodalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addType(id) {
    const dialogRef = this.dialog.open(RestaurantTypeModalComponent);
    dialogRef.componentInstance.restaurantId = id;
    return dialogRef.afterClosed();
  }

  editType(item) {
    const dialogRef = this.dialog.open(RestaurantTypeModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  forgotPasswordsendEmail() {
    const dialogRef = this.dialog.open(ForgotPasswordModalComponent);
    return dialogRef.afterClosed();
  }
}
