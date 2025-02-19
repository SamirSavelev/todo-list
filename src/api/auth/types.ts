export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterResponse {
  message: string;
  userId: number;
}
