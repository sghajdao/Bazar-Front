import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Subscription } from 'rxjs';
import { StoreResponse } from 'src/app/models/dtos/storeResponse';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
  ) {}

  response?: StoreResponse

  subscriptions: Subscription[] = []

  ngOnInit(): void {
    const userId: number = localStorage.getItem('userId')? +localStorage.getItem('userId')! : -1
    const sub = this.route.params.pipe(mergeMap(id => this.storeService.getStoreById({storeId: +id['id'], userId: userId}))).subscribe({
      next: data => this.response = data
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
