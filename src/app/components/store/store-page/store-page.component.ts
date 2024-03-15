import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { User } from 'src/app/models/user';
import { StoreService } from 'src/app/services/store.service';
import { StoreInfoComponent } from '../../modals/store-info/store-info.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private authService: AuthService,
    private dialog: MatDialog,
  ) {}

  seller?: User
  myStore: boolean = false
  
  ngOnInit(): void {
    this.route.params.pipe(mergeMap(param=> this.getSeller(+param['id']))).subscribe({
      next: user=> {
        this.seller = user
        if (this.authService.isAuthenticated() &&
          localStorage.getItem('userId') && user.id === +localStorage.getItem('userId')!)
          this.myStore = true
      }
    })
  }

  getSeller(id: number) {
    return this.storeService.getSellerByStoreId(id);
  }

  openDialog() {
    this.dialog.open(StoreInfoComponent, {
      data: this.seller?.store
    });
  }
}
