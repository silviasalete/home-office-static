import { Observable } from "rxjs";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseTask, Task } from "../interfaces/task";
import { AppConstants } from "../app-constants";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}

  save(task: Task) {
    return this.http.post(
      AppConstants.baseActivitySave,
      JSON.stringify(task),
      AppConstants.httpOptions
    );
  }

  list(): Observable<ResponseTask> {
    return this.http.get<ResponseTask>(AppConstants.baseActivityList);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/activity/${id}`);
  }

  findById(id: string): Observable<Task> {
    return this.http.get<Task>(`http://localhost:8080/activity/${id}`);
  }

  update(task: Task) {
    return this.http.put(
      AppConstants.baseActivityUpdate,
      JSON.stringify(task),
      AppConstants.httpOptions
    );
  }
}
