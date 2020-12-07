import { Component, OnInit } from "@angular/core";

import { UrlService } from "../../services/url/url.service";
import { ApiService } from "../../services/api/api.service";
import { CommonService } from '../../services/common/common.service';
// import { Resp } from "src/app/models/Resp";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  tokenVal;
  DashboarddData;
  restaurantDetail: any;
  id;
  constructor(private api: ApiService, 
    private url: UrlService,
    private commService : CommonService) { }

  ngOnInit() {
    if (localStorage.getItem("restaurantLogin")) {
      var data = JSON.parse(localStorage.getItem("restaurantLogin"));
      if (data.id) {
        this.id = data.id
        this.getRestaurantById(this.id);
      }
    }
  }

  getRestaurantById(id) {
    this.api.getResturantById(id).subscribe(res => {
      if (res["response"]["success"]) {
        console.log(res);
        this.restaurantDetail = res["data"];
        console.log(this.restaurantDetail);
      }
    });
  }
}