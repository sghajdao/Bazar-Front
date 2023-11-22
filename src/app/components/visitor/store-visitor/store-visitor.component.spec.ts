import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreVisitorComponent } from './store-visitor.component';

describe('StoreVisitorComponent', () => {
  let component: StoreVisitorComponent;
  let fixture: ComponentFixture<StoreVisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreVisitorComponent]
    });
    fixture = TestBed.createComponent(StoreVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
