import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
declare var google: any;
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-add-restaurant",
  templateUrl: "./add-restaurant.component.html",
  styleUrls: ["./add-restaurant.component.scss"]
})
export class AddRestaurantComponent implements OnInit {
  restaurantForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  categoryList: any;
  selectedCat: Array<any> = [];
  categoryImage: any;
  File;
  dropDownSetting: any;
  singleDropDownSetting: any;
  id;
  categoryBody = { type: "", list: [] };
  foodType: any = [
    {
      name: "Vegetarian",
      value: 0
    },
    {
      name: "Non-Vegetarian",
      value: 1
    },
    {
      name: "Both",
      value: 2
    }
  ];
  restaurantDetail: any;
  geoCoder: any;
  outlet: any;
  addressLocation: any;
  updateAddrssStatus: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    if (localStorage.getItem("restaurantLogin")) {
      var data = JSON.parse(localStorage.getItem("restaurantLogin"));
      if (data.id) {
        this.id = data.id
        this.getRestaurantById(this.id);
      }
    }
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.restaurantForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(16)])),
      // description: new FormControl(
      //   "",
      //   Validators.compose([Validators.required, Validators.maxLength(250)])
      // ),
      foodType: new FormControl("", Validators.compose([Validators.required])),
      discount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      categories: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      // minOrderAmount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      avgOrderPrice: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      discountUpto: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      outlet: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.pattern(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      )]),
      isRecommended: new FormControl(""),
      status: new FormControl(""),
      // openTime: new FormControl("", Validators.compose([Validators.required])),
      // closeTime: new FormControl(
      //   "",
      //   Validators.compose([Validators.required])
      // ),
      password: new FormControl("")
    });
    this.dropDownSetting = this.comm.dropSetting;
    this.singleDropDownSetting = this.comm.singleDropSetting;
    this.getCategories();
  }

  getRestaurantById(id) {
    this.api.getResturantById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.restaurantDetail = res["data"];
        console.log(this.restaurantDetail);
        this.setValues(this.restaurantDetail);
      }
    });
  }

  getCategories() {
    const list = [];
    this.api.getAllRestaurantCategories().subscribe(response => {
      if (response["response"]["success"]) {
        this.categoryList = response["response"]["message"];
      }
    });
  }

  async profilePic(event) {
    this.File = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.categoryImage = event.target.result;
      };
    }
  }

  setValues = data => {
    if (data) {
      this.restaurantForm.patchValue({
        name: data.detail.name,
        // description: data.detail.description,
        foodType: data.detail.foodType,
        discount: data.detail.discount,
        // minOrderAmount: data.detail.minOrderAmount,
        avgOrderPrice: data.detail.avgOrderPrice,
        discountUpto: data.detail.discountUpto,
        categories: data.detail.categories,
        email: data.detail.email,
        isRecommended: data.detail.isRecommended ? 1 : 0,
        status: data.detail.status ? 1 : 0
      });
      // this.restaurantForm.controls['openTime'].setValue(new Date(data.detail.openTime
      // ));
      // this.restaurantForm.controls['closeTime'].setValue(new Date(data.detail.closeTime));
      if (data.detail.image) {
        this.categoryImage = this.comm.imageUrl + data.detail.image;
      }
    }
  };

  getAddress(lat, long) {
    this.geoCoder.geocode(
      { location: { lat: lat, lng: long } },
      (results, status) => {
        this.addressLocation = results[0].formatted_address;
        this.outlet = {
          address: this.addressLocation,
          latitude: lat,
          longitude: long
        };
      }
    );
  }

  handleAddress(address) {
    this.updateAddrssStatus = true;
    if (address.formatted_address) {
      this.outlet = {
        address: address.formatted_address,
        latitude: address.geometry.location.lat(),
        longitude: address.geometry.location.lng()
      };
      this.restaurantForm.controls["outlet"].setValue(
        address.formatted_address
      );
    }
  }

  update() {
    this.submitted = true;
    this.restaurantForm['controls']['isRecommended'].setValue(this.restaurantForm['controls']['isRecommended'].value ? 1 : 0)
    this.restaurantForm['controls']['status'].setValue(this.restaurantForm['controls']['status'].value ? 1 : 0)

    console.log(this.restaurantForm.value);
    if (this.restaurantForm.valid) {
      var data = this.restaurantForm.value;
      console.log(this.outlet, data);
      if (this.outlet) {
        data.outlet = this.outlet;
      }
      data.updateId = this.id;
      let formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("image", this.File);
      this.api.editFoodRestaurant(formData).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/dashboard"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

  afterPickerOpen() {
    document.getElementsByTagName('html')[0].style.top = '';
  }

}
