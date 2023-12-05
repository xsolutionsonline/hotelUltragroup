import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './core/services/http-interceptor.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationGuard } from './core/authentication.guard';
import { AuthenticationService } from './core/services/authentication.service';
import { HotelAdministrationModule } from './hotel-administration/hotel-administration.module';
import { SharedModule } from './shared/components/shared.module';
import { ReservationModule } from './reservation/reservation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    HotelAdministrationModule,
    ReservationModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    SharedModule
   
  ],
  exports:[],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    AuthenticationGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
