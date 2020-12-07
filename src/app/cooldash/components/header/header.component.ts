import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id: any;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private toastr: ToastrManager,
    private orderService: OrderService) { }

  ngOnInit() {
    if (localStorage.getItem('restaurantLogin')) {
      const data = JSON.parse(localStorage.getItem('restaurantLogin'));
      if (data.id) {
        this.id = data.id;
      }
    }

    this.orderService.newRestaurtOrder().subscribe((res: any) => {
      console.log(res, res['data'], JSON.parse(res.data));
      if (res && res['data']) {
        const response = JSON.parse(res.data);
        if (response && response['restaurantId'] === this.id) {
          this.toastr.successToastr('New Restaurant Order Received');
        }
      }
    });
  }
  logout() {
    this.localStorage.clear();
    localStorage.clear();
    document.getElementById('closeLogoutModal').click();
    this.router.navigateByUrl('/login');
  }
}
