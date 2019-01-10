import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";

import { PlotlyModule } from "angular-plotly.js";
import { PlotlyExampleComponent } from "./plotly.component";

@NgModule({
  declarations: [AppComponent, PlotlyExampleComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, PlotlyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
