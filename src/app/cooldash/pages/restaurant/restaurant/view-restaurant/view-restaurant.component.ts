import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";

@Component({
  selector: "app-view-restaurant",
  templateUrl: "./view-restaurant.component.html",
  styleUrls: ["./view-restaurant.component.scss"]
})
export class ViewRestaurantComponent implements OnInit {
  id;
  restaurantDetail: any;

  history = window.history;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public comm: CommonService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getRestaurantById(this.id);
    });
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
