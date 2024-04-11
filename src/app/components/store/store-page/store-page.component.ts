import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { StoreService } from 'src/app/services/store.service';
import { StoreInfoComponent } from '../../modals/store-info/store-info.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  seller?: User
  myStore: boolean = false

  subscriptions: Subscription[] = []
  
  ngOnInit(): void {
    const sub = this.route.params.pipe(mergeMap(param=> this.getSeller(+param['id']))).subscribe({
      next: user=> {
        this.seller = user
        if (this.authService.isAuthenticated() &&
          localStorage.getItem('userId') && user.id === +localStorage.getItem('userId')!)
          this.myStore = true
      }
    })
    this.subscriptions.push(sub)
  }

  getSeller(id: number) {
    return this.storeService.getSellerByStoreId(id);
  }

  openDialog() {
    this.dialog.open(StoreInfoComponent, {
      data: this.seller?.store
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
