import { Authority } from "./authority.entities";
import { Role } from "./role.entities";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: Role[];
  enabled: boolean;
  username: string;
  authorities: Authority[];
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
}
