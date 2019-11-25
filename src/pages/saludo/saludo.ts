import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, LoadingController } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest'
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { TabsPage } from '../tabs/tabs';

/**
 * Modulo Saludo, esta pagina se muestra despues de el login, dando un saludo al usuario
 */

@IonicPage()
@Component({
  selector: 'page-saludo',
  templateUrl: 'saludo.html',
})
export class SaludoPage {
  //varibles
  imagen:string;
  nombre:string;
  loader:any;
 /**
  * Se recibe el sexo y el nombre del usuario y se define el diseno
  * @param navCtrl 
  * @param loadingCtrl 
  * @param rest 
  * @param platform 
  */
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, public rest:RestProvider,platform:Platform) {
    this.presentLoading();
    platform.ready().then(()=>{


    
    console.log(window.localStorage.getItem('sexo'));
    this.nombre=window.localStorage.getItem('nombre');
    if(window.localStorage.getItem("sexo")=='masculino'){
      
      this.imagen="./assets/imgs/nino.png";
     }else if(window.localStorage.getItem("sexo")=='femenino'){
      this.imagen="./assets/imgs/nina.png";
      
     }
     this.loader.dismiss();
    });
  }
/**
 * Navega al modulo de Tabs
 */
  goToMenu(){
    this.navCtrl.setRoot(TabsPage);
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
/**
 * @ignore
 */
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SaludoPage');
  }

}
