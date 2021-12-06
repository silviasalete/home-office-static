import { Authority } from "./authority.entities";
import { Sector } from "./sector.entities";

export interface Company {
  id: number;
  name: string;
  sectors: Sector[];
}
