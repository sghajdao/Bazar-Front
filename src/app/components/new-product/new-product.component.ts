import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  constructor(
    private imageService: ImagesService
  ) {}

  selectedFile?: File
  selectedImage: string | ArrayBuffer = '';

  keywords = ['Tag']
  formControl = new FormControl();
  announcer = inject(LiveAnnouncer);

  favoriteSeason?: string;
  seasons: string[] = ['Public', 'Protected(Subscribers)', 'Private'];
  editVisibility:boolean = false

  onImageSelected(event :any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage = e.target?.result!;
      };
      reader.readAsDataURL(this.selectedFile);
      
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('image', this.selectedFile);
        // this.imageService.uploadImage(formData).subscribe(data=> console.log(data))
      }
    }
  }

  onImageClick() {
    const fileInput = document.getElementById('customFile1');
    fileInput?.click();
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
}
