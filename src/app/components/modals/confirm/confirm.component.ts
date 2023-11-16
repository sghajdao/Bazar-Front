import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product.dto';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  userEmail?:string
  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
  ) {
  }

  deleteProduct() {
    if (this.data.id) {
      this.dialogRef.close('Deletion successful')
      this.productService.deleteProduct(this.data.id).subscribe()
    }
  }
}
