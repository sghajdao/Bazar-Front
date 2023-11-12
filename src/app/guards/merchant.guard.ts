import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';

export const merchantGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const userEmail = userService.getLogedInUser();
  return userService.getUserByEmail(userEmail).pipe(
    map(user=> {
      // console.log(user);
      
      if (!user.user.store) {
        router.navigateByUrl('/newStore')
        return false;
      }
      return true;
    })
  )
};
