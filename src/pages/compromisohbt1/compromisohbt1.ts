

import { MenuPrincipalPage } from './../menu-principal/menu-principal';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { MenuHabitosPage } from '../menu-habitos/menu-habitos';
import { TabsPage } from '../tabs/tabs';

/**
 *Modal compromiso del habito es el que guarda la actividad diaria
 */

@IonicPage()
@Component({
  selector: 'page-compromisohbt1',
  templateUrl: 'compromisohbt1.html',
})
export class Compromisohbt1Page {
  //variables
  data : any;
  userData = {"id": window.localStorage.getItem('id'), "id_habito": "" , "registro": "aceptohbt1"};
  loading:any;
  habito;
  fondo;
  texto;

  /**
   * Se define el habito actual y el color de fondo
   * @param navCtrl 
   * @param rest archivo de comunicacion con el servidor REST
   * @param loadingCtrl 
   * @param toastCtrl 
   * @param viewCtrl 
   */
  constructor(private navCtrl: NavController, private rest:RestProvider, private loadingCtrl:LoadingController, private toastCtrl:ToastController,private viewCtrl:ViewController) {
  this.habito=window.localStorage.getItem('habito');
  this.userData.id_habito=this.habito;
  //habitos
if(this.habito=='1'){
  this.fondo='#26c9dc';
}else if(this.habito=='2'){
  this.fondo='#ff36f8';
}else if(this.habito=='3'){
  this.fondo='#17da40';
}else if(this.habito=='4'){
  this.fondo='#c70000';
}else if(this.habito=='5'){
  this.fondo='#4dccb6';
}else if(this.habito=='6'){
  this.fondo='#bf41b9';
}else if(this.habito=='7'){
  this.fondo='#fe5c25';
}else if(this.habito=='8'){
  this.fondo='#ffdb00';
}

  }
/**
    * @ignore
    */
  ionViewDidLoad() {
    console.log('ionViewDidLoad Compromisohbt1Page');
   
  }

/**
 * Envia un POST al servidor mediante el archivo rest para guardar el avance del habito en el servidor, y se resive un mensaje de parte del servidor
 */
 goToAcepto(){
   this.showLoader();
    this.rest.acepto(this.userData).then((result)=>{
      this.loading.dismiss();
      this.data = result;
      window.localStorage.setItem("actividad",this.data.actividad);
      console.log(this.data.exito, this.data.actividad);
      if(this.data.exito == "Ya has realizado la actividad del día de hoy"){
        this.presentToast("No puedes realizar esta actividad hoy ¡Vuelve mañana!");
        this.gotomenu();
      }else{
        this.presentToast("¡Listo! Hemos terminado por hoy, te esperamos mañana");
        this.gotomenu();
      }
      this.viewCtrl.dismiss();
    });
 }
/**
 * navega a la pagina princial luego de 3 segundos
 */
gotomenu(){
  window.setTimeout(()=>this.navCtrl.setRoot(TabsPage),3000);
}

/**
    * @ignore
    */
 showLoader(){
  this.loading = this.loadingCtrl.create({
      content: 'Guardando...'
  });

  this.loading.present();
}

/**
    * @ignore
    */
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom',
    dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
