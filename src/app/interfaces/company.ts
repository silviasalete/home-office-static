import { Sector } from "./sector";
import { UserRequest } from "./user";

export interface Company {
  admin: UserRequest;
  name: String;
  sectors: Sector[];
}
