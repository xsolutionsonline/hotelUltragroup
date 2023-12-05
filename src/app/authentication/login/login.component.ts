import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Utilities } from 'src/app/core/utils/utilities';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(user =>{
      if (!user) {
        Utilities.showSnackbar(this.snackBar, 'Usuario o contraseña no válidos', 5000, 'top');
        return;
      } 
        
      Utilities.saveObjectToCookie(this.cookieService, 'user', user);
      this.router.navigate(['/list-hotels']);
     
    });
    
  }
}
