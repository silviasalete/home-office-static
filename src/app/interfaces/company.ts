import { Sector } from "../models/sector.entities";
import { UserRequest } from "./user";

export interface Company {
  admin: UserRequest;
  name: String;
  sectors: Sector[];
}
