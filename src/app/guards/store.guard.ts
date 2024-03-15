import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';

export const storeGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const userEmail = userService.getEmail();
  if (userEmail) {
    return userService.getUserByEmail(userEmail).pipe(
      map(user=> {
        if (user.store) {
          router.navigateByUrl('/')
          return false;
        }
        return true;
      })
    )
  }
  return false;
};
