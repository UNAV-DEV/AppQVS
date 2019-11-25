import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, LoadingController } from 'ionic-angular';
import { EvaluacionImcPage } from '../evaluacion-imc/evaluacion-imc';
import { TestPage } from '../test/test';
import { LoginPage } from '../login/login';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { SaludPage } from '../salud/salud';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Modulo de Menu evaluacion, se presentan los modulos perteneciente a la evaluacion de salud
 */

@IonicPage()
@Component({
  selector: 'page-evaluacion',
  templateUrl: 'evaluacion.html',
})
export class EvaluacionPage {
  //variables
  loader:any;
  fondo:string;
  /**
   * 
   * @param navCtrl 
   * @param platform 
   * @param loadingCrtl 
   * @param screenOrientation Orientacion de la pantalla
   */
  constructor(public navCtrl: NavController, platform:Platform, public loadingCrtl:LoadingController, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
            this.fondo='./assets/imgs/fevaluaciones.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/fevaluacionesh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
    this.presentLoading();
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
    
    
  }
/**
 * Navega al modulo de la evaluacion de salud
 */
  goToSalud(){
    this.navCtrl.push(SaludPage);
  }

  /**
   * Navega al modulo de calculo de IMC
   */
  goToIMC(){
    this.navCtrl.push(EvaluacionImcPage);
  }

  /**
   * Navega al modulo de menu de test de habitos
   */
  goToTest(){
    this.navCtrl.push(TestPage);
  }


/**
    * @ignore
    */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fevaluaciones.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fevaluacionesh.jpg'
    }
    console.log('ionViewDidLoad EvaluacionPage');
  }


  /**
   * Cierra la sesion de la aplicacion y borra el token de las notificaciones, navega a la pagina de login
   */
  cerrarsesion(){
    this.navCtrl.setRoot(LoginPage);
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
