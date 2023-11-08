import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, firstValueFrom } from 'rxjs';
import { ImageResponse } from 'src/app/models/ImageResponse.dto';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-left-cards',
  templateUrl: './left-cards.component.html',
  styleUrls: ['./left-cards.component.css']
})
export class LeftCardsComponent implements OnInit {

  @Output() leftData = new EventEmitter<{title:string, description:string, images:(string | ArrayBuffer)[]}>();
  @Output() nextStep = new EventEmitter<boolean>()

  constructor(
    private fb: FormBuilder,
    private imageService: ImagesService,
  ) {}
  
  selectedFile: File[] = [new File([], ''), new File([], ''), new File([], ''), new File([], '')]
  selectedImage: (string | ArrayBuffer)[] = ['','','',''];

  filled:boolean = true

  mainInfo = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required]
  })
  
  ngOnInit(): void {
  }

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

  uploadImage(): Observable<ImageResponse> {
    if (this.selectedFile) {
      const formData = new FormData();
      for (let index = 0; index < this.selectedFile.length; index++) {
        const element = this.selectedFile[index];
        formData.append('image', element);
      }
      return this.imageService.uploadImage(formData)
    }
    return new Observable();
  }

  onRemoveImage(index:number) {
    this.selectedImage[index] = ''
    this.selectedFile[index] = new File([], '')
  }

  async onNextStep() {
    if (!this.mainInfo.value.title || !this.mainInfo.value.description) {
      this.filled = false;
      return;
    }
    this.uploadImage().subscribe(data=> {
      const event = {title: this.mainInfo.value.title!, description: this.mainInfo.value.description!, images:[data.name]}
      this.leftData?.emit(event)
      this.nextStep.emit(true)
    })
  }
}
