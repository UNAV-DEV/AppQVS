
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Habito1Page } from '../habito1/habito1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Habito2Page } from '../habito2/habito2';
import { Habito3Page } from '../habito3/habito3';
import { Habito4Page } from '../habito4/habito4';
import { Habito5Page } from '../habito5/habito5';
import { Habito6Page } from '../habito6/habito6';
import { Habito7Page } from '../habito7/habito7';
import { Habito8Page } from '../habito8/habito8';


/**
 * Modulo del menu de los habitos, se ve una vista general de los habitos y el progreso de ellos
 */

@IonicPage()
@Component({
  selector: 'page-menu-habitos',
  templateUrl: 'menu-habitos.html',
})
export class MenuHabitosPage {
  //variables
  habito1: any[] = [];
  habito2: any[] = [];
  habito3: any[] = [];
  habito4: any[] = [];
  habito5: any[] = [];
  habito6: any[] = [];
  habito7: any[] = [];
  habito8: any[] = [];
  sex:string;
  contadordias:any;
  fondo:string;
  loader:any;

  /**
   * Se obtiene el sexo del usuario y se rellenan los avances de los habitos segun los registros de la base de datos
   * @param navCtrl 
   * @param platform 
   * @param loadingCtrl 
   * @param navParams 
   * @param screenOrientation 
   */
  constructor(public navCtrl: NavController, platform:Platform,public loadingCtrl:LoadingController, private navParams : NavParams, private screenOrientation:ScreenOrientation) {
  
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
            this.fondo='./assets/imgs/fmenuhabitos.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/fmenuhabitosh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
    this.presentLoading();
    
    platform.ready().then(()=>{
        this.loader.dismiss();
    });
    


    console.log(window.localStorage.getItem("actividad"));
    
    
    //seleccionar sexo de las figuras
    if(window.localStorage.getItem('sexo')=='femenino'){
      this.sex = 'mujer';
    }else if(window.localStorage.getItem('sexo')=='masculino'){
      this.sex ='hombre';
    }
    //rellenar figuras deacuerdo a los dias realizados

    //habito1
    if(window.localStorage.getItem("actividad0") != "null"){
      
      let actividad:any = window.localStorage.getItem("actividad0");
      let auxactividad:any = 7-actividad;
      for(let i = 0; i < auxactividad; i++){
        this.habito1[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
      }
      for(let i =auxactividad; i<7; i++){
        this.habito1[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
      }
     
    }else{
      
      for(let i = 0; i < 7; i++){
        this.habito1[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
      }
    }

    //habito2
    if(window.localStorage.getItem("actividad1") != "null"){
      
      let actividad:any = window.localStorage.getItem("actividad1");
      let auxactividad:any = 7-actividad;
      for(let i = 0; i < auxactividad; i++){
        this.habito2[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
      }
      for(let i =auxactividad; i<7; i++){
        this.habito2[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
      }
     
    }else{
      
      for(let i = 0; i < 7; i++){
        this.habito2[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
      }
    }
    //habito3
      
    if(window.localStorage.getItem("actividad2") != "null"){
      
      let actividad:any = window.localStorage.getItem("actividad2");
      let auxactividad:any = 7-actividad;
      for(let i = 0; i < auxactividad; i++){
        this.habito3[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
      }
      for(let i =auxactividad; i<7; i++){
        this.habito3[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
      }
     
    }else{
      
      for(let i = 0; i < 7; i++){
        this.habito3[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
      }
    }

    //habito4

    if(window.localStorage.getItem("actividad3") != "null"){
      
      let actividad:any = window.localStorage.getItem("actividad3");
      let auxactividad:any = 7-actividad;
      for(let i = 0; i < auxactividad; i++){
        this.habito4[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
      }
      for(let i =auxactividad; i<7; i++){
        this.habito4[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
      }
     
    }else{
      
      for(let i = 0; i < 7; i++){
        this.habito4[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
      }
    }

    

   //habito 5
   if(window.localStorage.getItem("actividad4") != "null"){
      
    let actividad:any = window.localStorage.getItem("actividad4");
    let auxactividad:any = 7-actividad;
    for(let i = 0; i < auxactividad; i++){
      this.habito5[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
    }
    for(let i =auxactividad; i<7; i++){
      this.habito5[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
    }
   
  }else{
    
    for(let i = 0; i < 7; i++){
      this.habito5[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }
  }

  //habito 6
  if(window.localStorage.getItem("actividad5") != "null"){
      
    let actividad:any = window.localStorage.getItem("actividad5");
    let auxactividad:any = 7-actividad;
    for(let i = 0; i < auxactividad; i++){
      this.habito6[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
    }
    for(let i =auxactividad; i<7; i++){
      this.habito6[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
    }
   
  }else{
    
    for(let i = 0; i < 7; i++){
      this.habito6[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }
  }

  //habito 7
  if(window.localStorage.getItem("actividad6") != "null"){
      
    let actividad:any = window.localStorage.getItem("actividad6");
    let auxactividad:any = 7-actividad;
    for(let i = 0; i < auxactividad; i++){
      this.habito7[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
    }
    for(let i =auxactividad; i<7; i++){
      this.habito7[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
    }
   
  }else{
    
    for(let i = 0; i < 7; i++){
      this.habito7[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }
  }

  //habito 8
  if(window.localStorage.getItem("actividad7") != "null"){
      
    let actividad:any = window.localStorage.getItem("actividad7");
    let auxactividad:any = 7-actividad;
    for(let i = 0; i < auxactividad; i++){
      this.habito8[i] =  { titulo: "./assets/imgs/ico"+this.sex+"gris.png" }
    }
    for(let i =auxactividad; i<7; i++){
      this.habito8[i]= { titulo: "./assets/imgs/ico"+this.sex+"azul.png" }
    }
   
  }else{
    
    for(let i = 0; i < 7; i++){
      this.habito8[i]= { titulo: "./assets/imgs/ico"+this.sex+"gris.png" };
    }
  }
  }

  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fmenuhabitos.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fmenuhabitosh.jpg'
    }}

  presentLoading(){

    this.loader=this.loadingCtrl.create({
        content : 'Cargando...'
  
    });
    this.loader.present();
  }


  
 

/**
 * Navega al habito 1
 */
goToHabito1(){
  this.navCtrl.push(Habito1Page);
}

/**
 * Navega al habito 2
 */
goToHabito2(){
  this.navCtrl.push(Habito2Page);
}

/**
 * Navega al habito 3
 */
goToHabito3(){
  this.navCtrl.push(Habito3Page);
}

/**
 * Navega al habito 4
 */
goToHabito4(){
  this.navCtrl.push(Habito4Page);
}

/**
 * Navega al habito 5
 */
goToHabito5(){
  this.navCtrl.push(Habito5Page);
}

/**
 * Navega al habito 6
 */
goToHabito6(){
  this.navCtrl.push(Habito6Page);
}

/**
 * Navega al habito 7
 */
goToHabito7(){
  this.navCtrl.push(Habito7Page);
}

/**
 * Navega al habito 8
 */
goToHabito8(){
  this.navCtrl.push(Habito8Page);
}


}
