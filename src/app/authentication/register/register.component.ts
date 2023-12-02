import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordHidden = true;

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      birthDate: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
    
  }

  register(): void {
    this.authService.register(this.registerForm.value as User);
    this.router.navigate(['/login']);
  }

  onContactKeydown(event: any): void {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }

  togglePasswordVisibility(event: Event): void {
    event.preventDefault();
    this.passwordHidden = !this.passwordHidden;
  }

}