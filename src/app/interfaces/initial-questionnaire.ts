import { Sector } from "../models/sector.entities";

export interface InitialQuestionnaire {
  nameAdmin: string;
  email: string;
  password: string;
  nameCompany: String;
  sectors: Sector[];
}
