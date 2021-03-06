import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseTask, Task } from "../interfaces/task";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  private url = {
    getAllTask:
      "http://localhost:8080/activity?page=0&size=3&sort=id,desc&sort=title,asc",
  };
  constructor(private httpClient: HttpClient) {}

  getAllTask(): Observable<ResponseTask> {
    return this.httpClient.get<ResponseTask>(this.url.getAllTask);
  }
}
