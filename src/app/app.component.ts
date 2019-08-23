import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private platform: Platform) {
    if (this.platform.is('capacitor')) {
      SplashScreen.hide({
        fadeOutDuration: 0
      });
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
      StatusBar.setBackgroundColor({
        color: '#000000'
      });
    }
  }
}
