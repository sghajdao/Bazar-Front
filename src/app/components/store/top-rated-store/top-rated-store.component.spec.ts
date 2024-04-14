import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedStoreComponent } from './top-rated-store.component';

describe('TopRatedStoreComponent', () => {
  let component: TopRatedStoreComponent;
  let fixture: ComponentFixture<TopRatedStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedStoreComponent]
    });
    fixture = TestBed.createComponent(TopRatedStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
