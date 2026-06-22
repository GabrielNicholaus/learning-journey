import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeimsApiService, Supplier } from '../../../services/seims-api.service';

@Component({
  selector: 'app-seims-landing',
  imports: [RouterLink],
  templateUrl: './seims-landing.component.html',
  styleUrl: './seims-landing.component.css'
})
export class SeimsLandingComponent implements OnInit {
  sidebarOpen = true;
  relatedOpen = true;
  reportsOpen = true;
  suppliers = signal<Supplier[]>([]);

  constructor(private seimsApi: SeimsApiService) {}

  ngOnInit(): void {
    // Auto-authenticate with a broken token (vulnerability demo)
    this.seimsApi.authenticate('Not Autorized').subscribe({
      next: () => {
        // Fetch all suppliers after auth
        this.seimsApi.getAllSuppliers().subscribe({
          next: (res) => this.suppliers.set(res.data),
          error: () => {}
        });
      },
      error: () => {}
    });
  }

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  toggleRelated() { this.relatedOpen = !this.relatedOpen; }
  toggleReports() { this.reportsOpen = !this.reportsOpen; }
}
