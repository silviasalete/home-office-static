import { HttpHeaders } from "@angular/common/http";
import { Sector } from "./models/sector.entities";

export class AppConstants {
  /**
   * Options
   */
  public static get httpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Content-Type",
        "application/json;charset=utf-8"
      ),
    };
    return httpOptions;
  }

  /**
   * Serve
   */
  public static get baseServe(): string {
    return "http://localhost:8080";
  }

  /**
   * Authenticate
   */
  public static get baseAuth(): string {
    return this.baseServe + "/auth";
  }

  /**
   * Activity
   */
  public static get baseActivity(): string {
    return this.baseServe + "/activity";
  }
  public static get baseActivitySave(): string {
    return this.baseActivity + "/save";
  }
  public static get baseActivityUpdate(): string {
    return this.baseActivity + "/update";
  }
  public static baseActivityDelete(id: number): string {
    return this.baseActivity + "/" + id;
  }
  public static baseActivityFindById(id: number): string {
    return this.baseActivity + "/" + id;
  }
  public static baseActivityPageSort(
    page: number,
    size: number,
    order: string
  ): string {
    // const page: number = 0;
    // const size: number = 4;
    // const order: string = "desc";

    return (
      this.baseActivity +
      `?page=${page}&size=${size}&sort=id,${order}&sort=title,asc`
    );
  }

  /**
   * User
   */
  public static get baseUser(): string {
    return this.baseServe + "/user";
  }
  public static get baseUserSave(): string {
    return this.baseUser + "/save";
  }

  /**
   * Sector
   */
  public static get baseSector(): string {
    return this.baseServe + "/sector";
  }
  public static baseSectorFindById(id: Sector): string {
    return this.baseSector + "/" + id;
  }

  /**
   * Company
   */
  public static get baseCompany(): string {
    return this.baseServe + "/company";
  }
  public static get baseCompanySave(): string {
    return this.baseCompany + "/save";
  }
  public static get associateSectors(): string {
    return this.baseCompany + "/associate";
  }
}
