import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from '../services/store.service';

export const merchantGuard: CanActivateFn = (route, state) => {
  const storeId = localStorage.getItem("store");
  if (storeId) {
    if (storeId !== '-1') {
      return true;
    }
  }
  else {
    const storeService = inject(StoreService);
    storeService.getStoreByUserEmail().subscribe({
      next: store=> localStorage.setItem('store', store.id?.toString()!),
      error: err=> localStorage.setItem('store', '-1')
    })
  }
  const router = inject(Router)
  router.navigate(['/newStore'])
  return false
};
