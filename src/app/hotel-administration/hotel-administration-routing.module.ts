import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepCreateHotelComponent } from './multi-step-create-hotel/multi-step-create-hotel.component';
import { ListHotelsComponent } from './list-hotels/list-hotels.component';


const routes: Routes = [
  { path: '', component: MultiStepCreateHotelComponent }  ,
  { path: 'list-hotels', component: ListHotelsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelAdministrationRoutingModule { }
