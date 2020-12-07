import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../../cooldash/services/common/common.service';
import { ApiService } from '../../../../../cooldash/services/api/api.service';
import { PopupService } from '../../../../../cooldash/services/popup/popup.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss']
})
export class AddOnsComponent implements OnInit {

  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  id: any;
  addOnsList: Array<any> = [];
  imageUrl: string;
  tokenVal;
  role: any;
  access: any;
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (localStorage.getItem('restaurantLogin')) {
      const data = JSON.parse(localStorage.getItem('restaurantLogin'));
      if (data.id) {
        this.id = data.id;
        this.getAddOns(this.id);
      }
    }
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
        this.loader = false;
        // this.totalItems = response.count;
      }
      if (!response['success']) {
        return;
      }
    });
  }

  addAddOn() {
    this.router.navigate(['restaurant/add-add/add-add-ons', this.id]);
  }

  editAddOn(item) {
    this.router.navigate(['restaurant/add-add/edit-add-ons', this.id, item._id]);
  }


  deleteAddOn(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this Add On!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        const data = {
          updateId: item._id,
        };
        this.api.deleteAddOn(item._id).subscribe((res: any) => {
          if (res['response']['success']) {
            Swal.fire({
              title: 'Deleted!',
              text: res['response']['message'],
              icon: 'success'
            });
            this.getAddOns(this.id);
          }
          if (!res['response']['success']) {
            return;
          }
        });
      }
    });
  }

  updateActiveStatus(item) {
    const data = {
      updateId: item._id,
      isActive: item.isActive ? 1 : 0
    };
    this.api.activeInactiveAddOn(data).subscribe((res: any) => {
      if (res['response']['success']) {
        this.getAddOns(this.id);
      }
      if (!res['response']['success']) {
        return;
      }
    });
  }

  // pageChange(page) {
  //   this.filterBody.page = page.page - 1;
  //   this.serialNumber = this.filterBody.page * this.filterBody.limit;
  //   this.getAddOns();
  // }

}
