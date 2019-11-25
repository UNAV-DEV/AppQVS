import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
/**
 * Modulo de recuperacion de contrasena, pide el correo electronico y se envia un mail para la recuperacion 
 */
@IonicPage()
@Component({
  selector: 'page-recuperar-pass',
  templateUrl: 'recuperar-pass.html',
})
/**
 * se declaran los datos
 */
export class RecuperarPassPage {
  Userdata={"correoe":""};
  data:any;
  loading:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider, public loadingCtrl:LoadingController, 
    public toastCtrl:ToastController, public alertCtrl:AlertController) {
  }
/**
 * @ignore
 */
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarPassPage');
  }


  Recovery(){
    console.log(this.Userdata.correoe);
    this.showLoader();
    this.restProvider.recover(this.Userdata).then((result) => {
      
      this.data = result;
      this.loading.dismiss();
     
     console.log(this.Userdata.correoe);
     console.log(this.data.mensaje);
      if(this.data.mensaje=="exito"){
        this.presentAlert();
        
      }else{
        this.presentToast('Error: Email no esta registrado o no existe');
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
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
 * @ignore
 */
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Revisa tu correo',
    subTitle: 'Hemos enviado un link a tu correo para que cambies tu contraseña',
    buttons: [{
      text : 'OK',
      handler: ()=>{
        this.navCtrl.setRoot(LoginPage);
      }
    }]
  });
  alert.present();
}


/**
 * @ignore
 * @param msg mensaje que presenta el toast
 */
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 5000,
    position: 'bottom',
    dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
