import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TokenResponse {
    accessToken: string;
}

export interface Employee {
    id: number;
    fullName: string;
    role: string;
    manager: string;
    email: string;
    phoneNumber: string;
}

export interface EmployeeResponse {
    count: number;
    data: Employee[];
}

export interface ErrorResponse {
    error: string;
}

/**
 * API Service — connects to the Shallow Model backend endpoints.
 *
 * VULNERABILITY 2: getAccessToken() calls the unauthenticated token API.
 *   Any anonymous user can request a highly privileged token.
 *
 * VULNERABILITY 3: getEmployees() passes a raw string search filter.
 *   If the filter is empty, the API dumps the entire database.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
    private readonly baseUrl = '/api/shallow';

    constructor(private http: HttpClient) { }

    /**
     * GET /api/shallow/token
     * Unauthenticated — returns a privileged token to anyone.
     */
    getAccessToken(): Observable<TokenResponse> {
        return this.http.get<TokenResponse>(`${this.baseUrl}/token`);
    }

    /**
     * GET /api/shallow/employees?token=...&search=...
     * If search is empty, returns ALL records (data over-fetching vulnerability).
     */
    getEmployees(token: string, search: string): Observable<EmployeeResponse> {
        return this.http.get<EmployeeResponse>(`${this.baseUrl}/employees`, {
            params: { token, search }
        });
    }
}
