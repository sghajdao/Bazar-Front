import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-clicked',
  templateUrl: './image-clicked.component.html',
  styleUrls: ['./image-clicked.component.css']
})
export class ImageClickedComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}
}
