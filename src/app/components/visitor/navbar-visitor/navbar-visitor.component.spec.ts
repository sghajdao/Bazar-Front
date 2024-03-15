import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVisitorComponent } from './navbar-visitor.component';

describe('NavbarVisitorComponent', () => {
  let component: NavbarVisitorComponent;
  let fixture: ComponentFixture<NavbarVisitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarVisitorComponent]
    });
    fixture = TestBed.createComponent(NavbarVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
