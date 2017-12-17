import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  message: string;
  imageSuccess: string;
  markPercent: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ResultPage');
      this.message="Congratulations!! successfully cleared";
      this.imageSuccess="checkmark-circle-outline";
      this.markPercent = this.navParams.get('result');
      if(this.markPercent < 70){
        this.message = "Minimum passing score is 70";
        this.imageSuccess = "close-circle";
      }
    }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  }

