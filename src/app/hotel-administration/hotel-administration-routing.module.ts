import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterHotelComponent } from './register-hotel/register-hotel.component';


const routes: Routes = [
  { path: '', component: RegisterHotelComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelAdministrationRoutingModule { }
