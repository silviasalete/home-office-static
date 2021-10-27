import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpHeaders } from "@angular/common/http";
import { RegisterRequest } from "../interfaces/register-request";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { RegisterResponse } from "../interfaces/register-response";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  createAccount(request: RegisterRequest): Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(
      AppConstants.baseUserSave,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
}
