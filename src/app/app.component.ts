import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Menu, NavController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import * as helpers from '../directives/helpers';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

     @ViewChild('content') content: NavController;
     @ViewChild(Menu) menu: Menu;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

   openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      helpers.debounce(this.content.setRoot(HomePage), 60, false);
    }
}

