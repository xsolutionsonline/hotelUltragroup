import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHotelsReservationComponent } from './list-hotels-reservation/list-hotels-reservation.component';
import { ListRoomsReservationComponent } from './list-rooms-reservation/list-rooms-reservation.component';

const routes: Routes = [
  { path: '', component: ListHotelsReservationComponent }  ,  
  { path: 'list-rooms-reservation/:id', component: ListRoomsReservationComponent }  , 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
