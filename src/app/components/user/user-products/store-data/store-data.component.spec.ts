import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDataComponent } from './store-data.component';

describe('StoreDataComponent', () => {
  let component: StoreDataComponent;
  let fixture: ComponentFixture<StoreDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreDataComponent]
    });
    fixture = TestBed.createComponent(StoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
