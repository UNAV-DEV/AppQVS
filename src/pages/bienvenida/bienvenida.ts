import { InstruccionesPage } from './../instrucciones/instrucciones';
import { MenuPrincipalPage } from './../menu-principal/menu-principal';
import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Modulo con el mensaje de bienvenida, se presenta solo una vez despues de registrarse en la aplicacion
 */

@IonicPage()
@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {
  //variables
  fondo:string;
  nombre:string;
  sexo:string;
  loader: any;
  data:any;
  loading:any;
 
  /**
   * Se obtiene el nombre y el sexo de la persona y se define el diseno
   * @param platform 
   * @param navCtrl 
   * @param loadingCtrl 
   * @param restprovider archivo rest para coneccion con el servidor
   * @param toastCtrl 
   */
  constructor(public platform:Platform, public navCtrl: NavController,  public loadingCtrl:LoadingController, public restprovider:RestProvider, 
    private toastCtrl: ToastController) {
   this.presentLoading();
   
   platform.ready().then(()=>{
    this.sexo=window.localStorage.getItem('sexo');
    this.nombre=window.localStorage.getItem('nombre');
    console.log(this.sexo);
    
    if (this.sexo=="masculino") {
      this.fondo='./assets/imgs/fbh.jpg';
      
    }else if (this.sexo=='femenino') {
      this.fondo='./assets/imgs/fbm.jpg';
      
    }
    console.log(this.fondo);
  });
  this.loader.dismiss();
  }
   /**
    * @ignore
    */
  ionViewDidLoad() {
    console.log('ionViewDidLoad BienvenidaPage');
  }
/**
    * @ignore
    */
  presentLoading() {
    
    this.loader = this.loadingCtrl.create({
      content: "Cargando..."
    });
 
    this.loader.present();
 
  }



/**
    * @ignore
    */
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

    this.loading.present();
  }

 /**
  * navega hacia el modulo de Instrucciones
  */
goToInstrucciones(){
  this.navCtrl.setRoot(InstruccionesPage);
}

}
