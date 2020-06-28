import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetCssComponent } from './alphabet-css.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: AlphabetCssComponent}])
  ]
})
export class AlphabetCssModule { }
