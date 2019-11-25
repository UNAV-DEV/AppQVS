import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, LoadingController, ViewController } from 'ionic-angular';
import { ModalImcPage } from '../modal-imc/modal-imc';

/**
 *Modulo de introduccion al calculo de IMC
 */

@IonicPage()
@Component({
  selector: 'page-evaluacion-imc',
  templateUrl: 'evaluacion-imc.html',
})

export class EvaluacionImcPage {
  loader:any;
  /**
    * @ignore
    */
  constructor(public navCtrl: NavController,  private modal:ModalController, platform:Platform, public loadingCrtl:LoadingController, public viewCtrl:ViewController) {
    this.presentLoading();
    platform.ready().then(()=>{
      this.loader.dismiss();
    });
    
  }
  /**
   * crea y navega al modal donde se calcula el IMC
   */
goToCalculoIMC(){
  let modalIMC = this.modal.create(ModalImcPage);
  modalIMC.present();
}
/**
    * @ignore
    */
  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluacionImcPage');
  }
/**
    * @ignore
    */
presentLoading(){
  this.loader = this.loadingCrtl.create({
    content:'Cargando...'
  });
  this.loader.present();
}

}
