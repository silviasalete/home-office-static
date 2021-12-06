import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConstants } from "../app-constants";
import { CompanyRequest, CompanyResponse } from "../interfaces/company";
import { Sector } from "../models/sector.entities";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  createCompany(company: CompanyResponse): Observable<CompanyResponse> {
    console.log("request: ", company);
    let request = {
      company: company,
    };
    return this.httpClient.post<CompanyResponse>(
      AppConstants.baseCompanySave,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }

  associateCompanyToSectors(
    companySaved: CompanyResponse
  ): Observable<CompanyResponse> {
    console.log("2: ", companySaved);
    let request = {
      company: companySaved,
    };
    return this.httpClient.post<CompanyResponse>(
      AppConstants.associateSectors,
      JSON.stringify(request),
      <Object>AppConstants.httpOptions
    );
  }
}
