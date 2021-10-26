import { Authority } from "./authority";
import { User } from "./user";

export interface Activity {
  id: number;
  title: string;
  description: string;
  createdBy: User;
  createdIn: Date;
  updatedBy: User;
  updatedIn: Date;
}
