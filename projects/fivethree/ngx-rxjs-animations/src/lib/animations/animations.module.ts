import { AnimateDirective } from './animate.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AnimateDirective],
  imports: [CommonModule],
  exports: [AnimateDirective],
  providers: []
})
export class AnimationsModule {}
