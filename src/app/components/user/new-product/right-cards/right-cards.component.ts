import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Keywords } from 'src/app/models/keywords.dto';
import { NewProduct } from 'src/app/models/newProduct.dto';
import { Category, Collection, Product } from 'src/app/models/product.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-right-cards',
  templateUrl: './right-cards.component.html',
  styleUrls: ['./right-cards.component.css']
})
export class RightCardsComponent implements OnInit, OnDestroy {

  @Input() leftData?:{title:string, description:string, images:(string | ArrayBuffer)[]}
  @Output() back = new EventEmitter<boolean>()

  constructor(
    private fb: FormBuilder,
    private productService:ProductService,
    private userService:UserService,
    private router:Router
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  subscription: Subscription[] = []
  
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
  category?:Category
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
  collection = new FormControl()
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
  filter:any
  
  ngOnInit(): void {
    this.filter = (d: Date | null): boolean => {
      const today = new Date();
      return !d || d >= today;
    };
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
    if (this.priceAndStock.value.price && this.priceAndStock.value.stock) {
      const email = this.userService.getLogedInUser()
      const sub:Subscription = this.userService.getUserByEmail(email).subscribe(user=> {
        let data:Product = {
          title: this.leftData?.title!,
          description: this.leftData?.description!,
          images: this.leftData?.images,
          price: this.priceAndStock.value.price!,
          stock: this.priceAndStock.value.stock!,
          category: this.category!,
          brand: this.brand,
          collection: this.collection.value,
          visibility: this.visibility!,
          pushDate: this.selectedDate,
          visitors: 0,
          sales: 0,
        }
        const request: NewProduct = {product: data, keywords: this.keywords, storeEmail: user.store?.email!}
        const sub2:Subscription = this.productService.newProduct(request).subscribe(data=>{
          
          this.router.navigateByUrl('/profile')
        });
        this.subscription.push(sub2)
      })
      this.subscription.push(sub)
    }
  }

  onBack() {
    this.back.emit(false)
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
