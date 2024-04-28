import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyStoreEmailComponent } from './verify-store-email.component';

describe('VerifyStoreEmailComponent', () => {
  let component: VerifyStoreEmailComponent;
  let fixture: ComponentFixture<VerifyStoreEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyStoreEmailComponent]
    });
    fixture = TestBed.createComponent(VerifyStoreEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
