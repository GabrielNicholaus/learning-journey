import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-hierarchy-landing',
  imports: [RouterLink],
  templateUrl: './hierarchy-landing.component.html',
  styleUrl: './hierarchy-landing.component.css'
})
export class HierarchyLandingComponent {
  squares = Array.from({ length: 20 }, (_, i) => i);

  constructor(private authService: AuthService) {}

  isAdmin(): boolean {
    // VULNERABILITY: Relies completely on client-side JS array to gate UI visibility
    return this.authService.getRoles().includes('SPARK Product Management System Admin');
  }
}
