import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor() {}

  getAuthorizaionToken() {
    const token = window.localStorage.getItem("token");

    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizaionToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
}
