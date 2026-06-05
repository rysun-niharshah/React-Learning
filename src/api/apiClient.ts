/**
 * API client — single axios/fetch wrapper with base URL, headers, interceptors.
 * api/ holds HTTP infrastructure; services/ holds domain-specific call functions.
 * Endpoints are centralized in apiEndpoints.ts to avoid string duplication.
 */
import { config } from "@/config";
import { API_ENDPOINTS } from "@/api/apiEndpoints";

type RequestOptions = Omit<RequestInit, "body"> & { body?: unknown };

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem("auth_token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { body, headers, ...rest } = options;

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...rest,
      headers: {
        "Content-Type": "application/json",
        ...this.getAuthHeaders(),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }

  get<T>(endpoint: string) {
    return this.request<T>(endpoint);
  }

  post<T>(endpoint: string, body: unknown) {
    return this.request<T>(endpoint, { method: "POST", body });
  }
}

export const apiClient = new ApiClient(config.apiBaseUrl);

// Re-export endpoints for convenience in services
export { API_ENDPOINTS };
