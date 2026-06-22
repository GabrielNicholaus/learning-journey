import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MainComponent } from './pages/main/main.component';
import { HierarchyLandingComponent } from './pages/hierarchy/landing/hierarchy-landing.component';
import { CcbHistoryComponent } from './pages/hierarchy/ccb-history/ccb-history.component';
import { HierarchyOwnersComponent } from './pages/hierarchy/owners/hierarchy-owners.component';
import { AdminOwnersComponent } from './pages/hierarchy/admin-owners/admin-owners.component';
import { SeimsLandingComponent } from './pages/seims/landing/seims-landing.component';
import { SeimsProductCreationComponent } from './pages/seims/product-creation/seims-product-creation.component';
import { SeimsDocumentCreationComponent } from './pages/seims/document-creation/seims-document-creation.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    // Login & Logout
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },

    // Business Card System (Case A)
    { path: 'card', component: MainComponent, canActivate: [authGuard] },

    // Hierarchy Management System (Case B)
    { path: 'hierarchy', component: HierarchyLandingComponent, canActivate: [authGuard] },
    { path: 'hierarchy/ccb-history', component: CcbHistoryComponent, canActivate: [authGuard] },
    { path: 'hierarchy/owners', component: HierarchyOwnersComponent, canActivate: [authGuard] },
    { path: 'hierarchy/admin/owners', component: AdminOwnersComponent, canActivate: [authGuard] },

    // SEIMS (Case C)
    { path: 'seims', component: SeimsLandingComponent, canActivate: [authGuard] },
    { path: 'seims/product-creation', component: SeimsProductCreationComponent, canActivate: [authGuard] },
    { path: 'seims/document-creation', component: SeimsDocumentCreationComponent, canActivate: [authGuard] },

    // Defaults
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
