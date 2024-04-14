import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Category, Collection } from 'src/app/models/entities/product';

@Component({
  selector: 'app-categorization',
  templateUrl: './categorization.component.html',
  styleUrls: ['./categorization.component.css']
})
export class CategorizationComponent {

  constructor(
    private fb: FormBuilder,
  ) {}

  @Output() categorization = new EventEmitter<FormGroup>()

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
  keywords = ['Tag']
  announcer = inject(LiveAnnouncer);

  form = this.fb.group({
    category: ['', Validators.required],
    brand: ['', Validators.required],
    collection: ['', Validators.required],
    keyword: [['Tag'], Validators.required]
  })

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

  next() {
    this.categorization.emit(this.form)
  }
}
