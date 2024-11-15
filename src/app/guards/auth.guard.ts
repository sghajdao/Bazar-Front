import { Location } from '@angular/common';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user:any = jwtDecode(token);
    
    if (Math.floor((new Date).getTime() / 1000) > user.exp) {
      const router = inject(Router)
      const location = inject(Location)
      router.navigateByUrl('/auth/login').then(() => {
        location.go('/auth/login');
        window.location.reload();
      });
      return false;
    }
    return true
  }
  const router = inject(Router)
  const location = inject(Location)
  router.navigateByUrl('/auth/login').then(() => {
    location.go('/auth/login');
    window.location.reload();
  });
  return false
};
