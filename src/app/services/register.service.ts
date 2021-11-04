import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { RegisterRequest, RegisterResponse } from "../interfaces/register";

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
