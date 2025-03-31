export interface LoginResponse {
    message: string;
    user?: { email: string };
  }
  
  export interface LoginError {
    message: string;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
  }