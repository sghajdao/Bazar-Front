import { Component } from '@angular/core';
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
        this.imageService.uploadImage(formData).subscribe(data=> console.log(data))
      }
    }
  }
}
