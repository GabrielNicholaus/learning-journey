import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HierarchyApiService, Product } from '../../../services/hierarchy-api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ccb-history',
  imports: [RouterLink],
  templateUrl: './ccb-history.component.html',
  styleUrl: './ccb-history.component.css'
})
export class CcbHistoryComponent implements OnInit {
  products = signal<Product[]>([]);

  // Static CCB request data matching the reference
  ccbRequests = [
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: 'Intel® Converged Security and Management Engine', newTermType: 'PRODGROUP', notes: '', date: '11/7/2024', type: 'Create Term', requestor: '@intel.com', taskId: '958', requestId: '3474', status: 'Submitted' },
    { epmId: '', epmName: '', termType: '', mm: '99CD07', newEpmId: '235761', newEpmName: 'Intel® RealSense™ Depth Camera', newTermType: 'PRODNAME', notes: '', date: '11/7/2024', type: 'Remap Term', requestor: '@intel.com', taskId: '957', requestId: '3473', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '99CD07', newEpmId: '235761', newEpmName: 'Intel® RealSense™ Depth Camera', newTermType: 'PRODNAME', notes: '2nd request to map MM 99CD07 to EPM ID 235761.', date: '11/6/2024', type: 'Remap Term', requestor: '@intel.com', taskId: '956', requestId: '3472', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: '', newTermType: 'PLTF-CONF', notes: 'IPS Request', date: '11/6/2024', type: 'Create Term', requestor: '@intel.com', taskId: '955', requestId: '3469', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: '', newTermType: 'PLATFORM', notes: 'IPS Request', date: '11/6/2024', type: 'Create Term', requestor: '@intel.com', taskId: '955', requestId: '3471', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: '', newTermType: 'ATS-GROUP', notes: 'IPS Request', date: '11/6/2024', type: 'Create Term', requestor: '@intel.com', taskId: '955', requestId: '3468', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: '', newTermType: 'CODENAME', notes: 'IPS Request', date: '11/6/2024', type: 'Create Term', requestor: '@intel.com', taskId: '955', requestId: '3470', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '965924', newEpmId: '143368', newEpmName: 'Arria® V 5AGXB3 FPGA 5AGXMB3G4F31C4N', newTermType: 'PRODNAME', notes: 'Please remap product status. Thanks', date: '11/5/2024', type: 'Remap Term', requestor: '@intel.com', taskId: '954', requestId: '3467', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: 'Intel® Arc™ A760A Graphics', newTermType: 'PRODGROUP', notes: '', date: '10/31/2024', type: 'Create Term', requestor: '@intel.com', taskId: '953', requestId: '3466', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '99CTWM', newEpmId: '', newEpmName: '', newTermType: 'PRODNAME', notes: 'new Prod name for [redacted]', date: '10/30/2024', type: 'Remap Term', requestor: '@intel.com', taskId: '952', requestId: '3465', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: 'Intel® Core™ Ultra 7 Processor 255HX', newTermType: 'PRODGROUP', notes: 'Resubmitting request with proper case for "Processor"', date: '10/29/2024', type: 'Create Term', requestor: '@intel.com', taskId: '951', requestId: '3464', status: 'Approved' },
    { epmId: '', epmName: '', termType: '', mm: '', newEpmId: '', newEpmName: 'Intel® Core™ Ultra 9 Processor 275HX', newTermType: 'PRODGROUP', notes: 'Resubmitting request with proper case for "Processor"', date: '10/29/2024', type: 'Create Term', requestor: '@intel.com', taskId: '951', requestId: '3461', status: 'Approved' },
  ];

  constructor(private hierarchyApi: HierarchyApiService, private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.getRoles().includes('SPARK Product Management System Admin');
  }

  ngOnInit(): void {
    // Also fetch products from backend to demonstrate data fetching
    this.hierarchyApi.getHierarchy().subscribe({
      next: (res) => this.products.set(res.data),
      error: () => {} // Backend connection optional for this page
    });
  }
}
