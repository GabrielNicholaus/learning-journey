import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seims-document-creation',
  imports: [RouterLink],
  templateUrl: './seims-document-creation.component.html',
  styleUrl: './seims-document-creation.component.css'
})
export class SeimsDocumentCreationComponent {
  sidebarOpen = true;
  reportsOpen = true;

  rows = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    nameWidths: [50 + Math.random() * 50, 30 + Math.random() * 40],
    createdBy: [30 + Math.random() * 30, 20 + Math.random() * 20],
    date: ['3/21/24, 2:41 AM','2/15/24, 8:32 PM','1/3/24, 11:14 AM','12/18/23, 5:28 PM','11/22/23, 9:05 AM','10/30/23, 1:47 AM','10/2/23, 6:33 PM','9/15/23, 3:11 AM','8/28/23, 7:58 PM','7/14/23, 12:22 PM'][i],
    active: 'Y'
  }));

  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  toggleReports() { this.reportsOpen = !this.reportsOpen; }
}
