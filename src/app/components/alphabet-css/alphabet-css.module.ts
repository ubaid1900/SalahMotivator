import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlphabetCssComponent } from './alphabet-css.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{path: '', component: AlphabetCssComponent}]),
    CommonModule
  ]
})
export class AlphabetCssModule { }
