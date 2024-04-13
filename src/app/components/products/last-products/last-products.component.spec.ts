import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProductsComponent } from './last-products.component';

describe('LastProductsComponent', () => {
  let component: LastProductsComponent;
  let fixture: ComponentFixture<LastProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastProductsComponent]
    });
    fixture = TestBed.createComponent(LastProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
