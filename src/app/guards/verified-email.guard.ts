import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';

export const verifiedEmailGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const userEmail = userService.getEmail();
  if (userEmail) {
    return userService.getUserByEmail(userEmail).pipe(
      map(user=> {
        if (!user.verifiedEmail) {
          router.navigateByUrl('/verify-email')
          return false;
        }
        else if (user.store && !user.store.verified) {
          router.navigateByUrl('/verify-store-email')
          return false;
        }
        return true;
      })
    )
  }
  return false;
};
