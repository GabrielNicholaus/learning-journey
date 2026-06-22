import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seims-product-creation',
  imports: [RouterLink],
  templateUrl: './seims-product-creation.component.html',
  styleUrl: './seims-product-creation.component.css'
})
export class SeimsProductCreationComponent {
  sidebarOpen = true;
  relatedOpen = true;
  reportsOpen = true;

  rows = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    nameWidths: [60 + Math.random() * 40, 40 + Math.random() * 30, 30 + Math.random() * 30],
    createdBy: [40 + Math.random() * 20, 20 + Math.random() * 20],
    date: ['4/18/21, 11:13 PM','6/2/17, 7:41 PM','12/22/16, 7:46 AM','12/30/21, 10:37 PM','12/30/21, 10:24 PM','9/8/10, 3:16 AM','9/8/10, 3:29 AM','9/8/10, 3:37 AM','9/9/10, 11:30 PM','10/6/11, 2:56 AM'][i],
    active: 'Y'
  }));

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  toggleRelated() { this.relatedOpen = !this.relatedOpen; }
  toggleReports() { this.reportsOpen = !this.reportsOpen; }
}
