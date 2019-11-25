import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, App, ModalController, ModalOptions, Modal } from 'ionic-angular';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { LoginPage } from '../login/login';
import { MenuHabitosPage } from '../menu-habitos/menu-habitos';
import { RestProvider } from '../../providers/rest/rest';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { InstruccionesPage } from '../instrucciones/instrucciones';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { InfoPage } from '../info/info';

/**
 * Modulo del menu principal, se muestra despues del mensaje de bienvenida
 */

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {
  //variables
  loader:any;
  userData ={"id":"","registro":"consultaAct"};
  userData2={'id':"",'registro':'borratoken'};
  data:any;
  fondo:string;
  tab1Root = InstruccionesPage;
  tab2Root = MenuHabitosPage;
  tab3Root = EvaluacionPage;
  tab4Root = HomePage;
  tab5Root = MenuPrincipalPage;
/**
 * @ignore
 * @param navCtrl 
 * @param platform 
 * @param loadingCtrl 
 * @param restProvider 
 * @param screenOrientation 
 * @param app 
 */
  constructor(public navCtrl: NavController, public statusBar:StatusBar, platform:Platform, public loadingCtrl:LoadingController, public restProvider: RestProvider, private screenOrientation:ScreenOrientation, private app:App, private Modal:ModalController) {
    statusBar.styleLightContent();
    window.localStorage.setItem('habito','');

    this.screenOrientation.unlock();
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary'|| this.screenOrientation.type=='portrait-secondary') {
            this.fondo='./assets/imgs/fmenuprincipal.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/fmenuprincipalh.jpg'
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
 * Obtiene las actividades realizadas y las guarda en una variable localStorage
 * @param screenOrientation 
 */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fmenuprincipal.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fmenuprincipalh.jpg'
    }
    console.log(this.screenOrientation.type);

    console.log('ionViewDidLoad MenuPrincipalPage');
    this.userData.id=window.localStorage.getItem("id");
    this.restProvider.acepto(this.userData).then((result) => {
      this.data = result;
      console.log(this.data);
      console.log( Object.keys( this.data ).length ) ;
      for(let i=0; i < Object.keys(this.data).length; i++){
        
        window.localStorage.setItem("actividad"+i,this.data[i].actividad);
        console.log('actividad ',window.localStorage.getItem('actividad'+i));

      }
      window.localStorage.setItem("actividad",this.data.actividad);
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Navega al modulo de instrucciones mediante el modulo Tabs
   */
  goToInstrucciones(){
    this.navCtrl.parent.select(0);
  }

  /**
   * Navega al modulo de evaluacion mediante el modulo tabs
   */
  goToEvaluacion(){
    this.navCtrl.parent.select(3);
  }

  /**
   * Navega al modulo de comunidad, actualmente se presenta el facebook del QVS
   */
  goToComunidad(){
    this.navCtrl.parent.select(4);
  }

  /**
   * cierra la sesion, borra el token y envia al modulo de login
   */
  cerrarsesion(){
    this.userData2.id=window.localStorage.getItem('id');    
    this.restProvider.acepto(this.userData2).then((result)=>{
      window.localStorage.clear();
      this.app.getRootNav().setRoot(LoginPage);
     
    });
   

  
  }

/**
 * Creal el modal de acerda de
 */
  ModalInfo(){
    
    let InfoOpciones : ModalOptions = {
      //mostrar fondo model
       showBackdrop:true
     };
      let reflexionar:Modal = this.Modal.create(InfoPage,InfoOpciones);//PRESENTAR MODAL y envio datos de actividad
      reflexionar.present();
  }

  goToModalInfo(){
    this.ModalInfo();
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
   * Navega al modulo de menu de habitos mediante el modulo tabs
   */
goToHabitos(){
  this.navCtrl.parent.select(1);
}

}
