import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roles: { [key: string]: string } = {
    student: 'student',
    prof: 'prof',
    admin: 'admin'
  };

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username && password) {
      let userRole = null;
      if (username === 'student' && password === 'password') {
        userRole = this.roles['student'];
      } else if (username === 'prof' && password === 'password') {
        userRole = this.roles['prof'];
      } else if (username === 'admin' && password === 'password') {
        userRole = this.roles['admin'];
      }

      if (userRole) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('role', userRole);
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    this.router.navigate(['/home']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('role') !== null;
  }

  getUser(): string | null {
    return sessionStorage.getItem('username');
  }
  getRole(): string | null {
    return sessionStorage.getItem('role');
  }
  getRandomAvatar() {
    const random = Math.floor(Math.random() * 99);
    const gender = Math.floor(Math.random() * 10);
    return `https://randomuser.me/portraits/${(gender > 5) ? 'men' : 'women'}/${random}.jpg`;
  }
}
