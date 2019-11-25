import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Modulo de Instrucciones, muestra las instrucciones iniciales
 */

@IonicPage()
@Component({
  selector: 'page-instrucciones',
  templateUrl: 'instrucciones.html',
})
export class InstruccionesPage {
/**
 * @ignore
 */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
/**
 * @ignore
 */
  ionViewDidLoad() {
    console.log('ionViewDidLoad InstruccionesPage');
  }
/**
 * Navega hacia el modulo de Tabs en la pagina principal
 */
  goToMenu(){
    this.navCtrl.setRoot(TabsPage);
  }

}
