import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Platform, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { IntrotestaguaPage } from '../introtestagua/introtestagua';
import { Actividadhbt1Page } from '../actividadhbt1/actividadhbt1';
import { TestActitudpositivaPage } from '../test-actitudpositiva/test-actitudpositiva';

/**
 * Modulo de habito 2, se muestra el menu de las actividades
 */

@IonicPage()
@Component({
  selector: 'page-habito2',
  templateUrl: 'habito2.html',
})
export class Habito2Page {
  //variables
  loader: any;
  dia:any;
  loading: any;
  data: any;
  estado: boolean=false;
  fondo:string;
  userData = { "id": "", "id_habito": "2", "registro": "actualizafecha" };

  /**
    * @ignore
    */
  constructor(public navCtrl: NavController, public platform: Platform, public restprovider: RestProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private screenOrientation:ScreenOrientation) {
      window.localStorage.setItem('habito','2');
      this.screenOrientation.onChange().subscribe(
        () => {
            
            if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
              this.fondo='./assets/imgs/habito2/fmenuhabito.jpg'
            }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
              this.fondo='./assets/imgs/habito2/fmenuhabitoh.jpg'
            }
            console.log(this.screenOrientation.type);
        }
     );


  }

/**
    * @ignore
    */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/habito2/fmenuhabito.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/habito2/fmenuhabitoh.jpg'
    }
    console.log('ionViewDidLoad Habito2Page');

  }
  
  /**
   * Consulta status del usuario si es nuevo o si ya ha entrado  y actualiza la fecha de entrada a la aplicacion y muestra el estado para lanzar tooltip,
   *  muestra toast si ya ha realizado la actividad del dia de hoy
   */
  ionViewDidEnter() {
    this.userData.id = window.localStorage.getItem("id");
    this.restprovider.registrotestagua(this.userData).then((result) => {

      this.data = result;
      window.sessionStorage.setItem("consulta", this.data.consulta);
      console.log(this.data);
      window.localStorage.setItem("actividad", this.data.actividad);
      this.dia=this.data.actividad;
      console.log(window.localStorage.getItem("actividad"));
      if (this.data.consulta == '¡Ya haz realizado la actividad del día de hoy!') {
        this.estado = false
        this.presentToast(this.data.consulta);

      } else if (this.data.consulta == 'nuevo') {
        this.estado = true;
        console.log(this.data.consulta);
        

      } else {
        this.estado = false
      }

    }, (err) => {

      this.presentToast(err);
    });

  }
/**
    * @ignore
    */
  ionViewWillLeave() {
    this.estado = false;
  }
/**
    * @ignore
    */
  ionViewWillenter(platform: Platform) {
    this.estado = false;
    this.presentLoading();
    platform.ready().then(() => {
      this.loader.dismiss();
    });

  }
/**
    * @ignore
    */
  presentLoading() {

    this.loader = this.loadingCtrl.create({
      content: 'Cargando...'

    });
    this.loader.present();
  }
  /**
   * Navega el modulo del test correspondiente y envia el numero del test
   */
  goToTest() {
    let parametros={
      numero : 2
    };

    this.navCtrl.push(IntrotestaguaPage, parametros);

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
/**
    * @ignore
    */
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Guardando...'
    });

    this.loading.present();
  }
  //asignar actividades a los botones actividades

  /**
   * Asigna actividad y revisa si esta disponible 
   */
  goToActividad1() {
    
    console.log(window.sessionStorage.getItem('consulta'));
    if(window.sessionStorage.getItem('consulta')=='nuevo'){
      this.presentToast('Debes realizar el test');
    }else{this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 0 });
  
    }

  }
  /**
   * Asigna actividad y revisa si esta disponible 
   */
  goToActividad2() {
    if(this.dia>=1 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 1 });
    }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  /**
   * Asigna actividad y revisa si esta disponible 
   */
  goToActividad3() {
    if(this.dia >=2 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 2 });
    }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  /**
   * Asigna actividad y revisa si esta disponible 
    */
  goToActividad4() {
    if(this.dia >=3 ){
      this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 3, "consulta" : this.data.consulta });
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  /**
   * Asigna actividad y revisa si esta disponible 
   */
  goToActividad5() {
    if(this.dia >=4 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 4 });
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  /**
   * Asigna actividad y revisa si esta disponible 
   */
  goToActividad6() {
    if(this.dia >=5 ){
    
      this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 5 });
    
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
  /**
   * Asigna actividad y revisa si esta disponible 
   */
  goToActividad7() {
    if(this.dia >=6 ){
    this.navCtrl.push(Actividadhbt1Page, { 'auxdia': 6 });
     }else{
      this.presentToast("Todavia no puedes acceder a esta actividad");
    }
  }
/**
 * @ignore
 */
  ionViewWillUnload(){
    this.estado = false;
  }


}
