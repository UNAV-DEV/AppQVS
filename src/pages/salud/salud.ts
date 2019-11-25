import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { RsaludPage } from '../rsalud/rsalud';

/**
 * Modulo de salud, se reciben datos para realizar una evaluciacion del estado de salud del usuario
 */

@IonicPage()
@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})
export class SaludPage {
  //variables
  estado:boolean;
  fondo:string;
  loader:any=false;
  Datos = {'presion1':'', 'presion2':'', 'glucosa':'', 'CT':'', 'CHDL':'', 'CLDL':'','trigliceridos':'','sexo':''};
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, platform:Platform, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fintroestadodesalud.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/fintroestadodesaludh.jpg'
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
 * Navega al modulo de resultado salud
 */
goToResultado(){
  this.navCtrl.push(RsaludPage, this.Datos);
}
/**
 * @ignore
 */
  ionViewWillEnter(){
    this.estado=false;
  }
  /**
 * @ignore
 */
  ionViewDidEnter(){
    this.estado=true;
  }
  /**
 * @ignore
 */
  ionViewWillLeave(){
    this.estado=false;
  }
  /**
 * @ignore
 */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary'|| this.screenOrientation.type=='portrait-secondary') {
      this.fondo='./assets/imgs/fintroestadodesalud.jpg'
    }else if (this.screenOrientation.type=='landscape-primary'|| this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/fintroestadodesaludh.jpg'
    }
    console.log('ionViewDidLoad SaludPage');
    this.estado=false;
  }
/**
 * @ignore
 */
  presentLoading(){
    this.loader=this.loadingCtrl.create({
      content:'Cargando...'
    });
    this.loader.present();

  }

}
