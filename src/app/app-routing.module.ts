import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../app/shared/components/dashboard/dashboard.module';
import { AuthenticationGuard } from './core/authentication.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./shared/components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthenticationGuard] },
  { path: 'login', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: 'register', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } ), 
    DashboardModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
