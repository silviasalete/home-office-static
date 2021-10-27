import { Authority } from "../models/authority";
import { Role } from "../models/role";

export interface RegisterResponse {
  id: number;
  name: string;
  email: string;
  password: string;
  roles: Role[];
  enabled: boolean;
  username: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  authorities: Authority[];
}
