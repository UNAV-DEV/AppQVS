import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Modulo de Slide, es la primera vista de la aplicacion se muestra solo cuando se abre la app y no hay una sesion abierta
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, private screenOrientation:ScreenOrientation) {
    this.screenOrientation.lock('portrait');
  }
  /**
   * Navega al modulo de login
   */
goToHome(){
 
  this.navCtrl.setRoot(LoginPage);
}
}
