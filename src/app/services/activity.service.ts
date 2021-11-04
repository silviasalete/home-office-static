import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import {
  ActivityPageable,
  ActivityWithId,
  ActivityForm,
} from "src/app/interfaces/activity";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  list(): Observable<ActivityPageable> {
    return this.http.get<ActivityPageable>(
      AppConstants.baseActivityPageSort(0, 3, "desc")
    );
  }
  save(request: ActivityForm): Observable<ActivityWithId> {
    return this.http.post<ActivityWithId>(
      AppConstants.baseActivitySave,
      request,
      <Object>AppConstants.httpOptions
    );
  }
  update(request: ActivityWithId): Observable<ActivityWithId> {
    return this.http.put<ActivityWithId>(
      AppConstants.baseActivityUpdate,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
  findById(id: number): Observable<ActivityWithId> {
    return this.http.get<ActivityWithId>(AppConstants.baseActivityFindById(id));
  }
  delete(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseActivityDelete(id));
  }
}
