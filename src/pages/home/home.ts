import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { ContentListPage } from '../content-list/content-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

    }

  topics: {title: String, para1: String, desc: String, iconUrl: String, timeSpent: String, marksObtained: String}[] = [{
      title:"Android",
      para1:"Native, Platform dependent",
      desc:"Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. Android was developed by the Open Handset Alliance, led by Google. This tutorial will teach you basic Android programming.",
      iconUrl:"../assets/imgs/android.jpg",
      timeSpent:"0 mins",
      marksObtained:"70%"

    },
    {
        title:"Cordova",
        para1:"Hybrid, Platform independent",
        desc:"Cordova is a platform that is used for building mobile apps using HTML, CSS and JS. We can think of Cordova as a container for connecting our web app with native mobile functionalities . Web applications cannot use native mobile functionalities by default. This is where Cordova comes into picture. It offers a bridge for connection between web app and mobile device.",
        iconUrl:"../assets/imgs/cordova.jpg",
        timeSpent:"0 mins",
        marksObtained:"70%"
      }];

    ionViewWillEnter(){
        this.menuCtrl.enable(true, 'mainPageMenu');
        this.menuCtrl.enable(false, 'subTopic');
     }

    startCourse(topic: String){
         this.navCtrl.setRoot(ContentListPage,{topic: topic});
      }



}
