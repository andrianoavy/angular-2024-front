import { Component, NgModule } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      if(this.authService.isAuthenticated()) {
        this.router.navigate(['/home'])
      }
    } else {
      alert('Invalid credentials');
    }
  }
}

