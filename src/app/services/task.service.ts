import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../interfaces/task";
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
}
