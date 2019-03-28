import { Component } from "@angular/core";
import { TodoService } from "./todo.service";
import { Todo } from "./todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "basic-angular-site";
  data = "This is an basic Angulat Site !!!";
  page: number = 1;
  pageSize: number = 10;
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }
}
