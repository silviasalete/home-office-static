import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConstants } from "../app-constants";
import { Sector } from "../models/sector.entities";
@Injectable({
  providedIn: "root",
})
export class SectorService {
  constructor(private httpClient: HttpClient) {}

  all(): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(AppConstants.baseSector);
  }

  findById(id: Sector): Observable<Sector> {
    return this.httpClient.get<Sector>(AppConstants.baseSectorFindById(id));
  }
}
