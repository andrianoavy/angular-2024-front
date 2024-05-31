import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRoles = route.data['role'] as string[];
  const isAuthenticated = authService.isAuthenticated();
  const currentRole = authService.getRole();

  if (isAuthenticated && expectedRoles.findIndex(s => s === currentRole) > -1) {
    return true;
  }
  else {
    alert('Vous n\'êtes pas autorisé à accéder à ce chemin');
    router.navigate(['/devoirs'])
    return false;
  }
};
