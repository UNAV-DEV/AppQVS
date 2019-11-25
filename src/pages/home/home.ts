import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public screenOrientation:ScreenOrientation, public iap:InAppBrowser) {
    this.iap.create("https://www.facebook.com/quierovivirsano/","_blank");
    
    this.screenOrientation.onChange().subscribe(
      () => {
          console.log("Orientation Changed");
      }
   );
  }

}
