import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { UrlService } from "../url/url.service";
import { LoginBody } from "../../requests/login-body";
import { map } from "rxjs/operators";
import { CommonService } from "../common/common.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  countryCode: any;

  constructor(
    private http: HttpClient,
    private url: UrlService,
    private comm: CommonService
  ) {
    this.getCountryCode();
  }

  getCountryCode() {
    return this.http
      .get<Response>("assets/json/countryCode.json")
      .pipe(map((response) => response));
  }

  singIn(body: LoginBody) {
    return this.http.post(this.comm.baseUrl + "/panel/login", body);
  }

  forgotPasswordSendEmail(body) {
    return this.http.post(this.comm.baseUrl + "/panel/forgotpass", body);
  }

  sendToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("id");
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
    return this.http.get(
      this.comm.baseUrl + "/food/orders?&page=" + page + "&restaurantId=" + id
    );
  }

  getPendingOrders(status, page, id) {
    return this.http.get(
      this.comm.baseUrl +
        "/food/orders?status=" +
        status +
        "&page=" +
        page +
        "&restaurantId=" +
        id
    );
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
    return this.http.get(this.comm.baseUrl + "/getAddOns/" + id);
  }

  getAddOnById(id) {
    return this.http.get(this.comm.baseUrl + "/getAddOnById/" + id);
  }

  addAddOn(body) {
    return this.http.post(this.comm.baseUrl + "/addOns", body);
  }

  deleteAddOn(id) {
    return this.http.delete(this.comm.baseUrl + "/deleteAddOns/" + id);
  }

  activeInactiveAddOn(body) {
    return this.http.put(this.comm.baseUrl + "/addOns", body);
  }

  editAddOn(body) {
    return this.http.put(this.comm.baseUrl + "/addOns", body);
  }

  getRestaurantRevenue(id) {
    console.log(id);
    return this.http.get(
      this.comm.baseUrl + "/food/revenue/restaurant/?restaurantId=" + id
    );
  }
}
