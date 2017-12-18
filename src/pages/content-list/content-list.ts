import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TestPage } from '../test/test';

@IonicPage()
@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  topic: string;
  subTopic: string;
  currentIndex: number;
  subTopicArrayLength: number;
  topicCovered: number[] = [];

  subTopics:{Android: string[],Cordova: string[]} ={
    Android:[
      'Architecture', 'Activities', 'Services', 'Content Providers', 'Broadcast Receivers', 'Intents and Filters'
    ],
    Cordova:[
      'Introduction', 'Hybrid Mobile Application Architecture', 'Hybrid Mobile Application Development Tools', 'RestFull Webservices to Fetch/Send Data', 'Sample Ionic Mobile Application'
    ]
  };

  ionViewDidLoad() {
    this.topic = this.navParams.get('topic');
    this.subTopic = this.subTopics[this.topic][0];
    this.currentIndex = 0;
    this.topicCovered.push(0);
    this.subTopicArrayLength = this.subTopics[this.topic].length;
    console.log('ionViewDidLoad ContentListPage: '+this.navParams.get('topic'));
  }

   ionViewWillEnter(){
      this.menuCtrl.enable(true, 'subTopic');
      this.menuCtrl.enable(false, 'mainPageMenu');
   }

  subTopicSelected(subTopic: string){
      this.subTopic = subTopic;
      this.currentIndex = this.subTopics[this.topic].indexOf(this.subTopic);
      if(this.topicCovered.indexOf(this.currentIndex)==-1){
        this.topicCovered.push(this.currentIndex);
      }
      this.menuCtrl.toggle();
  }

  changeSubTopic(direction: string){
     this.currentIndex = this.subTopics[this.topic].indexOf(this.subTopic);
     if(direction == 'prev'){
       this.currentIndex = this.currentIndex-1;
     }
     if(direction == 'next')
     {
       this.currentIndex = this.currentIndex+1;
     }
     this.subTopic = this.subTopics[this.topic][this.currentIndex];
     if(this.topicCovered.indexOf(this.currentIndex)==-1){
       this.topicCovered.push(this.currentIndex);
     }
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  startTest(){
    this.navCtrl.setRoot(TestPage,{topic: this.topic});
  }

}
