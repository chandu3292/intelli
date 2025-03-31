import { useMutation } from '@tanstack/react-query';
import { LoginFormData, LoginResponse, LoginError } from '../types';

const loginUser = async (data: LoginFormData): Promise<LoginResponse> => {
  const response = await fetch('http://localhost:5000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error: LoginError = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginFormData>({
    mutationFn: loginUser,
  });
};