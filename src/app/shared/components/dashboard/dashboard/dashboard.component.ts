import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  isSidebarOpen = true;
  
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/list-hotels-reservation']);
  }

  

  toggleSidebar(): void {
    
    this.isSidebarOpen = !this.isSidebarOpen;
    
  }

}
