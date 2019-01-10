import { Component } from "@angular/core";

@Component({
  selector: "plotly-example",
  template:
    '<div><plotly-plot [data]="graph.data" [layout]="graph.layout"></plotly-plot></div>'
})
export class PlotlyExampleComponent {
  public graph = {
    data: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: "scatter",
        mode: "lines+points",
        marker: { color: "red" }
      },
      { x: [1, 2, 3], y: [2, 5, 3], type: "bar" }
    ],
    layout: { width: 320, height: 240, title: "A Fancy Plot" }
  };
}
