import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContentListPage } from '../pages/content-list/content-list';
import { AndroidCourseMaterialPage } from '../pages/android-course-material/android-course-material';
import { CordovaCourseMaterialPage } from '../pages/cordova-course-material/cordova-course-material';
import { TestPage } from '../pages/test/test';
import { ResultPage } from '../pages/result/result';


import { TestService } from '../services/test.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContentListPage,
    AndroidCourseMaterialPage,
    CordovaCourseMaterialPage,
    TestPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContentListPage,
    AndroidCourseMaterialPage,
    CordovaCourseMaterialPage,
    TestPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestService
  ]
})
export class AppModule {}
