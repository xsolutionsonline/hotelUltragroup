import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  isSidebarOpen = true;
  
  ngOnInit(): void {
    
  }

  

  toggleSidebar(): void {
    
    this.isSidebarOpen = !this.isSidebarOpen;
    
  }

}
