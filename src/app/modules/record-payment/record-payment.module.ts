import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordPaymentComponent } from './record-payment/record-payment.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RecordPaymentComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: RecordPaymentComponent }]),
    CommonModule
  ]
})
export class RecordPaymentModule { }
