import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrManager } from "ng6-toastr-notifications";
import { ApiService } from "../../../../../cooldash/services/api/api.service";
import { CommonService } from "../../../../../cooldash/services/common/common.service";

@Component({
  selector: "app-add-editadd-ons",
  templateUrl: "./add-editadd-ons.component.html",
  styleUrls: ["./add-editadd-ons.component.scss"],
})
export class AddEditaddOnsComponent implements OnInit {
  addOnFrom: FormGroup;
  history = window.history;
  submitted: boolean = false;
  id;
  addOnDetails: any;
  itemId: any;
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.itemId = params["itemId"];
      if (this.itemId) {
        this.getAddOnById(this.itemId);
      }
    });
    this.addOnFrom = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      price: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
      quantity: new FormControl("", [Validators.required]),
      name_ar: new FormControl("", Validators.compose([Validators.required])),
      restaurantId: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
    });
  }

  getAddOnById(id) {
    this.api.getAddOnById(id).subscribe((res) => {
      if (res["response"]["success"]) {
        this.addOnDetails = res["data"];
        console.log(this.addOnDetails);
        this.setValues(this.addOnDetails);
      }
    });
  }

  setValues = (data) => {
    if (data) {
      this.addOnFrom.patchValue({
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        name_ar: data.name_ar,
        restaurantId: data.restaurantId,
      });
    }
  };

  submit() {
    this.submitted = true;
    this.addOnFrom.controls["restaurantId"].setValue(this.id);
    if (this.submitted && this.addOnFrom.valid) {
      const data = this.addOnFrom.value;
      this.api.addAddOn(data).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/restaurant/add-ons"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

  update() {
    this.submitted = true;
    if (this.addOnFrom.valid) {
      const data = this.addOnFrom.value;
      data.updateId = this.itemId;
      this.api.activeInactiveAddOn(data).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/restaurant/add-ons"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
