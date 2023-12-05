import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/authentication.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./shared/components/shared.module').then(m => m.SharedModule),canActivate: [AuthenticationGuard] },
  { path: 'register-hotel', loadChildren: () => import('./hotel-administration/hotel-administration.module').then(m => m.HotelAdministrationModule),canActivate: [AuthenticationGuard] },
  { path: 'edit-hotel/:id', loadChildren: () => import('./hotel-administration/hotel-administration.module').then(m => m.HotelAdministrationModule),canActivate: [AuthenticationGuard] },
  { path: 'list-rooms-reservation/:id', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule),canActivate: [AuthenticationGuard] },
  { path: 'list-hotels-reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule),canActivate: [AuthenticationGuard] },
  { path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule),canActivate: [AuthenticationGuard] },
  { path: 'list-hotels', loadChildren: () => import('./hotel-administration/hotel-administration.module').then(m => m.HotelAdministrationModule),canActivate: [AuthenticationGuard] },
  { path: 'login', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: 'register', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } ),     
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
