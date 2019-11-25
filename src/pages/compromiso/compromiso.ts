import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Compromisohbt1Page } from '../compromisohbt1/compromisohbt1';
import { AguaPage } from '../agua/agua';
import { Habito1Page } from '../habito1/habito1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Habito2Page } from '../habito2/habito2';
import { Habito3Page } from '../habito3/habito3';
import { Habito4Page } from '../habito4/habito4';
import { Habito5Page } from '../habito5/habito5';
import { Habito6Page } from '../habito6/habito6';
import { Habito7Page } from '../habito7/habito7';
import { Habito8Page } from '../habito8/habito8';

/**
Modulo de compromiso inicial del habito. Aparece solo una vez antes de iniciar el habito y despues de realizar el test del habito
 */

@IonicPage()
@Component({
  selector: 'page-compromiso',
  templateUrl: 'compromiso.html',
})
export class CompromisoPage {
  fondo:string;

  /**
    * @ignore
    */
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation:ScreenOrientation) {

    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fcompromiso.jpg';
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/fcompromisoh.jpg';
          }
          console.log(this.screenOrientation.type);
      }
   );
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fcompromiso.jpg';
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fcompromisoh.jpg';
    }
    
  }

/**
 * obtiene el nobmre del test que se acaba de realizar y envia a la portada del habito correspondiente
 */
  goToCompromisoAgua(){
    let test;
    let data={};
    test=this.navParams.data.test;//recibo el nombre del test de la pagina test
    data={ test : test};// empaqueto el nombre del test para enviarlo al nombre de la portada del habito
    console.log(data);

    if(this.navParams.data.test=='Beber Agua Natural'){
    this.navCtrl.setRoot(Habito1Page);
      window.localStorage.setItem('habito','1');
    }
    else if(this.navParams.data.test=='Actitud Positiva'){
      this.navCtrl.setRoot(Habito2Page);
      window.localStorage.setItem('habito','2');
    }
    else if(this.navParams.data.test=='Bien Comer'){
        this.navCtrl.setRoot(Habito3Page);
      window.localStorage.setItem('habito','3');
    }
    else if(this.navParams.data.test=='Actividad Física'){
      this.navCtrl.setRoot(Habito4Page);
      window.localStorage.setItem('habito','4');
    }
    else if(this.navParams.data.test=='Descanso Adecuado'){
      this.navCtrl.setRoot(Habito5Page);
      window.localStorage.setItem('habito','5');
    }
    else if(this.navParams.data.test=='Auto-Control'){
      this.navCtrl.setRoot(Habito6Page);
      window.localStorage.setItem('habito','6');
    }
    else if(this.navParams.data.test=='Desayunar Más y Cenar Menos'){
      this.navCtrl.setRoot(Habito7Page);
      window.localStorage.setItem('habito','7');
    }
    else if(this.navParams.data.test=='Ser Feliz'){
      this.navCtrl.setRoot(Habito8Page);
      window.localStorage.setItem('habito','8');
    }

    this.navCtrl.push(AguaPage, data);
  }

}
