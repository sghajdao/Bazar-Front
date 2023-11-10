import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from '../services/store.service';
import { map } from 'rxjs';

export const storeGuard: CanActivateFn = (route, state) => {
  const storeService = inject(StoreService);
  const router = inject(Router);
  return storeService.getStoreByUserEmail().pipe(
    map(store => {
      if (store) {
        // Valid store exists, navigate to the profile or any other route as needed
        router.navigate(['/profile']);
        return true;
      } else {
        return false;
      }
    },)
  );
};
