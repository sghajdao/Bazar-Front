import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClickedComponent } from './image-clicked.component';

describe('ImageClickedComponent', () => {
  let component: ImageClickedComponent;
  let fixture: ComponentFixture<ImageClickedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageClickedComponent]
    });
    fixture = TestBed.createComponent(ImageClickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
