import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ImageResponse } from 'src/app/models/dtos/image-response';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  constructor(
    private imageService: ImageService,
  ) {}

  @Output() images = new EventEmitter<{selectedFile:File[], selectedImage:(string | ArrayBuffer)[]}>()

  selectedFile: File[] = [new File([], ''), new File([], ''), new File([], ''), new File([], '')]
  selectedImage: (string | ArrayBuffer)[] = ['','','',''];

  onImageSelected(event :any, index:number) {
    this.selectedFile[index] = (event.target.files[0]);
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImage[index] = (e.target?.result!);
      };
      reader.readAsDataURL(this.selectedFile[index]);
    }
  }

  onRemoveImage(index:number) {
    this.selectedImage[index] = ''
    this.selectedFile[index] = new File([], '')
  }

  next() {
    this.images.emit({selectedFile: this.selectedFile, selectedImage: this.selectedImage});
  }
}
