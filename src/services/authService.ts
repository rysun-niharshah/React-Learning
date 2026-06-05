/**
 * Domain services — one file per resource (auth, orders, users). Services call
 * apiClient and return typed data. Components/hooks never import apiClient directly;
 * they go through services to keep the data layer swappable (mock, REST, GraphQL).
 */
import { apiClient, API_ENDPOINTS } from "@/api/apiClient";
import type { User } from "@/types/user";

const STORAGE_KEY = "auth_token";
const USER_KEY = "auth_user";

export const authService = {
  async login(email: string, _password: string): Promise<User> {
    // Demo: accept any credentials. Replace with apiClient.post in production.
    const user: User = {
      id: "1",
      email,
      name: email.split("@")[0] ?? "User",
    };
    localStorage.setItem(STORAGE_KEY, "demo-token");
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  },

  logout() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getStoredUser(): User | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  },

  async getCurrentUser(): Promise<User> {
    return apiClient.get<User>(API_ENDPOINTS.AUTH.ME);
  },
};
