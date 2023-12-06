import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Utilities } from 'src/app/core/utils/utilities';
import { UserRequest } from 'src/app/shared/models/userRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    const userRequest: UserRequest = this.getUserRequestFromForm();

    this.authService.login(userRequest).subscribe({
      next: () => {
        this.router.navigate(['/reservation']);
      },
      error: (error) => {
        this.showSnackbarError(error.error);
      }
    });
  }

  private getUserRequestFromForm(): UserRequest {
    return {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };
  }

  private showSnackbarError(errorMessage: string): void {
    Utilities.showSnackbar(this.snackBar, errorMessage, 5000, 'top');
  }
}
