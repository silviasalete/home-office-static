import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { ActivityResponse } from "../interfaces/activity-response";
import { ActivitySaveRequest } from "../interfaces/activity-request-save";
import { ActivityResponseSave } from "../interfaces/activity-response-save";
import { ActivityUpdateRequest } from "../interfaces/activity-update-request";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  list(): Observable<ActivityResponse> {
    return this.http.get<ActivityResponse>(AppConstants.baseActivityPageSort);
  }
  save(request: ActivitySaveRequest): Observable<ActivityResponseSave> {
    return this.http.post<ActivityResponseSave>(
      AppConstants.baseActivitySave,
      request,
      <Object>AppConstants.httpOptions
    );
  }
  update(request: ActivityUpdateRequest): Observable<ActivityResponseSave> {
    return this.http.put<ActivityResponseSave>(
      AppConstants.baseActivityUpdate,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
  findById(id: number): Observable<ActivityResponseSave> {
    return this.http.get<ActivityResponseSave>(
      AppConstants.baseActivityFindById(id)
    );
  }
  delete(id: number): Observable<any> {
    return this.http.delete<any>(AppConstants.baseActivityDelete(id));
  }
}
