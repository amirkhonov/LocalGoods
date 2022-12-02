import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    SearchPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchPipe,
    SortPipe
  ]
})
export class PipesModule { }
