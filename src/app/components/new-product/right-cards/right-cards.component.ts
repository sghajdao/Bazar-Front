import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-right-cards',
  templateUrl: './right-cards.component.html',
  styleUrls: ['./right-cards.component.css']
})
export class RightCardsComponent {

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
  
  keywords = ['Tag']
  formControl = new FormControl();
  announcer = inject(LiveAnnouncer);
  
  favoriteSeason?: string;
  seasons: string[] = ['Public', 'Protected(Subscribers)', 'Private'];
  editVisibility:boolean = false
  editPublishTime:boolean = false;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date;

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
}
