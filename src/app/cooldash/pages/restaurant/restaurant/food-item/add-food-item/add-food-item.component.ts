import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../../services/common/common.service";
import { ApiService } from "../../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
declare var google: any;
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-add-food-item",
  templateUrl: "./add-food-item.component.html",
  styleUrls: ["./add-food-item.component.scss"]
})
export class AddFoodItemComponent implements OnInit {
  restaurantForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  categoryList: any;
  selectedCat: Array<any> = [];
  addOnsList: Array<any> = [];
  categoryImage: any;
  File;
  dropDownSetting: any;
  singleDropDownSetting: any;
  id;
  categoryBody = { type: "", list: [] };
  foodType: any = [];
  restaurantDetail: any;
  geoCoder: any;
  addressLocation: any;
  itemId: any;
  type: any = [
    {
      name: "Vegetrainian",
      value: 0
    },
    {
      name: "Non-Vegetrainian",
      value: 1
    },
    {
      name: "Both",
      value: 2
    }
  ];
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
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.itemId = params["itemId"];
      this.getAllFoodType();
      this.getFoodItemById(this.itemId);
    });
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.restaurantForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      description: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(250)])
      ),
      type: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      restaurantId: new FormControl("", Validators.compose([Validators.required])),
      foodTypeId: new FormControl("", Validators.compose([Validators.required])),
      // discount: new FormControl("", Validators.compose([Validators.required])),
      foodCategoryId: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      preprationTime: new FormControl("", Validators.compose([Validators.required])),
      price: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      addOn: new FormControl(''),
    });
    this.dropDownSetting = this.comm.dropSetting;
    this.singleDropDownSetting = this.comm.singleDropSetting;
    this.getCategories();
    this.getAddOns(this.id);
  }

  getAllFoodType() {
    const list = [];
    this.api.getRestaurantTypeById(this.id).subscribe(response => {
      if (response["response"]["success"]) {
        this.foodType = response["data"];
      }
    });
  }

  getAddOns(id) {
    this.api.getAddOns(id).subscribe(response => {
      console.log(response['response']);
      if (response['response']['success']) {
        if (response['data'] && response['data'].length) {
          this.addOnsList = response['data'];
          for (const data of this.addOnsList) {
            data.status = data['status'] === 1 ? true : false;
          }
        }
        // this.totalItems = response.count;
      }
      if (!response['success']) {
        return;
      }
    });
  }
  getFoodItemById(id) {
    this.api.getResturantFoodItemById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.restaurantDetail = res["data"][0];
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
        name: data.name,
        description: data.description,
        foodTypeId: data.foodTypeId,
        // discount: data.discount,
        price: data.price,
        preprationTime: data.preprationTime,
        foodCategoryId: data.foodCategoryId,
        restaurantId: data.restaurantId,
        type: data.type,
        addOn: data.addOn
      });
      if (data.image) {
        this.categoryImage = this.comm.imageUrl + data.image;
      }
    }
  };

  submit() {
    this.submitted = true;
    this.restaurantForm.controls["restaurantId"].setValue(this.id);
    if (this.submitted && this.restaurantForm.valid) {
      var data = this.restaurantForm.value;
      if (data.addOn) {
        data.addOn = data.addOn;
      }
      let formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("image", this.File);
      this.api.addRestaurantFoodItem(formData).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/restaurant/food-item"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

  update() {
    this.submitted = true;
    if (this.restaurantForm.valid) {
      var data = this.restaurantForm.value;
      if (data.addOn) {
        data.addOn = data.addOn;
      }
      data.updateId = this.itemId;
      let formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("image", this.File);
      this.api.editRestaurantFoodItem(formData).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/restaurant/food-item"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
