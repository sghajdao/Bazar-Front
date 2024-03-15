import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent {

  constructor(
    private fb: FormBuilder,
  ) {}

  @Output() mainInfon = new EventEmitter<FormGroup>()

  product = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })

  next() {
    this.mainInfon.emit(this.product)
  }
}
