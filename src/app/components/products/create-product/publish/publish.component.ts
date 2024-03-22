import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {}

  @Output() publish = new EventEmitter<FormGroup>()

  visibility?: string;
  seasons: string[] = ['Public', 'Protected(Subscribers)', 'Private'];
  editVisibility:boolean = false
  editPublishTime:boolean = false;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date;
  filter:any

  form = this.fb.group({
    visible: ['', Validators.required],
    date: ['', Validators.required]
  })

  ngOnInit(): void {
    this.filter = (d: Date | null): boolean => {
      const today = new Date();
      return !d || d >= today;
    };
  }

  onEditVisibility() {
    this.editVisibility = !this.editVisibility
  }

  onEditPublishTime() {
    this.editPublishTime = !this.editPublishTime
  }

  onPublish() {
    this.publish.emit(this.form)
  }
}
