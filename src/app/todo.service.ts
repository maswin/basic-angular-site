import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Todo } from "./todo";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    // TODO: send the message _after_ fetching the heroes
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    // .pipe(catchError((error: any): Observable<Todo[]> => of([] as Todo[])));
  }
}
