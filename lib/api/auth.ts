export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  // Mock implementation - replace with actual API call
  if (email === "test@example.com" && password === "password") {
    return {
      token: "mock-jwt-token",
      user: {
        id: "1",
        email: email,
        name: "Test User"
      }
    };
  }
  
  throw new Error("Invalid email or password");
}

export async function registerUser(email: string, password: string, name: string): Promise<LoginResponse> {
  // Mock implementation - replace with actual API call
  return {
    token: "mock-jwt-token",
    user: {
      id: "1",
      email: email,
      name: name
    }
  };
}

export async function logoutUser(): Promise<void> {
  // Mock implementation - replace with actual API call
  localStorage.removeItem("token");
}


