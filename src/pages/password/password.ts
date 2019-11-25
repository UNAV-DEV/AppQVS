import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  userId:string;
  password:boolean=false;
  values:number;
  loading:any;
  Userdata={"newpass":"","id":"","registro":"cambiarpass"};
  data:any;
  constructor(public navCtrl: NavController, private restProvider:RestProvider, private _navParams: NavParams, public loadingCtrl:LoadingController, public toastCtrl:ToastController) {
    this.userId=this._navParams.get('id');
    this.Userdata.id=this.userId;
  }

  onKey(event: any) { // without type info
    this.values= event.target.selectionEnd;
    console.log(this.values);
    this.values >= 6 ? this.password=true:this.password=false;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  changePassword(){
    
    this.showLoader();
    if(this.password==true){
      this.restProvider.acepto(this.Userdata).then((result) => {
        
        this.data = result;
        this.loading.dismiss();
      
      console.log(this.data.mensaje);
        if(this.data.mensaje=="exito"){
          this.presentToast('Contraseña actualizada con exito');
          this.Userdata.id="";
          setTimeout(()=>{ this.navCtrl.setRoot(LoginPage); }, 2500);
        }else{
          this.presentToast('Error: Usuario no existe');
          setTimeout(()=>{ this.navCtrl.setRoot(LoginPage); }, 2500);
        }
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
    }else if(this.password==false){
      this.loading.dismiss();
      this.presentToast('Tu contraseña debe poseer minimo 6 caracteres');
    }
  }

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
