import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxBubbleComponent } from './ngx-bubble.component';

@NgModule({
  declarations: [NgxBubbleComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxBubbleComponent]
})
export class NgxBubbleModule { }
