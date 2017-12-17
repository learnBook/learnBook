import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TestService } from '../../services/test.service';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  topic: string;
  testOperation: any;
  testJson: any;
  pageIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private testService: TestService) {
  }

  ionViewDidLoad() {
    this.topic = this.navParams.get('topic');
    console.log('ionViewDidLoad TestPage');
    this.testOperation=this.testService.getTest(this.topic);
    this.pageIndex=0;
    this.testOperation.subscribe(
      res =>{
        this.testJson=res;
      },
      err =>{
        console.log("Error Fetching test "+err);
      }
     );
  }

  pickQues(direction: string){
    if(direction=='prev'){
      this.pageIndex = this.pageIndex-1;
    }else if(direction=='next'){
      this.pageIndex = this.pageIndex+1;
    }
  }

  onAnswerSelect(selectedAns: string){
    this.testJson[this.pageIndex].answered = selectedAns;
  }

  submitTest(){
    let result: number = 0;
    let resultPercent: any = 0;
    for(let test of this.testJson) {
      if(test.answered==test.answer){
        result=result+1;
      }
    }
    resultPercent = (result/this.testJson.length)*100;
    this.navCtrl.setRoot(ResultPage,{result: resultPercent});
  }

}
