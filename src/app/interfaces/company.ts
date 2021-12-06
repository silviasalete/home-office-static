import { Sector } from "../models/sector.entities";
import { UserRequest } from "./user";

export interface CompanyRequest {
  name: String;
  sectors: any[];
}

export interface CompanyResponse {
  id: number;
  name: String;
  sectors: Sector[];
}
