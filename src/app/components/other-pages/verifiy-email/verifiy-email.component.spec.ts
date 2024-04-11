import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiyEmailComponent } from './verifiy-email.component';

describe('VerifiyEmailComponent', () => {
  let component: VerifiyEmailComponent;
  let fixture: ComponentFixture<VerifiyEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiyEmailComponent]
    });
    fixture = TestBed.createComponent(VerifiyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
