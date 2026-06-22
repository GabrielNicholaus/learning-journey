import { Injectable, signal, computed } from '@angular/core';

/**
 * VULNERABILITY SIMULATION: Fake MSAL Authentication Service
 *
 * This service simulates the Microsoft Authentication Library (MSAL) used
 * by the original Intel Business Card portal. Authentication state is stored
 * as a simple client-side boolean — exactly how the real system worked.
 *
 * The attacker bypassed authentication by modifying getAllAccounts() to
 * return a non-empty array, tricking the Angular app into believing
 * a valid user was logged in.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private _userEmail = signal('');

  constructor() {
    // VULNERABILITY MODEL: Expose a fake MSAL API on the global window.
    // In the real breach, attackers modified the MSAL logic to always
    // return a populated array, tricking the Angular app.
    if (typeof window !== 'undefined') {
      (window as any).msal = {
        getAllAccounts: () => {
          return []; // Secure by default
        },
        getRoles: () => {
          return []; // Secure by default
        }
      };
    }
  }

  getAllAccounts(): any[] {
    if (typeof window !== 'undefined' && (window as any).msal) {
      return (window as any).msal.getAllAccounts() || [];
    }
    return [];
  }

  getRoles(): string[] {
    if (typeof window !== 'undefined' && (window as any).msal && (window as any).msal.getRoles) {
      return (window as any).msal.getRoles() || [];
    }
    return [];
  }

  isAuthenticated(): boolean {
    const accounts = this.getAllAccounts();
    // VULNERABILITY: Blindly trusting the client-side array length
    return accounts && accounts.length > 0;
  }

  forceLogin(username: string, roles: string[]): void {
    if (typeof window !== 'undefined' && (window as any).msal) {
      (window as any).msal.getAllAccounts = () => [{username}];
      (window as any).msal.getRoles = () => roles;
    }
  }

  login(email: string): void {
    // Simulate an SSO redirect failure. We purposely DO NOT authenticate here,
    // so the attacker is forced to recreate the MSAL bypass via the browser console.
    console.error('[SSO Simulation] Redirect blocked. Real authentication is disabled for this demonstration.');
    console.info('💡 HINT: To bypass this screen, simulate the MSAL vulnerability by modifying the `msal.getAllAccounts` function in this console, then click Next.');
  }

  logout(): void {
    this._userEmail.set('');
    if (typeof window !== 'undefined' && (window as any).msal) {
      (window as any).msal.getAllAccounts = () => [];
    }
  }
}
