import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedStoreComponent } from './visited-store.component';

describe('VisitedStoreComponent', () => {
  let component: VisitedStoreComponent;
  let fixture: ComponentFixture<VisitedStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitedStoreComponent]
    });
    fixture = TestBed.createComponent(VisitedStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
