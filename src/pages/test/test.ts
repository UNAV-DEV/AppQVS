import { TestAutocontrolPage } from './../test-autocontrol/test-autocontrol';
import { TestSerfelizPage } from './../test-serfeliz/test-serfeliz';
import { TestDesayunarmasPage } from './../test-desayunarmas/test-desayunarmas';
import { TestDescansoadecuadoPage } from './../test-descansoadecuado/test-descansoadecuado';
import { TestActividadfisicaPage } from './../test-actividadfisica/test-actividadfisica';
import { TestBiencomerPage } from './../test-biencomer/test-biencomer';
import { TestActitudpositivaPage } from './../test-actitudpositiva/test-actitudpositiva';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';

import { IntrotestaguaPage } from '../introtestagua/introtestagua';
import { TestAguaPage } from '../test-agua/test-agua';

/**
 * Modulo test, es el menu de los test de los habitos
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  //variables
  loader:any;
  /**
 * @ignore
 */
  constructor(public navCtrl: NavController, platform:Platform, public loadingCrtl:LoadingController) {
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToTestAgua(){
    this.navCtrl.push(TestAguaPage);
    
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToTestActitudPositiva(){
    this.navCtrl.push(TestActitudpositivaPage);
    
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToTestBienComer(){
    this.navCtrl.push(TestBiencomerPage);
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToActividadFisica(){
    this.navCtrl.push(TestActividadfisicaPage);
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToDescansoAdecuado(){
    this.navCtrl.push(TestDescansoadecuadoPage);
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToAutoControl(){
    this.navCtrl.push(TestAutocontrolPage);
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToDesayunarMas(){
    this.navCtrl.push(TestDesayunarmasPage);
  }
/**
 * Navega al modulo del la portada del test y envia el numero del test
 */
  goToSerFeliz(){
    this.navCtrl.push(TestSerfelizPage);
  }
  /**
   * @ignore 
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  /**
   * @ignore 
   */
  presentLoading(){

    this.loader=this.loadingCrtl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }

}
