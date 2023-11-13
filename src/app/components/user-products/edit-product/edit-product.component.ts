import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.dto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() productToEdit?:Product
  @Output() edited = new EventEmitter<boolean>(true)

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
  ) {}

  productInfo:any

  visibility?: string;
  seasons: string[] = ['Public', 'Protected(Subscribers)', 'Private'];
  editVisibility:boolean = false
  editPublishTime:boolean = false;
  minDate?: Date;
  maxDate?: Date;
  selectedDate?: Date;

  ngOnInit(): void {
    this.minDate = new Date()
    this.productInfo = this.fb.group({
      title: [this.productToEdit?.title, Validators.required],
      description: [this.productToEdit?.description, Validators.required],
      price: [this.productToEdit?.price, Validators.required],
      stock: [this.productToEdit?.stock, Validators.required]
    })
    this.selectedDate = this.productToEdit?.pushDate
    this.visibility = this.productToEdit?.visibility
  }

  onEditVisibility() {
    this.editVisibility = !this.editVisibility
  }

  onEditPublishTime() {
    this.editPublishTime = !this.editPublishTime
  }

  onPublish() {
    if (this.productToEdit && this.productInfo.value.title &&
        this.productInfo.value.description && this.productInfo.value.price &&
        this.productInfo.value.stock && this.visibility) {
      let product: Product = this.productToEdit
      product.title = this.productInfo.value.title
      product.description = this.productInfo.value.description
      product.price = this.productInfo.value.price
      product.stock = this.productInfo.value.stock
      product.visibility = this.visibility
      product.pushDate = this.selectedDate
      this.productService.updateProduct(product).subscribe({
        next: prod=> this.edited.emit(false)
      })
    }
  }
}
