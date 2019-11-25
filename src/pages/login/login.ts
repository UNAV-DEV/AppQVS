import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, ToastController, ViewController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { SaludoPage } from '../saludo/saludo';
import { RegistroPage } from '../registro/registro';
import { RestProvider } from '../../providers/rest/rest';
import { OneSignal } from '@ionic-native/onesignal';
import { RecuperarPassPage } from '../recuperar-pass/recuperar-pass';

/**
 * Modulo de Login, acceso a la aplicacion
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //variables
  data : any;
  token : string;
  userData = {"password": "", "correo": "", "token":""};
  loading: any;

  /**
   * Obtiene el token del dispositivo para las notificaciones push
   * @param navCtrl 
   * @param restprovider 
   * @param loadingCtrl 
   * @param toastCtrl 
   * @param screenOrientation libreira de Orientacion de pantalla
   * @param oneSignal  libreria del servidor de notificaciones push
   */
  constructor(public navCtrl: NavController, public restprovider:RestProvider, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private screenOrientation: ScreenOrientation, private oneSignal:OneSignal) {
      this.oneSignal.getIds().then(res=>{
        this.token=res.userId;
        console.log('este es el token '+ this.token);
      });
      this.screenOrientation.onChange().subscribe(
        () => {
            console.log(this.screenOrientation.type);
        }
     );
  }
 
/**
 * Envia las credenciales de acceso al servidor mediantel el archivo rest y obtiene respuesta
 */
  doLogin() {
    this.showLoader();
    this.oneSignal.getIds().then((res)=>{
      this.token=res.userId;
    } );
   console.log(this.userData);
    this.userData.token=this.token;
    this.restprovider.login(this.userData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      
      window.localStorage.setItem('id',this.data.id);
      window.localStorage.setItem('nombre', this.data.nombre);
      window.localStorage.setItem('sexo', this.data.sexo);
      window.localStorage.setItem('correo', this.data.correo);
      window.localStorage.setItem('password', this.data.password);
     
      if(localStorage.getItem('correo')==this.userData.correo && localStorage.getItem('password')==this.userData.password){
        this.navCtrl.setRoot(SaludoPage);
        window.localStorage.setItem('token',this.data.token);
        console.log(this.data.token);
      }else{
        this.presentToast('Error: Correo/Usuario incorrectos');
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  
/**
 * Navega al modulo de registro
 */
goRegistro(){
this.navCtrl.push(RegistroPage);  

}

/**
 * @ignore
 */
 ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  
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
   * @param msg mensaje que presenta el toast
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
/**
 * Navega al modulo de recuperacion de contrasena
 */
  goToRecovery(){
    this.navCtrl.push(RecuperarPassPage);
  }

}
