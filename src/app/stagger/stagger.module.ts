import { MorphPage } from './../morph/morph.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StaggerPage } from './stagger.page';
import { AnimationsModule } from '@fivethree/ngx-rxjs-animations';
import { FivOverlayModule } from 'dist/fivethree/ngx-rxjs-animations/public-api';

const routes: Routes = [
  {
    path: '',
    component: StaggerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationsModule,
    RouterModule.forChild(routes),
    FivOverlayModule
  ],
  declarations: [StaggerPage, MorphPage],
  entryComponents: [MorphPage]
})
export class StaggerPageModule {}
