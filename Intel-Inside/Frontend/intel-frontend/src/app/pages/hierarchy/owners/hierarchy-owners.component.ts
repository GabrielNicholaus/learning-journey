import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-hierarchy-owners',
  imports: [RouterLink],
  templateUrl: './hierarchy-owners.component.html',
  styleUrl: './hierarchy-owners.component.css'
})
export class HierarchyOwnersComponent {
  constructor(private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.getRoles().includes('SPARK Product Management System Admin');
  }

  hierarchies = [
    { name: 'CROMA Marketing Channel 1', expanded: false, owners: [] },
    { name: 'CROMA Revenue Segmentation', expanded: false, owners: [] },
    { name: 'Channel CPU Hierarchy', expanded: true, owners: [
      { name: 'Owner 1', wwid: '11234', email: '@intel.com' },
      { name: 'Owner 2', wwid: '11235', email: '@intel.com' },
      { name: 'Owner 3', wwid: '11236', email: '@intel.com' },
      { name: 'Owner 4', wwid: '11237', email: '@intel.com' },
      { name: 'Owner 5', wwid: '11238', email: '@intel.com' },
    ]},
    { name: 'Channel Revenue Hierarchy', expanded: true, owners: [
      { name: 'Owner 6', wwid: '11239', email: '@intel.com' },
      { name: 'Owner 7', wwid: '11240', email: '@intel.com' },
      { name: 'Owner 8', wwid: '11241', email: '@intel.com' },
    ]},
    { name: 'Market Use Case', expanded: true, owners: [
      { name: 'Owner 9', wwid: '11242', email: '@intel.com' },
      { name: 'Owner 10', wwid: '11243', email: '@intel.com' },
    ]},
    { name: 'Navigational Valid Product Hierarchy', expanded: false, owners: [] },
    { name: 'Operating Systems', expanded: true, owners: [
      { name: 'Owner 11', wwid: '11244', email: '@intel.com' },
      { name: 'Owner 12', wwid: '11245', email: '@intel.com' },
      { name: 'Owner 13', wwid: '11246', email: '@intel.com' },
      { name: 'Owner 14', wwid: '11247', email: '@intel.com' },
    ]},
    { name: 'Product Application', expanded: false, owners: [] },
    { name: 'Valid Brand Hierarchy', expanded: false, owners: [] },
    { name: 'Valid Label Hierarchy', expanded: false, owners: [] },
    { name: 'Valid Platform Codename Hierarchy', expanded: false, owners: [] },
    { name: 'Valid Product Configuration Hierarchy', expanded: false, owners: [] },
    { name: 'Valid Product Hierarchy', expanded: false, owners: [] },
  ];

  toggle(h: any) { h.expanded = !h.expanded; }
}
