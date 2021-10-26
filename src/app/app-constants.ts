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

  public static get httpOptionsAuthorization(): any {
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

  public static get baseActivitySave(): string {
    return this.baseActivity + "/save";
  }

  public static get baseActivityUpdate(): string {
    return this.baseActivity + "/update";
  }

  public static get baseActivityDelete(): string {
    return this.baseActivity + "/delete";
  }

  public static get baseActivityList(): string {
    const page: number = 0;
    const size: number = 4;
    const order: string = "desc";

    return (
      this.baseActivity +
      `?page=${page}&size=${size}&sort=id,${order}&sort=title,asc`
    );
  }

  public static get baseUser(): string {
    return this.baseServe + "/user";
  }

  public static get baseUserSave(): string {
    return this.baseUser + "/save";
  }

  public static get baseSector(): string {
    return this.baseServe + "/sector";
  }
}
