import { Sector } from "./sector";

export interface InitialQuestionnaire {
  nameAdmin: string;
  email: string;
  password: string;
  nameCompany: String;
  sectors: Sector[];
}
