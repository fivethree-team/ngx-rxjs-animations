import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MasonryPage } from './masonry.page';
import { AnimationsModule } from '@fivethree/ngx-rxjs-animations';

const routes: Routes = [
  {
    path: '',
    component: MasonryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MasonryPage]
})
export class MasonryPageModule {}
