import { Authority } from "./authority";
import { Role } from "./role";

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
