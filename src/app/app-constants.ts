import { HttpHeaders } from "@angular/common/http";

export class AppConstants {
  public static get httpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/json;charset=utf-8"
      ),
    };
    return httpOptions;
  }

  public static get baseServe(): string {
    return "http://localhost:8080";
  }

  public static get baseAuth(): string {
    return this.baseServe + "/auth";
  }

  public static get baseActivity(): string {
    return this.baseServe + "/activity";
  }

  public static get baseUser(): string {
    return this.baseServe + "/user";
  }

  public static get baseUserSave(): string {
    return this.baseUser + "/save";
  }
}
