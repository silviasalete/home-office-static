export interface UserRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Role {
  id: number;
  name: string;
}
