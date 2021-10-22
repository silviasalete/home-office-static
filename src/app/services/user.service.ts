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

  login(username: string, ppassword: string): Observable<any> {
    const login = {
      email: username,
      password: ppassword,
    };

    return this.httpClient.post(
      AppConstants.baseAuth,
      JSON.stringify(login),
      AppConstants.httpOptions
    );
  }

  createAccount(request: UserRequest): Observable<any> {
    return this.httpClient.post(
      AppConstants.baseUserSave,
      JSON.stringify(request),
      AppConstants.httpOptions
    );
  }
}
