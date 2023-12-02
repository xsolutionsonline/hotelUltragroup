import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router,
    private fb: FormBuilder, private snackBar: MatSnackBar) {}

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }

  login(): void {

    if (this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.snackBar.open('Usuario o contraseña no válidos', 'Cerrar', {
        duration: 3000, 
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
    }
  }
}
