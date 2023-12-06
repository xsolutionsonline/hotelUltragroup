import { Component,OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Utilities } from 'src/app/core/utils/utilities';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  isUser: boolean = false;
  constructor(private cookieService: CookieService,
    private userService:AuthenticationService) {}
  ngOnInit(): void {
    this.userService.isUser$.subscribe((value) => {
      const user =Utilities.getObjectFromCookie(this.cookieService,'user');
      this.isUser =user?true:false;
    });
   
  }

}
