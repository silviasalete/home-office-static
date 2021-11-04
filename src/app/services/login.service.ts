import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { LoginRequest } from "../interfaces/login";
import { Token } from "../models/token.entities";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(request: LoginRequest): Observable<Token> {
    return this.httpClient.post<Token>(
      AppConstants.baseAuth,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
}
