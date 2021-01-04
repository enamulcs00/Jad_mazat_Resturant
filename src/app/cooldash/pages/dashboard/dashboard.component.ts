import { Component, OnInit } from "@angular/core";

import { UrlService } from "../../services/url/url.service";
import { ApiService } from "../../services/api/api.service";
import { CommonService } from "../../services/common/common.service";
// import { Resp } from "src/app/models/Resp";
import * as FusionCharts from "fusioncharts";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  tokenVal;
  DashboarddData;
  restaurantDetail: any;
  id;
  type;
  width;
  height;
  dataSource;
  constructor(
    private api: ApiService,
    private url: UrlService,
    private commService: CommonService
  ) {
    this.type = "timeseries";
    this.width = "100%";
    this.height = "500";
    this.dataSource = {
      chart: {
        paletteColors: "#0372AB",
      },
      navigator: {
        enabled: 0,
      },
      caption: {
        text: "",
      },
      yaxis: [
        {
          plot: {
            value: "Restaurant Revenue",
            type: "column",
          },
          format: {
            suffix: "",
          },
          title: "",
        },
      ],
    };

    this.fetchData();
  }

  ngOnInit() {
    if (localStorage.getItem("restaurantLogin")) {
      var data = JSON.parse(localStorage.getItem("restaurantLogin"));
      if (data.id) {
        this.id = data.id;
        this.getRestaurantById(this.id);
      }
    }
  }

  getRestaurantById(id) {
    this.api.getResturantById(id).subscribe((res) => {
      if (res["response"]["success"]) {
        console.log(res);
        this.restaurantDetail = res["data"];
        console.log(this.restaurantDetail);
      }
    });
  }

  fetchData() {
    var jsonify = (res) => res.json();
    var schemaFetch = [
      {
        name: "Time",
        type: "date",
        format: "%-d/%-m/%Y",
      },
      {
        name: "Restaurant Revenue",
        type: "number",
      },
    ];
    let id = localStorage.getItem("id");
    this.api.getRestaurantRevenue(id).subscribe((response: any) => {
      console.log(response);
      // var dataFetch = response.data;
      // Promise.all([dataFetch, schemaFetch]).then((res) => {
      //   const [data, schema] = res;
      //   // First we are creating a DataStore
      //   const fusionDataStore = new FusionCharts.DataStore();
      //   // After that we are creating a DataTable by passing our data and schema as arguments
      //   const fusionTable = fusionDataStore.createDataTable(data, schema);
      //   // Afet that we simply mutated our timeseries datasource by attaching the above
      //   // DataTable into its data property.
      //   this.dataSource.data = fusionTable;
      // });
    });
  }
}
