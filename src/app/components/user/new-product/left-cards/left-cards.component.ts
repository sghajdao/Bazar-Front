import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription, firstValueFrom } from 'rxjs';
import { ImageResponse } from 'src/app/models/ImageResponse.dto';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-left-cards',
  templateUrl: './left-cards.component.html',
  styleUrls: ['./left-cards.component.css']
})
export class LeftCardsComponent implements OnInit, OnDestroy {

  @Output() leftData = new EventEmitter<{title:string, description:string, images:(string | ArrayBuffer)[]}>();
  @Output() nextStep = new EventEmitter<boolean>()

  constructor(
    private fb: FormBuilder,
    private imageService: ImagesService,
  ) {}

  subscription: Subscription[] = []
  
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

  uploadImage(): Observable<ImageResponse[]> {
    if (this.selectedFile) {
      const formData = new FormData();
      for (let index = 0; index < this.selectedFile.length; index++) {
        if (this.selectedFile[index].name) {
          const element = this.selectedFile[index];
          formData.append('image', element);
        }
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
    const sub:Subscription = this.uploadImage().subscribe(data=> {
      let images:any[] = []
      data.forEach(item=> images.push(item.name))
      const event = {title: this.mainInfo.value.title!, description: this.mainInfo.value.description!, images:images}
      this.leftData?.emit(event)
      this.nextStep.emit(true)
    })
    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
