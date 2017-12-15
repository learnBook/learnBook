import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  topic: String;

  ionViewDidLoad() {
    this.topic = this.navParams.get('topic');
    console.log('ionViewDidLoad ContentListPage: '+this.navParams.get('topic'));
  }

  subTopics:{Android: string[],Cordova: string[]} ={
    Android:[
      'Architecture', 'Application Components', 'Resources Organizing & Accessing', 'Activities', 'Services', 'Content Providers', 'Broadcast Receivers', 'Intents and Filters'
    ],
    Cordova:[
      'Overview', 'Environment Setup', 'First Application', 'Config.xml', 'Storage', 'Events', 'Back Button'
    ]
  };

   ionViewWillEnter(){
      this.menuCtrl.enable(true, 'subTopic');
      this.menuCtrl.enable(false, 'mainPageMenu');
   }

  subTopicSelected(subTopic: String){
      alert(subTopic);
  }

  goHome(){
  this.navCtrl.setRoot(HomePage);
  }

}
