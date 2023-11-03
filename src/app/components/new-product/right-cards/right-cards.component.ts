import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Category, Collection } from 'src/app/models/product.dto';

@Component({
  selector: 'app-right-cards',
  templateUrl: './right-cards.component.html',
  styleUrls: ['./right-cards.component.css']
})
export class RightCardsComponent implements OnInit {

  @Input() leftData?:{title:string, description:string, images:(string | ArrayBuffer)[]}
  @Output() back = new EventEmitter<boolean>()

  constructor(
    private fb: FormBuilder
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  
  priceAndStock = this.fb.group({
    price: [0, Validators.required],
    stock: [0, Validators.required]
  })
  categories?:string[] = [
    Category.COSMITICS,
    Category.DIGITAL,
    Category.FOOD,
    Category.FURNITURE,
    Category.HEALTH,
    Category.HOUSEHOLD,
    Category.MEDIA,
    Category.OFFICE,
    Category.PET
  ]
  category:string = ''
  collections:string[] = [
    Collection.ADULTS,
    Collection.KIDS,
    Collection.FEMALE,
    Collection.MALE,
    Collection.AUTUMN,
    Collection.WINTER,
    Collection.SPRING,
    Collection.SUMMER
  ]
  collection = new FormControl('')
  brand = '';
  keywords = ['Tag']
  formControl = new FormControl();
  announcer = inject(LiveAnnouncer);
  
  visibility?: string;
  seasons: string[] = ['Public', 'Protected(Subscribers)', 'Private'];
  editVisibility:boolean = false
  editPublishTime:boolean = false;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date;
  
  ngOnInit(): void {
    // console.log(this.leftData);
  }

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  onEditVisibility() {
    this.editVisibility = !this.editVisibility
  }

  onEditPublishTime() {
    this.editPublishTime = !this.editPublishTime
  }

  onPublish() {
    let data = {
      price: this.priceAndStock.value.price,
      stock: this.priceAndStock.value.stock,
      category: this.category,
      brand: this.brand,
      collectios: this.collection.value,
      keywords: this.keywords,
      visibility: this.visibility,
      pushDate: this.selectedDate
    }
    console.log(this.leftData);
    console.log(data);
  }

  onBack() {
    this.back.emit(false)
  }
}
