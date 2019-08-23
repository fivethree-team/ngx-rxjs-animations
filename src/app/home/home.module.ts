import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AnimationsModule } from '@fivethree/ngx-rxjs-animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimationsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TranslateModule.forChild()
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
