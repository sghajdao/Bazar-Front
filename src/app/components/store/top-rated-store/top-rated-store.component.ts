import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/models/entities/store';

@Component({
  selector: 'app-top-rated-store',
  templateUrl: './top-rated-store.component.html',
  styleUrls: ['./top-rated-store.component.css']
})
export class TopRatedStoreComponent implements OnInit, OnDestroy {

  constructor(
    private storeService: StoreService,
  ) {}

  subscriptions: Subscription[] = []
  stores?: Store[]
  
  ngOnInit(): void {
    const sub = this.storeService.getTopRated().subscribe({
      next: data => this.stores = data
    })
    this.subscriptions.push(sub)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }
}
