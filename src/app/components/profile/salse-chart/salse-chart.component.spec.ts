import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalseChartComponent } from './salse-chart.component';

describe('SalseChartComponent', () => {
  let component: SalseChartComponent;
  let fixture: ComponentFixture<SalseChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalseChartComponent]
    });
    fixture = TestBed.createComponent(SalseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
