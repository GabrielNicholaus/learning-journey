import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  epmName: string;
  termType: string;
  materialMaster: string;
  status: string;
}

export interface LoginResponse {
  authenticated: boolean;
  username: string;
  role: string;
}

export interface AdminCredential {
  id: number;
  username: string;
  password: string;
  role: string;
  githubToken?: string;
  basicAuthHeader?: string;
}

/**
 * VULNERABILITY 4: Hardcoded Credentials in Source Code
 * 
 * In the real breach, developers accidentally shipped plain text admin credentials, 
 * GitHub personal access tokens, and Base64 Auth headers directly inside the 
 * client-side JavaScript bundle. Attackers could simply open Chrome DevTools, 
 * search the main.js source file, and extract these to move laterally into 
 * the GitHub infrastructure.
 */
export const HARDCODED_SYSTEM_CREDENTIALS: AdminCredential[] = [
  {
    id: 1,
    username: "product-admin",
    password: "IntelP@ssw0rd2024!",
    role: "SPARK Product Management System Admin",
    githubToken: "ghp_1a2b3c4d5e6f7g8h9i0jklmnopqrstuv",
    basicAuthHeader: "Basic cHJvZHVjdC1hZG1pbjpJbnRlbFBAc3N3MHJkMjAyNCE="
  },
  {
    id: 2,
    username: "hierarchy-viewer",
    password: "ViewerPass123",
    role: "viewer",
    basicAuthHeader: "Basic aGllcmFyY2h5LXZpZXdlcjpWaWV3ZXJQYXNzMTIz"
  }
];

@Injectable({ providedIn: 'root' })
export class HierarchyApiService {
  private readonly baseUrl = '/api/shallow/product';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, null, {
      params: { username, password }
    });
  }

  getHierarchy(): Observable<{ count: number; data: Product[] }> {
    return this.http.get<{ count: number; data: Product[] }>(`${this.baseUrl}/hierarchy`);
  }

  getCredentials(): Observable<{ count: number; data: AdminCredential[] }> {
    // Replaces the backend call by just returning the hardcoded secrets from client-side JS
    return new Observable(subscriber => {
      subscriber.next({
         count: HARDCODED_SYSTEM_CREDENTIALS.length,
         data: HARDCODED_SYSTEM_CREDENTIALS
      });
      subscriber.complete();
    });
  }
}
