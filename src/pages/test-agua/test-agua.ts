import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController, Platform  } from 'ionic-angular';
import { TestPage } from '../test/test';
import { RtestaguaPage } from '../rtestagua/rtestagua';
import { RestProvider } from '../../providers/rest/rest';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Modulo de test de Beber agua natural, contiene el test de este habito
 */



@IonicPage()
@Component({
   
  selector: 'page-test-agua',
  templateUrl: 'test-agua.html',
})


export class TestAguaPage {
  //variables
  array:string []=["1-	¿Reemplazo el agua natural por otros líquidos, ya sea refrescos o jugos, cuando tengo sed?", 
  "2-	¿Bebo dos vasos de agua natural al levantarme, antes de desayunar?",
  "3-	¿Bebo dos vasos de agua natural 30 minutos antes de cada comida?",
  "4-	¿Bebo dos vasos de agua natural 30 minutos antes de cada cena?",
  "5-	¿Bebo agua cuando estoy realizando ejercicio físico?",
  "6-	¿Bebo agua natural aun sin tener sed?",
  "7- ¿Bebo un vaso de agua natural una hora antes de dormir?",
  "8-	¿Beber agua natural forma parte de mi rutina diaria?",
  "9-	¿Consumo al menos ocho vasos de agua natural al día?"


];

imagen:string []=["./assets/imgs/agua1y6.png","./assets/imgs/agua2y7.png","./assets/imgs/agua3y4.png","./assets/imgs/agua3y4.png","./assets/imgs/agua5.png","./assets/imgs/agua1y6.png","./assets/imgs/agua2y7.png","./assets/imgs/agua8.png","./assets/imgs/agua9.png"];
  i:any=0;
  pregunta:string=this.array[this.i];
  imagenagua:string=this.imagen[this.i];
  resultado:any=0;
  resultado2:any=0;
  resultado3:any=0;
  resultadotest:any=0;
  fechaActual = new Date();
  mensaje:any;
  loading:any;
  data:any;
  test={};
  datosTest= {"id" : "", "id_habito" : 1, "resultado" : "", "fecha":this.fechaActual, "registro":"test1"};
  loader:any;
  fondo:string;
  /**
   * @ignore
   * @param navCtrl 
   * @param platform 
   * @param restprovider 
   * @param loadingCtrl 
   * @param toastCtrl 
   * @param screenOrientation 
   */
  constructor(public navCtrl: NavController, platform:Platform,  public restprovider:RestProvider, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private screenOrientation:ScreenOrientation) {
      console.log('id '+ window.localStorage.getItem('id'));
      console.log('token '+window.localStorage.getItem('token'))

      this.screenOrientation.onChange().subscribe(
        () => {
            
            if (this.screenOrientation.type =='portrait-primary') {
              this.fondo='./assets/imgs/ftestagua.jpg'
            }else if (this.screenOrientation.type=='landscape-primary') {
              this.fondo='./assets/imgs/ftestaguah.jpg'
            }
            console.log(this.screenOrientation.type);
        }
     );
    /*  this.presentLoading();
/*platform.ready().then(()=>{
          this.loader.dismiss();
      });*/
     
  }
/**
 * metodo asignado al boton No del test, suma puntos al acumulado para el calculo del resultado 
 */
  No(){
  console.log(this.fechaActual);
    if(this.i ==0){
      this.resultado=this.resultado+5;
    }else{this.resultado=this.resultado+1;}
    this.i=this.i+1;
    this.pregunta=this.array[this.i];
    this.imagenagua=this.imagen[this.i];
  if(this.i ==9){
    this.goToTest();
  }
  }
  /**
 * metodo asignado al boton Rara vez del test, suma puntos al acumulado para el calculo del resultado 
 */
  Rara(){
   
      if(this.i ==0){
        this.resultado=this.resultado+4;
      }else{this.resultado=this.resultado+2;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      if(this.i ==9){
        this.goToTest();
      }
  }
/**
 * metodo asignado al boton Aveces del test, suma puntos al acumulado para el calculo del resultado 
 */
  Aveces(){
   
      if(this.i ==0){
        this.resultado=this.resultado+3;
      }else{this.resultado=this.resultado+3;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      if(this.i ==9){
        this.goToTest();
      }
  }
/**
 * metodo asignado al boton Frecuentemente del test, suma puntos al acumulado para el calculo del resultado 
 */
  Frecuentemente(){
   
      if(this.i ==0){
        this.resultado=this.resultado+2;
      }else{this.resultado=this.resultado+4;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      if(this.i ==9){
        this.goToTest();
      }
  }
/**
 * metodo asignado al boton Si del test, suma puntos al acumulado para el calculo del resultado 
 */
  Si(){
   
      if(this.i ==0){
        this.resultado=this.resultado+1;
      }else{this.resultado=this.resultado+5;}
      this.i=this.i+1;
      this.pregunta=this.array[this.i];
      this.imagenagua=this.imagen[this.i];
      
      if(this.i ==9){
        this.goToTest();
      }
    }
 /**
     * Calcula el resultado, manda a llamar al metodo para registrar en la base de datos, navega al modulo de resultado del test con los datos obtenidos
     */
  goToTest(){
    //this.navCtrl.push(TestPage);
   
   this.datosTest.id=window.localStorage.getItem("id");
    
    this.resultado=this.resultado-this.i;
    this.resultado2=(this.i*5)-this.i;
    this.resultado3=(this.resultado/this.resultado2);
    this.resultadotest=this.resultado3*100;
    window.localStorage.setItem('rtestagua',this.resultadotest);
    this.datosTest.resultado=this.resultadotest;
    console.log('datos del test '+this.datosTest);
    this.registrartest();

    if(this.resultadotest >= 91){
      this.test= { test:"Beber Agua Natural",
        resultado:"¡Excelente!",
         contenido:'¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito de "Beber Agua Natural" te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).',
         color:"#185417"};
     }else  if(this.resultadotest < 91 && this.resultadotest >=81){
       this.test={test:"Beber Agua Natural",
         resultado:"¡Muy Bueno!",
       contenido:'¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de "Beber Agua Natural" te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual). ',
       color:"#458f31"};
     }else  if(this.resultadotest < 81 && this.resultadotest >=71){
       this.test={test:"Beber Agua Natural",
         resultado:"¡Bueno!",
       contenido:'¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito de "Beber Agua Natural" te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).',
       color:"#e1c206"};
     }else  if(this.resultadotest < 71 && this.resultadotest >=61){
       this.test={test:"Beber Agua Natural",
         resultado:"¡Malo!",
       contenido:'Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de "Beber Agua Natural" te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).',
       color:"#d54b00"};
     }else if(this.resultadotest < 61 ){
       this.test={test:"Beber Agua Natural",
         resultado:"¡Muy Malo!",
       contenido:'¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de "Beber Agua Natural" te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).',
       color:"#c40404"};
     }
      
      this.navCtrl.setRoot(EvaluacionPage);
      this.navCtrl.push(RtestaguaPage, this.test);
   
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

//registro resultados del test
/**
 * Registra el test mediante el archivo REST
 */
  registrartest(){
    console.log(this.datosTest);
    this.showLoader();
    this.restprovider.registrotestagua(this.datosTest).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.mensaje = this.data.exito;
      let men = this.data.mensaje;
      console.log(men);
      console.log(this.mensaje);
      console.log(window.localStorage.getItem('id'));
      if(this.mensaje=="Registro exitoso"){
        console.log(this.mensaje);
        this.presentToast(this.mensaje);
      }else if(this.mensaje=="POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS"){
        console.log(this.mensaje);
        this.presentToast(this.mensaje);
      } 
     
    }, (err) => {
      console.log(this.mensaje);
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  /**
 * @ignore
 */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
      this.fondo='./assets/imgs/ftestagua.jpg'
    }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/ftestaguah.jpg'
    }
    console.log(this.screenOrientation.type);
    console.log('ionViewDidLoad TestAguaPage');
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

