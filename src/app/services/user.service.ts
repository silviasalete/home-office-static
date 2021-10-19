import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { UserRequest, UserResponse } from "../interfaces/user";
import { AppConstants } from "../app-constants";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  save(request: UserRequest): Observable<any> {
    return this.httpClient.post(
      AppConstants.baseUserSave,
      JSON.stringify(request),
      AppConstants.httpOptions
    );
  }

  postLogin(username: string, ppassword: string): Observable<any> {
    const login = {
      email: username,
      password: ppassword,
    };

    return this.httpClient.post(
      "http://localhost:8080/activity/auth",
      JSON.stringify(login)
    );
  }
}
