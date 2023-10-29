import { Component } from '@angular/core';

@Component({
  selector: 'app-left-cards',
  templateUrl: './left-cards.component.html',
  styleUrls: ['./left-cards.component.css']
})
export class LeftCardsComponent {

  constructor() {}

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
      
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('image', this.selectedFile[index]);
        // this.imageService.uploadImage(formData).subscribe(data=> console.log(data))
      }
    }
  }

  onRemoveImage(index:number) {
    this.selectedImage[index] = ''
    this.selectedFile[index] = new File([], '')
  }
}
