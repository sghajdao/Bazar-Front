import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCardsComponent } from './left-cards.component';

describe('LeftCardsComponent', () => {
  let component: LeftCardsComponent;
  let fixture: ComponentFixture<LeftCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftCardsComponent]
    });
    fixture = TestBed.createComponent(LeftCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
