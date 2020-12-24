(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/cooldash/services/popup/popup.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/cooldash/services/popup/popup.service.ts ***!
  \**********************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/restaurant/category/categorymodal/categorymodal.component */ "./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.ts");
/* harmony import */ var _pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/restaurant/order/items-modal/items-modal.component */ "./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.ts");
/* harmony import */ var _pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/restaurant/order/accept-modal/accept-modal.component */ "./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.ts");
/* harmony import */ var _pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/restaurant/restaurant/outletmodal/outletmodal.component */ "./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.ts");
/* harmony import */ var _pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component */ "./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.ts");
/* harmony import */ var src_app_forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/forgot-password-modal/forgot-password-modal.component */ "./src/app/forgot-password-modal/forgot-password-modal.component.ts");









let PopupService = class PopupService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    addRestaurant() {
        const dialogRef = this.dialog.open(_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_3__["CategorymodalComponent"]);
        return dialogRef.afterClosed();
    }
    editRestaurant(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_3__["CategorymodalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    itemList(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_4__["ItemsModalComponent"]);
        dialogRef.componentInstance.items = item;
        return dialogRef.afterClosed();
    }
    orderAcceptModal() {
        const dialogRef = this.dialog.open(_pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_5__["AcceptModalComponent"]);
        return dialogRef.afterClosed();
    }
    addOutlet(id) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_6__["OutletmodalComponent"]);
        dialogRef.componentInstance.restaurantId = id;
        return dialogRef.afterClosed();
    }
    editOutlet(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_6__["OutletmodalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addType(id) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantTypeModalComponent"]);
        dialogRef.componentInstance.restaurantId = id;
        return dialogRef.afterClosed();
    }
    editType(item) {
        const dialogRef = this.dialog.open(_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantTypeModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    forgotPasswordsendEmail() {
        const dialogRef = this.dialog.open(src_app_forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordModalComponent"]);
        return dialogRef.afterClosed();
    }
};
PopupService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PopupService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map