import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ImageCardComponent],
  	providers: [],
  	exports: [ImageCardComponent] })
export class ImageCardComponentModule {
}
