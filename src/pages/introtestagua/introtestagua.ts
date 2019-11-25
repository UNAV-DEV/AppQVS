import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { TestAguaPage } from '../test-agua/test-agua';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { TestActitudpositivaPage } from '../test-actitudpositiva/test-actitudpositiva';
import { TestBiencomerPage } from '../test-biencomer/test-biencomer';
import { TestActividadfisicaPage } from '../test-actividadfisica/test-actividadfisica';
import { TestDescansoadecuadoPage } from '../test-descansoadecuado/test-descansoadecuado';
import { TestAutocontrolPage } from '../test-autocontrol/test-autocontrol';
import { TestDesayunarmasPage } from '../test-desayunarmas/test-desayunarmas';
import { TestSerfelizPage } from '../test-serfeliz/test-serfeliz';

/**
 * Modulo de Portada de los test
 */

@IonicPage()
@Component({
  selector: 'page-introtestagua',
  templateUrl: 'introtestagua.html',
})
export class IntrotestaguaPage {
  loader:any;
  fondo:string;
  parametros:any;
  titulo:string;
  textos:any []=[];
  textos2: any []=[];
  txt1:string;
  txt2:string;
  color:string;

  /**
   * se obtiene el test correspondiente, se asignan los textos y se define el diseno
   * @param navCtrl 
   * @param loadingCtrl 
   * @param platform 
   * @param screenOrientation 
   * @param navParams 
   */
  constructor(public navCtrl: NavController, public loadingCtrl:LoadingController, platform:Platform ,private screenOrientation:ScreenOrientation, public navParams:NavParams) {
    //OBTENEMOS EL NUMERO DE TEST CONFORME AL HABITO
    this.parametros=this.navParams.data;
    
    //SELECCIONAMOS LA IMAGEN DE TITULO
    this.titulo='./assets/imgs/habito'+this.parametros.numero+'/icolateral.png';

    //ARREGLOS DE LOS TEXTOS
    this.textos=[{txt:''},
      {txt:'Te invitamos a responder con sinceridad las siguientes preguntas. Te permitirá conocer tus hábitos y conductas cotidianas y saber si tienes un estilo de vida saludable.', color:'black'},
      {color:'white'},
      {color:'white'},
      {color:'white'},
      {color:'white'},
      {color:'white'},
      {color:'white'},
      {color:'white'}
      
    ];
    
    this.textos2=[{txt:''},
      {txt:'No hay respuestas correctas o incorrectas, estas serán confidenciales y la opinión que expreses será muy valiosaen la recolección de la información.'}];



      //SELECCIONAMOS LOS TEXTOS
      this.txt1=this.textos[1].txt;
      this.txt2=this.textos2[1].txt;
      this.color=this.textos[this.parametros.numero*1].color;

    
     
     
      this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/habito'+ this.parametros.numero +'/fportadatest.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/habito'+this.parametros.numero+'/fportadatesth.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
   
   this.presentLoading();
   platform.ready().then(()=>{
     this.loader.dismiss()});




    this.goToTestAgua1();
    
  }
/**
 * Navega al habito correspondiente
 */
goToTestAgua1(){
  switch (this.parametros.numero*1) {
    case 1:
           window.setTimeout(()=>this.navCtrl.push(TestAguaPage),5000);
      break;

      case 2:
      window.setTimeout(()=>this.navCtrl.push(TestActitudpositivaPage),5000);

      break;
  
      case 3:
      window.setTimeout(()=>this.navCtrl.push(TestBiencomerPage),5000);

      break;

      case 4:
      window.setTimeout(()=>this.navCtrl.push(TestActividadfisicaPage),5000);

      break;

      case 5:
      window.setTimeout(()=>this.navCtrl.push(TestDescansoadecuadoPage),5000);

      break;

      case 6:
      window.setTimeout(()=>this.navCtrl.push(TestAutocontrolPage),5000);

      break;

      case 7:
      window.setTimeout(()=>this.navCtrl.push(TestDesayunarmasPage),5000);

      break;

      case 8:
      window.setTimeout(()=>this.navCtrl.push(TestSerfelizPage),5000);

      break;

    default:
      break;
  }
 
}
/**
 * @ignore
 */
ionViewDidLoad(screenOrientation:ScreenOrientation) {

  this.parametros=this.navParams.data;

  //this.titulo='./assets/imgs/habito'+this.parametros+'/icolateral.png';
  if (this.screenOrientation.type =='portrait-primary') {
    this.fondo='./assets/imgs/habito'+ this.parametros.numero +'/fportadatest.jpg'
  }else if (this.screenOrientation.type=='landscape-primary') {
    this.fondo='./assets/imgs/habito'+this.parametros.numero+'/fportadatesth.jpg'
  }
    console.log('ionViewDidLoad IntrotestaguaPage');
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
}
