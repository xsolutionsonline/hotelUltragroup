import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { RatingstarComponent } from './ratingstar/ratingstar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';

@NgModule({
  declarations: [
    ImageUploadComponent,
    RatingstarComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    DashboardRoutingModule,
    MatGridListModule
  ],
  exports: [ImageUploadComponent,DashboardComponent,RatingstarComponent]
})
export class SharedModule { }
