import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PlotlyModule } from "angular-plotly.js";
import { PlotlyExampleComponent } from "./plotly.component";

@NgModule({
  declarations: [AppComponent, PlotlyExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PlotlyModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
