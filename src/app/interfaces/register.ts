import { Authority } from "../models/authority.entities";
import { Role } from "../models/role.entities";

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
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}
