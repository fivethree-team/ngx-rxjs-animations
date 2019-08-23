import { AnimateDirective } from './animate.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivOverlayModule } from '../overlay/overlay.module';

@NgModule({
  declarations: [AnimateDirective],
  imports: [CommonModule, FivOverlayModule],
  exports: [AnimateDirective, FivOverlayModule],
  providers: []
})
export class AnimationsModule {}
