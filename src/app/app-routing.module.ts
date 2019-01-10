import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlotlyExampleComponent } from "./plotly.component";

const routes: Routes = [{ path: "plotly", component: PlotlyExampleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
