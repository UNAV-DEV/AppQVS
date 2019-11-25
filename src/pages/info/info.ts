import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, private iap:InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  Cerrar(){
    this.viewCtrl.dismiss();
  }
  goToUMN(){
    this.iap.create("https://adventistasumn.org/","_blank");
  }

  goToISC(){
    this.iap.create("https://www.facebook.com/ISCUNAV","_blank");
  }
}
