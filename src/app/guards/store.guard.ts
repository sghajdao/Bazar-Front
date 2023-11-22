import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';

export const storeGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const userEmail = userService.getLogedInUser();
  return userService.getUserByEmail(userEmail).pipe(
    map(user=> {
      if (user.store) {
        router.navigateByUrl('/profile')
        return false;
      }
      return true;
    })
  )
};
