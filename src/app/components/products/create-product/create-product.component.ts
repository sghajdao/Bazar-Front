import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, NgModel, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  
  constructor(private fb: FormBuilder) {}

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required]
  })

  mainInfo?: FormGroup
  priceStock?: FormGroup
  selectedFile: File[] = [new File([], ''), new File([], ''), new File([], ''), new File([], '')]

  getMainInfo(event: FormGroup) {
    this.mainInfo = event
  }

  getPrice(event: FormGroup) {
    this.priceStock = event
  }

  getImages(event: File[]) {
    this.selectedFile = event
  }

}
