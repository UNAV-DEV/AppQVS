import { Component } from '@angular/core';
import { Platform, AlertController, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { SlidePage } from '../pages/slide/slide';
import {timer} from 'rxjs/observable/timer';
//import { FCM, NotificationData } from '@ionic-native/fcm';
import { OneSignal } from '@ionic-native/onesignal';
import { RestProvider } from '../providers/rest/rest';
import { RsaludPage } from '../pages/rsalud/rsalud';
import { Deeplinks } from '@ionic-native/deeplinks';
import { PasswordPage } from '../pages/password/password';
import {ViewChild} from '@angular/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild (Nav) navChild:Nav;
  rootPage:any;
  showSplash = true;
  OneSignalData:any={"app_id":"","device_type":""};
  userData:any={'idOneSignal':'','id':'','registro':'sesion'};
  /**
   * Revisa si hay una sesion abierta en el dispositivo, si la hay envia al modulo de tabs, sino no la hay envia al modulo de slide
   * @param platform 
   * @param statusBar 
   * @param splashScreen 
   * @param storage 
   * @param alertCtrl 
   * @param oneSignal libreria de mensajeria push Onesignal
   * @param restProvider archivo REST
   */
  constructor( private deeplinks:Deeplinks,public platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen, public storage:Storage, private alertCtrl : AlertController, private oneSignal:OneSignal, public restProvider:RestProvider) {
  
    this.suscribe();
    this.userData.idOneSignal=window.localStorage.getItem('idOS');
    this.userData.id=window.localStorage.getItem('id');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      console.log('datos'+ this.userData.id + this.userData.idOneSignal);
      this.restProvider.acepto(this.userData).then((result)=>{
        let datos:any={};
       datos =result;
       
        window.localStorage.setItem("token",datos.token);
        if (window.localStorage.getItem("token") == window.localStorage.getItem('idOS')) {
          this.rootPage =TabsPage;
         
      } else {
        this.storage.get('slideshow').then((result) => {
          
                 if(result){
                   this.rootPage = SlidePage;
                   
                 } else {
                   this.rootPage = SlidePage;
                   this.storage.set('slideshow', true);
                 }
          
               });
      }
      });

      

      statusBar.styleLightContent();
    statusBar.backgroundColorByHexString('#780045');
      splashScreen.hide();
     

      
      
      this.handlerNotifications();
      timer(3000).subscribe(()=> this.showSplash =false)
    });

    
  }

//enviamos un post a OneSignal para registrar nuestro dispositivo
/**
 * envia un post a Onesignal para suscribir el dispositivo 
 */
private suscribe(){
  this.OneSignalData.app_id="970df90b-ed60-46a4-b709-08412e00735c";
  if(this.platform.is('ios')){
    this.OneSignalData.device_type="0";
  }else if(this.platform.is('android')){
    this.OneSignalData.device_type="1";
  }
  this.restProvider.oneSignalSuscribe(this.OneSignalData).then((res)=>{
    this.oneSignal.getIds().then((result)=>{
      console.log(result.userId);
      window.localStorage.setItem('idOS',result.userId);
    });


  });
}

/**
 * Rutas de enlace profundo para recuperacion de contrasena mediante URL
 */
   
ngAfterViewInit() {
  this.platform.ready().then(() => {
    /*
    IonicDeeplink.route({
      '/about-us': AboutPage,
      '/universal-links-test': AboutPage,
      '/products/:productId': ProductPage
    }, function(match) {
      // Handle the route manually
    }, function(nomatch) {
      // No match
    })
    */

    // Convenience to route with a given nav
    this.deeplinks.routeWithNavController(this.navChild, {
      '/password/:id': PasswordPage,
    
    }).subscribe((match) => {
      console.log(match.$args);
      console.log('Successfully routed', match);
    }, (nomatch) => {
      console.warn('Unmatched Route', nomatch);
    });
  })
}

/**
 * Muestra las notificiaciones recibidas en la app e inicia el Onesignal, con la clave de de nuestra apliacion de onesignal y la clave de Firebase
 */
  private handlerNotifications(){
    this.oneSignal.startInit('970df90b-ed60-46a4-b709-08412e00735c', '948598158914');
    this.oneSignal.getIds().then(res=>{
      console.log(res.userId);
    });
  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
  this.oneSignal.handleNotificationOpened()
  .subscribe(jsonData => {
    let alert = this.alertCtrl.create({
      title: jsonData.notification.payload.title,
      subTitle: jsonData.notification.payload.body,
      buttons: ['OK']
    });
    alert.present();
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  });
  this.oneSignal.endInit();
      
  }
}
