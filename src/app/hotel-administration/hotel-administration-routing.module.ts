import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepCreateHotelComponent } from './multi-step-create-hotel/multi-step-create-hotel.component';


const routes: Routes = [
  { path: '', component: MultiStepCreateHotelComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelAdministrationRoutingModule { }
