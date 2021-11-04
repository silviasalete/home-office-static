import { Authority } from "./authority.entities";
import { User } from "./user.entities";

export interface Activity {
  id: number;
  title: string;
  description: string;
  createdBy: User;
  createdIn: Date;
  updatedBy: User;
  updatedIn: Date;
}
