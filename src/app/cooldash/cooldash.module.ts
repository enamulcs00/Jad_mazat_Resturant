import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
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
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { ReactiveFormsModule } from "@angular/forms";

import { FusionChartsModule } from "angular-fusioncharts";

// Load FusionCharts
import * as FusionCharts from "fusioncharts";
// Load Charts module
import * as Charts from "fusioncharts/fusioncharts.charts";
// Load fusion theme
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import * as TimeSeries from "fusioncharts/fusioncharts.timeseries"; // Import timeseries

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, TimeSeries);

@NgModule({
  declarations: [
    CoolDashComponent,
    FooterComponent,
    FullComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ChangePasswordComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    CoolDashRoutingModule,
    MaterialModule,
    // FusionChartsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoolDashModule {}
