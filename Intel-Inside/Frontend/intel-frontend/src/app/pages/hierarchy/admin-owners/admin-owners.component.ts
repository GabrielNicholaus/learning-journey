import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HierarchyApiService, AdminCredential } from '../../../services/hierarchy-api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-owners',
  imports: [RouterLink],
  templateUrl: './admin-owners.component.html',
  styleUrl: './admin-owners.component.css'
})
export class AdminOwnersComponent {
  credentials = signal<AdminCredential[]>([]);

  owners = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    nameWidths: [30 + Math.random() * 80, 30 + Math.random() * 50],
    wwidWidth: 60 + Math.random() * 20,
  }));

  constructor(private hierarchyApi: HierarchyApiService, private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.getRoles().includes('SPARK Product Management System Admin');
  }

  ngOnInit(): void {
    // Fetch exposed credentials (vulnerability demo)
    this.hierarchyApi.getCredentials().subscribe({
      next: (res) => this.credentials.set(res.data),
      error: () => {}
    });
  }

  deleteOwner(index: number) {
    this.owners.splice(index, 1);
  }
}
