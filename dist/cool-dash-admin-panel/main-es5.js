(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCooldashPagesRestaurantCategoryCategorymodalCategorymodalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title *ngIf=\"item\">Edit Category</h2>\r\n<h2 mat-dialog-title *ngIf=\"!item\">Add Category</h2>\r\n<mat-dialog-content>\r\n  <form [formGroup]=\"categoryForm\">\r\n    <div class=\"usr_profile_inrmain\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"usr_profile_biodata\">\r\n            <label>Category Name</label>\r\n            <div class=\"input-group\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                name=\"name\"\r\n                formControlName=\"name\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"usr_profile_img\">\r\n            <div class=\"usr_profile_imgbx\">\r\n              <label>Image</label>\r\n              <div class=\"user_img\">\r\n                <figure *ngIf=\"categoryImage\">\r\n                  <img\r\n                    style=\"height: 50px; width: 50px\"\r\n                    [src]=\"categoryImage\"\r\n                  />\r\n                </figure>\r\n              </div>\r\n            </div>\r\n            <div class=\"user_profile_edit\">\r\n              <input\r\n                type=\"file\"\r\n                accept=\"image/*\"\r\n                (change)=\"profilePic($event)\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button\r\n    class=\"mat-raised-button mat-primary mr-3\"\r\n    *ngIf=\"!item\"\r\n    (click)=\"onSubmit()\"\r\n  >\r\n    Add Category\r\n  </button>\r\n  <button\r\n    class=\"mat-raised-button mat-primary mr-3\"\r\n    *ngIf=\"item\"\r\n    (click)=\"onUpdate()\"\r\n  >\r\n    Edit Category\r\n  </button>\r\n  <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCooldashPagesRestaurantOrderAcceptModalAcceptModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Estimate Order Time</h2>\r\n<mat-dialog-content>\r\n  <input type=\"number\" min=\"0\" [(ngModel)]=\"time\" class=\"form-control\" />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button class=\"mat-raised-button mat-primary mr-3\" (click)=\"onSubmit()\">\r\n    Accept\r\n  </button>\r\n  <button class=\"mat-raised-button\" (click)=\"close()\">Reject</button>\r\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCooldashPagesRestaurantOrderItemsModalItemsModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"items && items.length > 0\">\r\n  <h2 mat-dialog-title>Order Items</h2>\r\n  <mat-dialog-content>\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n          <thead>\r\n            <tr>\r\n              <th>#</th>\r\n              <th>Name</th>\r\n              <th>Qunatity</th>\r\n              <th>Amount</th>\r\n              <th>Total Amount</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of items; let i = index\">\r\n              <td>{{ i + serialNumber + 1 }}</td>\r\n              <td>\r\n                {{ item._id }}\r\n              </td>\r\n              <td>{{ item.quantity }}</td>\r\n              <td>\r\n                {{ item.amount }}\r\n              </td>\r\n              <td>{{ item.totalAmount }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <h4 *ngIf=\"items.length == 0\" class=\"text-center\">\r\n          No records found.\r\n        </h4>\r\n      </div>\r\n    </div>\r\n  </mat-dialog-content>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.html":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.html ***!
    \*****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCooldashPagesRestaurantRestaurantFoodTypeRestaurantTypeModalRestaurantTypeModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title *ngIf=\"item\">Edit Food Category</h2>\n<h2 mat-dialog-title *ngIf=\"restaurantId\">Add Food Category</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"categoryForm\" class=\"p-2\">\n    <div class=\"usr_profile_inrmain\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"usr_profile_biodata\">\n            <label>Food Category</label>\n            <div class=\"input-group\">\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"name\"\n                formControlName=\"name\"\n              />\n            </div>\n            <div\n              *ngIf=\"submitted && categoryForm.controls.name.errors\"\n              class=\"invalid-feedback\"\n            >\n              <div *ngIf=\"categoryForm.controls.name.errors.required\">\n                Food Category is required\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-6\">\n          <div class=\"usr_profile_biodata\">\n            <label>فئة الغذاء</label>\n            <div class=\"input-group\">\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                name=\"\"\n                formControlName=\"name_ar\"\n              />\n            </div>\n            <div\n              *ngIf=\"submitted && categoryForm.controls.name.errors\"\n              class=\"invalid-feedback\"\n            >\n              <div *ngIf=\"categoryForm.controls.name.errors.required\">\n                Food Category is required\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button class=\"btn btn-primary mr-3\" *ngIf=\"!item\" (click)=\"onSubmit()\">\n    Add Category\n  </button>\n  <button class=\"btn btn-primary mr-3\" *ngIf=\"item\" (click)=\"onUpdate()\">\n    Edit Category\n  </button>\n  <button class=\"btn btn-danger\" (click)=\"close()\">Close</button>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCooldashPagesRestaurantRestaurantOutletmodalOutletmodalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title *ngIf=\"item\">Edit Outlet</h2>\r\n<h2 mat-dialog-title *ngIf=\"restaurantId\">Add Outlet</h2>\r\n<mat-dialog-content>\r\n    <div class=\"contact_us_map\" *ngIf=\"latitude && longitude\">\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\r\n            <agm-marker (dragEnd)=\"markerDragEnds($event)\" [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"></agm-marker>\r\n        </agm-map>\r\n    </div>\r\n    <form [formGroup]=\"outletForm\">\r\n        <div class=\"usr_profile_inrmain\">\r\n            <div class=\"usr_profile_biodata\">\r\n                <label for=\"address\">Address</label>\r\n                <div class=\"input-group\">\r\n                    <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"address\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddress($event)\" placeholder=\"Address\" />\r\n                    <div *ngIf=\"submitted && outletForm.controls.address.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"outletForm.controls.address.errors.required\">\r\n                            Address is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <button class=\"btn btn-primary mr-3\" *ngIf=\"restaurantId\" (click)=\"onSubmit()\">\r\n    Add Outlet\r\n  </button>\r\n    <button class=\"btn btn-primary mr-3\" *ngIf=\"item\" (click)=\"onUpdate()\">\r\n    Edit Outlet\r\n  </button>\r\n    <button class=\"btn btn-danger\" (click)=\"close()\">Close</button>\r\n</mat-dialog-actions>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-modal/forgot-password-modal.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-modal/forgot-password-modal.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppForgotPasswordModalForgotPasswordModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Forgot Password</h2>\n<mat-dialog-content>\n    <form >\n    <div class=\"form-group\">\n        <input\n          type=\"email\"\n          class=\"form-control form-control-user\"\n          name=\"email\"\n          id=\"exampleInputEmail\"\n          [formControl]=\"email\"\n          aria-describedby=\"emailHelp\"\n          placeholder=\"Enter Email Address...\"\n          required\n        />\n      </div>\n    </form>\n    <div *ngIf=\"isSubmitted && email.invalid\" class=\"error-msg\">\n      <div *ngIf=\"email.errors.required\">\n          Email is required\n      </div>\n      <div *ngIf=\"email.errors.pattern\">\n        Email is not valid\n    </div>\n    </div>\n      \n</mat-dialog-content>\n<mat-dialog-actions>\n  <button class=\"mat-raised-button mat-primary mr-3\" type=\"submit\" (click)=\"onSubmit()\">\n    Submit\n  </button>\n  <button class=\"mat-raised-button\" (click)=\"close()\">Cancel</button>\n</mat-dialog-actions>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _commonservice_authguard_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./commonservice/authguard-guard.guard */
    "./src/app/commonservice/authguard-guard.guard.ts");

    const routes = [{
      path: "",
      redirectTo: "/login",
      pathMatch: "full"
    }, {
      path: "",
      canActivate: [_commonservice_authguard_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthguardGuardGuard"]],
      loadChildren: () => __webpack_require__.e(
      /*! import() | cooldash-cooldash-module */
      "cooldash-cooldash-module").then(__webpack_require__.bind(null,
      /*! ./cooldash/cooldash.module */
      "./src/app/cooldash/cooldash.module.ts")).then(m => m.CoolDashModule)
    }, {
      path: "login",
      loadChildren: () => Promise.all(
      /*! import() | login-login-module */
      [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
      /*! ./login/login.module */
      "./src/app/login/login.module.ts")).then(m => m.LoginModule)
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {};
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _cooldash_pages_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cooldash/pages/material/material.module */
    "./src/app/cooldash/pages/material/material.module.ts");
    /* harmony import */


    var _cooldash_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cooldash/pages/restaurant/category/categorymodal/categorymodal.component */
    "./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var angular_web_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-web-storage */
    "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
    /* harmony import */


    var _cooldash_pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./cooldash/pages/restaurant/order/items-modal/items-modal.component */
    "./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.ts");
    /* harmony import */


    var _cooldash_pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./cooldash/pages/restaurant/order/accept-modal/accept-modal.component */
    "./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.ts");
    /* harmony import */


    var _commonservice_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./commonservice/auth.guard */
    "./src/app/commonservice/auth.guard.ts");
    /* harmony import */


    var _commonservice_authguard_guard_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./commonservice/authguard-guard.guard */
    "./src/app/commonservice/authguard-guard.guard.ts");
    /* harmony import */


    var _cooldash_services_order_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./cooldash/services/order.service */
    "./src/app/cooldash/services/order.service.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var agm_direction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! agm-direction */
    "./node_modules/agm-direction/fesm2015/agm-direction.js");
    /* harmony import */


    var _cooldash_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component */
    "./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.ts");
    /* harmony import */


    var _cooldash_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component */
    "./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.ts");
    /* harmony import */


    var _forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./forgot-password-modal/forgot-password-modal.component */
    "./src/app/forgot-password-modal/forgot-password-modal.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _cooldash_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_8__["CategorymodalComponent"], _cooldash_pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_14__["ItemsModalComponent"], _cooldash_pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_15__["AcceptModalComponent"], _cooldash_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_22__["OutletmodalComponent"], _cooldash_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_23__["RestaurantTypeModalComponent"], _forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_24__["ForgotPasswordModalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], angular_web_storage__WEBPACK_IMPORTED_MODULE_13__["AngularWebStorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"], _cooldash_pages_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], agm_direction__WEBPACK_IMPORTED_MODULE_21__["AgmDirectionModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_19__["GooglePlaceModule"], _agm_core__WEBPACK_IMPORTED_MODULE_20__["AgmCoreModule"].forRoot({
        apiKey: "AIzaSyCudljC7a_B3udFOKv1YiY2N190wrRRVAw",
        libraries: ["geometry", "places"]
      })],
      providers: [_commonservice_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _commonservice_authguard_guard_guard__WEBPACK_IMPORTED_MODULE_17__["AuthguardGuardGuard"], _cooldash_services_order_service__WEBPACK_IMPORTED_MODULE_18__["OrderService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
      entryComponents: [_cooldash_pages_restaurant_category_categorymodal_categorymodal_component__WEBPACK_IMPORTED_MODULE_8__["CategorymodalComponent"], _cooldash_pages_restaurant_order_items_modal_items_modal_component__WEBPACK_IMPORTED_MODULE_14__["ItemsModalComponent"], _cooldash_pages_restaurant_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_15__["AcceptModalComponent"], _cooldash_pages_restaurant_restaurant_outletmodal_outletmodal_component__WEBPACK_IMPORTED_MODULE_22__["OutletmodalComponent"], _cooldash_pages_restaurant_restaurant_food_type_restaurant_type_modal_restaurant_type_modal_component__WEBPACK_IMPORTED_MODULE_23__["RestaurantTypeModalComponent"], _forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_24__["ForgotPasswordModalComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/commonservice/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/commonservice/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCommonserviceAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cooldash/services/api/api.service */
    "./src/app/cooldash/services/api/api.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
      }

      canActivate(next, state) {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.myRoute.navigate(['/login']);
        }
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/commonservice/authguard-guard.guard.ts":
  /*!********************************************************!*\
    !*** ./src/app/commonservice/authguard-guard.guard.ts ***!
    \********************************************************/

  /*! exports provided: AuthguardGuardGuard */

  /***/
  function srcAppCommonserviceAuthguardGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardGuardGuard", function () {
      return AuthguardGuardGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cooldash/services/api/api.service */
    "./src/app/cooldash/services/api/api.service.ts");

    let AuthguardGuardGuard = class AuthguardGuardGuard {
      constructor(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
      }

      canActivate(next, state) {
        if (this.auth.isLoggedIn()) {
          return true;
        } else {
          this.myRoute.navigate(["/login"]);
        }
      }

    };

    AuthguardGuardGuard.ctorParameters = () => [{
      type: _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthguardGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthguardGuardGuard);
    /***/
  },

  /***/
  "./src/app/cooldash/pages/material/material.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/cooldash/pages/material/material.module.ts ***!
    \************************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppCooldashPagesMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let MaterialModule = class MaterialModule {};
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCooldashPagesRestaurantCategoryCategorymodalCategorymodalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button:disabled {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rlc2t0b3AvQ2hpcmFnL01hbmdvL01hemF0L21hemF0X3Jlc3RhdXJhbnQvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L2NhdGVnb3J5L2NhdGVnb3J5bW9kYWwvY2F0ZWdvcnltb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9jYXRlZ29yeS9jYXRlZ29yeW1vZGFsL2NhdGVnb3J5bW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9jYXRlZ29yeS9jYXRlZ29yeW1vZGFsL2NhdGVnb3J5bW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9IiwiYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CategorymodalComponent */

  /***/
  function srcAppCooldashPagesRestaurantCategoryCategorymodalCategorymodalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategorymodalComponent", function () {
      return CategorymodalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/common/common.service */
    "./src/app/cooldash/services/common/common.service.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/api/api.service */
    "./src/app/cooldash/services/api/api.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    let CategorymodalComponent = class CategorymodalComponent {
      constructor(dialog, formBuilder, comm, api, toastr) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.submitted = false;

        this.setValues = () => {
          if (this.item) {
            this.categoryForm.patchValue({
              name: this.item.name
            });

            if (this.item.image) {
              this.categoryImage = this.comm.imageUrl + this.item.image;
            }
          }
        };

        this.errorHandling = (control, error) => {
          return this.categoryForm.controls[control].hasError(error);
        };
      }

      ngOnInit() {
        this.categoryForm = this.formBuilder.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });

        if (this.item) {
          console.log(this.item);
          this.setValues();
        }
      }

      profilePic(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.File = event.target.files[0];

          if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = event => {
              this.categoryImage = event.target.result;
            };
          }
        });
      }

      onSubmit() {
        this.submitted = true;

        if (this.File) {
          if (this.categoryForm.valid && this.submitted) {
            var data = {
              name: this.categoryForm.controls["name"].value
            };
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));
            formData.append("image", this.File);
            this.api.addFoodCategory(formData).subscribe(res => {
              if (res["response"]["success"]) {
                this.toastr.successToastr(res["response"]["message"]);
                this.dialog.close("yes");
              } else {
                this.toastr.errorToastr(res["response"]["message"]);
                this.dialog.close("no");
              }
            });
          }
        } else {
          this.toastr.errorToastr("Please fill in all the required fields.");
        }
      }

      close() {
        this.dialog.close();
      }

      onUpdate() {
        this.submitted = true;

        if (this.File || this.item.image) {
          if (this.categoryForm.valid && this.submitted) {
            var data = {
              name: this.categoryForm.controls["name"].value,
              updateId: this.item._id
            };
            let formData = new FormData();
            formData.append("data", JSON.stringify(data));

            if (this.File) {
              formData.append("image", this.File);
            } else {
              formData.append("image", this.item.image);
            }

            this.api.editFoodCategory(formData).subscribe(res => {
              if (res["response"]["success"]) {
                this.toastr.successToastr(res["response"]["message"]);
                this.dialog.close("yes");
              } else {
                this.toastr.errorToastr(res["response"]["message"]);
                this.dialog.close("no");
              }
            });
          } else {
            this.toastr.errorToastr("Please fill in all the required fields.");
          }
        }
      }

    };

    CategorymodalComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }, {
      type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
    }, {
      type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
    }];

    CategorymodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-categorymodal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categorymodal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categorymodal.component.scss */
      "./src/app/cooldash/pages/restaurant/category/categorymodal/categorymodal.component.scss")).default]
    })], CategorymodalComponent);
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCooldashPagesRestaurantOrderAcceptModalAcceptModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvb3JkZXIvYWNjZXB0LW1vZGFsL2FjY2VwdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AcceptModalComponent */

  /***/
  function srcAppCooldashPagesRestaurantOrderAcceptModalAcceptModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcceptModalComponent", function () {
      return AcceptModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    let AcceptModalComponent = class AcceptModalComponent {
      constructor(dialog) {
        this.dialog = dialog;
      }

      ngOnInit() {}

      close() {
        var data = {
          response: "no",
          time: this.time
        };
        this.dialog.close(data);
      }

      onSubmit() {
        var data = {
          response: "yes",
          time: this.time
        };
        this.dialog.close(data);
      }

    };

    AcceptModalComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }];

    AcceptModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-accept-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accept-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accept-modal.component.scss */
      "./src/app/cooldash/pages/restaurant/order/accept-modal/accept-modal.component.scss")).default]
    })], AcceptModalComponent);
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCooldashPagesRestaurantOrderItemsModalItemsModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvb3JkZXIvaXRlbXMtbW9kYWwvaXRlbXMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ItemsModalComponent */

  /***/
  function srcAppCooldashPagesRestaurantOrderItemsModalItemsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsModalComponent", function () {
      return ItemsModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ItemsModalComponent = class ItemsModalComponent {
      constructor() {
        this.serialNumber = 0;
      }

      ngOnInit() {}

    };
    ItemsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-items-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./items-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./items-modal.component.scss */
      "./src/app/cooldash/pages/restaurant/order/items-modal/items-modal.component.scss")).default]
    })], ItemsModalComponent);
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.scss":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.scss ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCooldashPagesRestaurantRestaurantFoodTypeRestaurantTypeModalRestaurantTypeModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rlc2t0b3AvQ2hpcmFnL01hbmdvL01hemF0L21hemF0X3Jlc3RhdXJhbnQvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvZm9vZC10eXBlL3Jlc3RhdXJhbnQtdHlwZS1tb2RhbC9yZXN0YXVyYW50LXR5cGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9mb29kLXR5cGUvcmVzdGF1cmFudC10eXBlLW1vZGFsL3Jlc3RhdXJhbnQtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvZm9vZC10eXBlL3Jlc3RhdXJhbnQtdHlwZS1tb2RhbC9yZXN0YXVyYW50LXR5cGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XHJcbiAgICBmb250LXNpemU6IDk1JTtcclxuICAgIGNvbG9yOiAjZjU1MzUzO1xyXG4gIH1cclxuICAiLCIuaW52YWxpZC1mZWVkYmFjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcbiAgZm9udC1zaXplOiA5NSU7XG4gIGNvbG9yOiAjZjU1MzUzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: RestaurantTypeModalComponent */

  /***/
  function srcAppCooldashPagesRestaurantRestaurantFoodTypeRestaurantTypeModalRestaurantTypeModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestaurantTypeModalComponent", function () {
      return RestaurantTypeModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/common/common.service */
    "./src/app/cooldash/services/common/common.service.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../services/api/api.service */
    "./src/app/cooldash/services/api/api.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");

    let RestaurantTypeModalComponent = class RestaurantTypeModalComponent {
      constructor(dialog, formBuilder, comm, api, toastr) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.submitted = false;

        this.setValues = () => {
          if (this.item) {
            this.categoryForm.patchValue({
              name: this.item.name,
              name_ar: this.item.name_ar
            });
          }
        };

        this.errorHandling = (control, error) => {
          return this.categoryForm.controls[control].hasError(error);
        };
      }

      ngOnInit() {
        this.restaurantId = localStorage.getItem("id");
        this.categoryForm = this.formBuilder.group({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });

        if (this.item) {
          this.setValues();
        }
      }

      onSubmit() {
        this.submitted = true;

        if (this.categoryForm.valid && this.submitted) {
          var data = {
            name: this.categoryForm.controls["name"].value,
            name_ar: this.categoryForm.controls["name_ar"].value,
            restaurantId: this.restaurantId
          };
          this.api.addRestaurantFoodType(data).subscribe(res => {
            if (res["response"]["success"]) {
              this.toastr.successToastr(res["response"]["message"]);
              this.dialog.close("yes");
            } else {
              this.toastr.errorToastr(res["response"]["message"]);
              this.dialog.close("no");
            }
          });
        }
      }

      close() {
        this.dialog.close();
      }

      onUpdate() {
        this.submitted = true;

        if (this.categoryForm.valid && this.submitted) {
          var data = {
            name: this.categoryForm.controls["name"].value,
            name_ar: this.categoryForm.controls["name_ar"].value,
            updateId: this.item._id,
            restaurantId: this.item.restaurantId
          };
          this.api.editRestaurantFoodType(data).subscribe(res => {
            if (res["response"]["success"]) {
              this.toastr.successToastr(res["response"]["message"]);
              this.dialog.close("yes");
            } else {
              this.toastr.errorToastr(res["response"]["message"]);
              this.dialog.close("no");
            }
          });
        }
      }

    };

    RestaurantTypeModalComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }, {
      type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
    }, {
      type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
    }];

    RestaurantTypeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-restaurant-type-modal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./restaurant-type-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./restaurant-type-modal.component.scss */
      "./src/app/cooldash/pages/restaurant/restaurant/food-type/restaurant-type-modal/restaurant-type-modal.component.scss")).default]
    })], RestaurantTypeModalComponent);
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCooldashPagesRestaurantRestaurantOutletmodalOutletmodalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button:disabled {\n  cursor: not-allowed;\n}\n\n.invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n\nagm-map {\n  height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rlc2t0b3AvQ2hpcmFnL01hbmdvL01hemF0L21hemF0X3Jlc3RhdXJhbnQvc3JjL2FwcC9jb29sZGFzaC9wYWdlcy9yZXN0YXVyYW50L3Jlc3RhdXJhbnQvb3V0bGV0bW9kYWwvb3V0bGV0bW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3Jlc3RhdXJhbnQvcmVzdGF1cmFudC9vdXRsZXRtb2RhbC9vdXRsZXRtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREFHO0VBQ0QsYUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvcmVzdGF1cmFudC9yZXN0YXVyYW50L291dGxldG1vZGFsL291dGxldG1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVkIHtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMC4xNHJlbTtcclxuICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gIGZvbnQtc2l6ZTogOTUlO1xyXG4gIGNvbG9yOiAjZjU1MzUzO1xyXG59ICBhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbiIsImJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDM1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: OutletmodalComponent */

  /***/
  function srcAppCooldashPagesRestaurantRestaurantOutletmodalOutletmodalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OutletmodalComponent", function () {
      return OutletmodalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/common/common.service */
    "./src/app/cooldash/services/common/common.service.ts");
    /* harmony import */


    var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/api/api.service */
    "./src/app/cooldash/services/api/api.service.ts");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");

    let OutletmodalComponent = class OutletmodalComponent {
      constructor(dialog, formBuilder, comm, api, toastr, mapsAPILoader) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.mapsAPILoader = mapsAPILoader;
        this.submitted = false;
        this.updateAddrssStatus = false;

        this.setValues = () => {
          if (this.item) {
            this.outletForm.patchValue({
              address: this.item.address,
              latitude: this.item.latitude,
              longitude: this.item.longitude,
              restaurantId: this.item.restaurantId
            });
          }

          this.latitude = this.item.latitude, this.longitude = this.item.longitude, this.updateAddress = this.outletForm.controls['address'].value;
        };

        this.errorHandling = (control, error) => {
          return this.outletForm.controls[control].hasError(error);
        };
      }

      ngOnInit() {
        this.mapsAPILoader.load().then(() => {
          this.geoCoder = new google.maps.Geocoder();
        });
        this.outletForm = this.formBuilder.group({
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          restaurantId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });

        if (this.item) {
          console.log(this.item);
          this.setValues();
        } else {
          this.setCurrentLocation();
        }
      }

      setCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.zoom = 11;
            this.getAddress(this.latitude, this.longitude);
          });
        }
      }

      getAddress(latitude, longitude) {
        this.geoCoder.geocode({
          location: {
            lat: latitude,
            lng: longitude
          }
        }, (results, status) => {
          this.addressLocation = results[0].formatted_address;
          this.outletForm.patchValue({
            address: this.addressLocation,
            latitude: latitude,
            longitude: longitude
          });
          console.log(this.addressLocation);
        });
      }

      onSubmit() {
        this.submitted = true;
        this.outletForm.controls["restaurantId"].setValue(this.restaurantId);

        if (this.outletForm['controls'].latitude.value !== "" && this.outletForm['controls'].latitude.value !== null && this.outletForm['controls'].longitude.value !== "" && this.outletForm['controls'].longitude.value !== null) {
          if (this.submitted && this.outletForm.valid) {
            this.api.addRestaurantOutlet(this.outletForm.value).subscribe(res => {
              if (res["response"]["success"]) {
                this.toastr.successToastr(res["response"]["message"]);
                this.dialog.close("yes");
              } else {
                this.toastr.errorToastr(res["response"]["message"]);
                this.dialog.close("no");
              }
            });
          }
        } else if (this.outletForm['controls'].address.value) {
          this.toastr.errorToastr("Please select a valid address from suggestions.");
        }
      }

      close() {
        this.dialog.close();
      }

      onUpdate() {
        this.submitted = true;
        this.outletForm.controls["restaurantId"].setValue(this.item.restaurantId);

        if (this.outletForm.valid && this.submitted) {
          if (this.outletForm['controls'].address.value === this.updateAddress) {
            this.editRestaurantOutlet();
          } else if (this.updateAddrssStatus && this.outletForm['controls'].latitude.value !== "" && this.outletForm['controls'].latitude.value !== null && this.outletForm['controls'].longitude.value !== "" && this.outletForm['controls'].longitude.value !== null) {
            this.editRestaurantOutlet();
          } else if (this.outletForm['controls'].address.value && this.updateAddrssStatus == false) {
            this.toastr.errorToastr("Please select a valid address from suggestions.");
          }
        }
      }

      editRestaurantOutlet() {
        if (this.outletForm.valid && this.submitted) {
          var data = {
            address: this.outletForm.controls["address"].value,
            latitude: this.outletForm.controls["latitude"].value,
            longitude: this.outletForm.controls["longitude"].value,
            restaurantId: this.outletForm.controls["restaurantId"].value,
            updateId: this.item._id
          };
          this.api.editRestaurantOutlet(data).subscribe(res => {
            if (res["response"]["success"]) {
              this.toastr.successToastr(res["response"]["message"]);
              this.dialog.close("yes");
            } else {
              this.toastr.errorToastr(res["response"]["message"]);
              this.dialog.close("no");
            }
          });
        } else if (this.outletForm['controls'].address.value) {
          this.toastr.errorToastr("Please select a valid address from suggestions.");
        }
      }

      handleAddress(address) {
        this.updateAddrssStatus = true;

        if (address.formatted_address) {
          var outlet = {
            address: address.formatted_address,
            latitude: address.geometry.location.lat(),
            longitude: address.geometry.location.lng()
          };
          this.outletForm.controls["address"].setValue(address.formatted_address);
          this.outletForm.controls["latitude"].setValue(address.geometry.location.lat());
          this.outletForm.controls["longitude"].setValue(address.geometry.location.lng());
        }

        this.latitude = address.geometry.location.lat();
        this.longitude = address.geometry.location.lng();
      }

      markerDragEnds(event) {
        this.latitude = event['coords'].lat;
        this.longitude = event['coords'].lng;
        this.getAddress(this.latitude, this.longitude);
        this.updateAddrssStatus = true;
      }

    };

    OutletmodalComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
    }, {
      type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }, {
      type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
    }, {
      type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]
    }, {
      type: _agm_core__WEBPACK_IMPORTED_MODULE_7__["MapsAPILoader"]
    }];

    OutletmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-outletmodal",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./outletmodal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./outletmodal.component.scss */
      "./src/app/cooldash/pages/restaurant/restaurant/outletmodal/outletmodal.component.scss")).default]
    })], OutletmodalComponent);
    /***/
  },

  /***/
  "./src/app/cooldash/services/api/api.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/cooldash/services/api/api.service.ts ***!
    \******************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppCooldashServicesApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _url_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../url/url.service */
    "./src/app/cooldash/services/url/url.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../common/common.service */
    "./src/app/cooldash/services/common/common.service.ts");

    let ApiService = class ApiService {
      constructor(http, url, comm) {
        this.http = http;
        this.url = url;
        this.comm = comm;
        this.getCountryCode();
      }

      getCountryCode() {
        return this.http.get("assets/json/countryCode.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => response));
      }

      singIn(body) {
        return this.http.post(this.comm.baseUrl + "/panel/login", body);
      }

      forgotPasswordSendEmail(body) {
        return this.http.post(this.comm.baseUrl + "/panel/forgotpass", body);
      }

      sendToken(token) {
        localStorage.setItem("token", token);
      }

      getToken() {
        return localStorage.getItem("token");
      }

      isLoggedIn() {
        return this.getToken() !== null;
      }

      getAllRestaurantCategories() {
        return this.http.get(this.comm.baseUrl + "/food/category");
      }

      addFoodCategory(body) {
        return this.http.post(this.comm.baseUrl + "/food/category", body);
      }

      editFoodCategory(body) {
        return this.http.put(this.comm.baseUrl + "/food/category", body);
      }

      getAllRestaurant() {
        return this.http.get(this.comm.baseUrl + "/food/restaurant");
      }

      editFoodRestaurant(body) {
        return this.http.put(this.comm.baseUrl + "/food/restaurant", body);
      }

      getResturantById(id) {
        return this.http.get(this.comm.baseUrl + "/food/restaurant/" + id);
      }

      getResturantFoodItemById(id) {
        return this.http.get(this.comm.baseUrl + "/food/itembyid/" + id);
      }

      addFoodRestaurant(body) {
        return this.http.post(this.comm.baseUrl + "/food/restaurant", body);
      }

      getAllOrders(page, id) {
        return this.http.get(this.comm.baseUrl + "/food/orders?&page=" + page + "&restaurantId=" + id);
      }

      getPendingOrders(status, page, id) {
        return this.http.get(this.comm.baseUrl + "/food/orders?status=" + status + "&page=" + page + "&restaurantId=" + id);
      }

      getOutletById(id) {
        return this.http.get(this.comm.baseUrl + "/food/restaurant/outlet/" + id);
      }

      addRestaurantOutlet(body) {
        return this.http.post(this.comm.baseUrl + "/food/restaurant/outlet", body);
      }

      editRestaurantOutlet(body) {
        return this.http.put(this.comm.baseUrl + "/food/restaurant/outlet", body);
      }

      getRestaurantTypeById(id) {
        return this.http.get(this.comm.baseUrl + "/food/type/" + id);
      }

      getRestaurantItemeById(id) {
        return this.http.get(this.comm.baseUrl + "/food/item/" + id);
      }

      addRestaurantFoodType(body) {
        return this.http.post(this.comm.baseUrl + "/food/type", body);
      }

      addRestaurantFoodItem(body) {
        return this.http.post(this.comm.baseUrl + "/food/item", body);
      }

      editRestaurantFoodType(body) {
        return this.http.put(this.comm.baseUrl + "/food/type", body);
      }

      editRestaurantFoodItem(body) {
        return this.http.put(this.comm.baseUrl + "/food/item", body);
      }

      getRestaurantOrderDetail(id) {
        return this.http.get(this.comm.baseUrl + "/food/order/" + id);
      }

      changePassword(body) {
        return this.http.post(this.comm.baseUrl + "/panel/changepass", body);
      }

      getAddOns(id) {
        return this.http.get(this.comm.baseUrl + '/getAddOns/' + id);
      }

      getAddOnById(id) {
        return this.http.get(this.comm.baseUrl + '/getAddOnById/' + id);
      }

      addAddOn(body) {
        return this.http.post(this.comm.baseUrl + '/addOns', body);
      }

      deleteAddOn(id) {
        return this.http.delete(this.comm.baseUrl + '/deleteAddOns/' + id);
      }

      activeInactiveAddOn(body) {
        return this.http.put(this.comm.baseUrl + '/addOns', body);
      }

      editAddOn(body) {
        return this.http.put(this.comm.baseUrl + '/addOns', body);
      }

    };

    ApiService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _url_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"]
    }, {
      type: _common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
    }];

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/cooldash/services/common/common.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/cooldash/services/common/common.service.ts ***!
    \************************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppCooldashServicesCommonCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng6-toastr-notifications */
    "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); // import { ApiService } from "../api/api.service";


    let CommonService = class CommonService {
      // https://appgrowthcompany.com:3000/
      //http://192.168.1.98:3000
      constructor(spinner, toaster, // private api: ApiService,
      http) {
        this.spinner = spinner;
        this.toaster = toaster;
        this.http = http;
        this.orderStatus = "pending";
        this.dropSetting = {
          enableCheckAll: false,
          singleSelection: false,
          idField: "_id",
          textField: "name",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
        this.singleDropSetting = {
          enableCheckAll: false,
          singleSelection: true,
          idField: "_id",
          textField: "name",
          selectAllText: "Select All",
          unSelectAllText: "UnSelect All",
          itemsShowLimit: 3,
          allowSearchFilter: true
        }; // baseUrl = "http://13.233.12.201:9079/v1/admin";
        // imageUrl = "http://13.233.12.201:9079";
        // Local Url For Testing

        this.baseUrl = "http://192.168.1.158:9079/v1/admin";
        this.imageUrl = "http://192.168.1.158:9079";
      }

      showSpinner() {
        this.spinner.show();
      }

      hideSpinner() {
        this.spinner.hide();
      }

      successToast(message) {
        this.toaster.successToastr(message, "", {
          maxShown: 1
        });
      }

      errorToast(message) {
        this.toaster.errorToastr(message);
      }

    };

    CommonService.ctorParameters = () => [{
      type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
    }, {
      type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }];

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/cooldash/services/order.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/cooldash/services/order.service.ts ***!
    \****************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppCooldashServicesOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/common.service */
    "./src/app/cooldash/services/common/common.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let OrderService = class OrderService {
      constructor(comm) {
        this.comm = comm;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(comm.imageUrl, {
          reconnection: true,
          reconnectionDelay: 30000,
          reconnectionDelayMax: 60000,
          reconnectionAttempts: Infinity
        });
      }

      orderAccept(order) {
        alert("HERE");
        this.socket.emit("acceptOrder", order);
      }

      changeStatus(order) {
        this.socket.emit("adminChangeStatus", order);
        this.socket.removeListener("adminChangeStatus");
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(observer => {
          this.socket.on("adminChangeStatus", message => {
            observer.next(message);
          });
        });
      }

      orderListener() {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(observer => {
          this.socket.removeListener("acceptOrder");
          this.socket.on("acceptOrder", message => {
            observer.next(message);
          });
        });
      }

      statusCahnegListener() {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(observer => {
          this.socket.removeListener("adminCheckChange");
          this.socket.on("adminCheckChange", message => {
            observer.next(message);
          });
        });
      }

      newRestaurtOrder() {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(observer => {
          this.socket.removeListener("restaurantOrder");
          this.socket.on("restaurantOrder", message => {
            observer.next(message);
          });
        });
      }

    };

    OrderService.ctorParameters = () => [{
      type: _common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
    }];

    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], OrderService);
    /***/
  },

  /***/
  "./src/app/cooldash/services/url/url.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/cooldash/services/url/url.service.ts ***!
    \******************************************************/

  /*! exports provided: UrlService */

  /***/
  function srcAppCooldashServicesUrlUrlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlService", function () {
      return UrlService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UrlService = class UrlService {
      constructor() {
        this.baseUrl = "http://192.168.1.98:3000/v1/admin";
        this.imageUrl = "http://192.168.1.98:3000";
        this.login = "".concat(this.baseUrl, "/login");
      }

    };
    UrlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UrlService);
    /***/
  },

  /***/
  "./src/app/forgot-password-modal/forgot-password-modal.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/forgot-password-modal/forgot-password-modal.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppForgotPasswordModalForgotPasswordModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-msg {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcHR1bml4L0Rlc2t0b3AvQ2hpcmFnL01hbmdvL01hemF0L21hemF0X3Jlc3RhdXJhbnQvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQtbW9kYWwvZm9yZ290LXBhc3N3b3JkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQtbW9kYWwvZm9yZ290LXBhc3N3b3JkLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkLW1vZGFsL2ZvcmdvdC1wYXNzd29yZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tc2d7XG4gICAgY29sb3I6IHJlZDtcbn0iLCIuZXJyb3ItbXNnIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/forgot-password-modal/forgot-password-modal.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/forgot-password-modal/forgot-password-modal.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ForgotPasswordModalComponent */

  /***/
  function srcAppForgotPasswordModalForgotPasswordModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordModalComponent", function () {
      return ForgotPasswordModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let ForgotPasswordModalComponent = class ForgotPasswordModalComponent {
      constructor(dialog) {
        this.dialog = dialog;
        this.isSubmitted = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
      }

      ngOnInit() {}

      close() {
        var data = {
          response: "no",
          email: this.email
        };
        this.dialog.close(data);
      }

      onSubmit() {
        this.isSubmitted = true;

        if (this.email.valid && this.isSubmitted) {
          var data = {
            response: "yes",
            email: this.email.value
          };
          this.dialog.close(data);
        }
      }

    };

    ForgotPasswordModalComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }];

    ForgotPasswordModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password-modal/forgot-password-modal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password-modal.component.scss */
      "./src/app/forgot-password-modal/forgot-password-modal.component.scss")).default]
    })], ForgotPasswordModalComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/apptunix/Desktop/Chirag/Mango/Mazat/mazat_restaurant/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map