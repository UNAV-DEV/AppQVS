import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { Compromisohbt1Page } from '../compromisohbt1/compromisohbt1';
import { Compromisohbt1PageModule } from '../compromisohbt1/compromisohbt1.module';
import { CompromisoPage } from '../compromiso/compromiso';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { TabsPage } from '../tabs/tabs';

/**
 * Modulo resultado test, Muestra los resultados de los test
 */

@IonicPage()
@Component({
  selector: 'page-rtestagua',
  templateUrl: 'rtestagua.html',
})
export class RtestaguaPage {
  //variables
  resultado:string;
  promedio:any=window.localStorage.getItem('rtestagua');
  color:any;
  contenido:any;
  fondo:string;
  loader:any;
  test:string;

  /**
   * @ignore
   * @param navCtrl 
   * @param navParmas 
   * @param loadingCtrl 
   * @param platform 
   * @param screenOrientation 
   */
  constructor(public navCtrl: NavController, public navParmas:NavParams ,public loadingCtrl:LoadingController, platform:Platform,private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/frtestagua.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/frtestaguah.jpg'
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
 * Recibe los datos del resultado
 * @param screenOrientation 
 */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    this.test=this.navParmas.data.test;
    this.resultado=this.navParmas.data.resultado;
    this.contenido=this.navParmas.data.contenido;
    this.color=this.navParmas.data.color;
    if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
      this.fondo='./assets/imgs/frtestagua.jpg'
    }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/frtestaguah.jpg'
    }
    console.log('ionViewDidLoad RtestaguaPage');
  }
/**
 * @ignore
 */
  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'

    });
    this.loader.present();
  }
/**
 * Revisa si el usuario es es nuevo en realizar el test, si lo es lo envia al compromiso del habito, sino lo es lo envia al menu de evaluacion de salud
 */
  goToMenu(){
    this.navCtrl.setRoot(TabsPage);
    if(window.sessionStorage.getItem("consulta")=='nuevo'){
      let habito={};
      habito={test:this.test};
    this.navCtrl.push(CompromisoPage, habito);
    }else{
      this.navCtrl.push(EvaluacionPage);
    }
  }

}
