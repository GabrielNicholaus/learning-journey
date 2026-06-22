import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Supplier {
  id: number;
  companyName: string;
  contactName: string;
  contactEmail: string;
  ndaNumber: string;
  active: boolean;
}

export interface SupplierNda {
  id: number;
  supplierId: number;
  ndaNumber: string;
  classification: string;
  documentTitle: string;
  expirationDate: string;
}

@Injectable({ providedIn: 'root' })
export class SeimsApiService {
  private readonly baseUrl = '/api/shallow/seims';

  constructor(private http: HttpClient) {}

  authenticate(token: string): Observable<{ authenticated: boolean; token: string; userId: string }> {
    return this.http.post<{ authenticated: boolean; token: string; userId: string }>(`${this.baseUrl}/auth`, null, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getAllSuppliers(): Observable<{ count: number; data: Supplier[] }> {
    return this.http.get<{ count: number; data: Supplier[] }>(`${this.baseUrl}/suppliers`);
  }

  getSupplierById(id: number): Observable<{ data: Supplier }> {
    return this.http.get<{ data: Supplier }>(`${this.baseUrl}/suppliers/${id}`);
  }

  getNdaBySupplier(supplierId: number): Observable<{ count: number; data: SupplierNda[] }> {
    return this.http.get<{ count: number; data: SupplierNda[] }>(`${this.baseUrl}/nda/${supplierId}`);
  }
}
