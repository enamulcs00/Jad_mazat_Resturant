import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoolDashRoutingModule } from "./cooldash-routing.module";
import { CoolDashComponent } from "./cooldash.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FullComponent } from "./components/full/full.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MaterialModule } from "./pages/material/material.module";
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoolDashComponent,
    FooterComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ChangePasswordComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    CoolDashRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CoolDashModule { }
