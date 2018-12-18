import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
  ],
  providers: [],
  entryComponents: []
})
export class FathymSharedModule {
}
