import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Content } from 'ionic-angular';
import { ResultadoImcPage } from '../resultado-imc/resultado-imc';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Modulo de modal IMC, recibe los datos para el calculo de IMC
 */

@IonicPage()
@Component({
  selector: 'page-modal-imc',
  templateUrl: 'modal-imc.html',
})
export class ModalImcPage {
  //variables
  IMC:FormGroup;
  public loader:any;
  
/**
 * se declara el formulario y se definen las validaciones 
 * @param navCtrl 
 * @param navParams 
 * @param view 
 * @param formBuilder libreria de formularios
 * @param loadingCtrl 
 * @param cdRef detector de cambios en un componente
 */
  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController, private formBuilder:FormBuilder , public loadingCtrl:LoadingController, public cdRef:ChangeDetectorRef) {
  this.IMC=this.formBuilder.group({
        peso:['', [Validators.required, Validators.minLength(2)]],
        talla: ['', [Validators.required, Validators.minLength(1)]],
        cintura: ['', [Validators.required, Validators.minLength(2)]],
        sexo: ['', [Validators.required, Validators.minLength(1)]]
  });
  
  }
 
/**
 * realiza el calculo del IMC
 */
  calcularIMC(){
    let condicion:string;
    let riesgo:string;
    let peso:any=this.IMC.value.peso;
    let talla:any=this.IMC.value.talla;
    let cintura:any=this.IMC.value.cintura;
    let sexo=this.IMC.value.sexo;

    //calcular imc
    talla = talla * talla;
    let resultadoIMC:any=peso/talla;
 

    //calcular condicion IMC
    if (resultadoIMC<18.5){
      condicion="BAJO PESO";
    } else if(resultadoIMC>=18.5 && resultadoIMC <= 24.99){
      condicion="PESO NORMAL";
    } else if(resultadoIMC>=25 && resultadoIMC<=29.99){
      condicion="SOBREPESO";
    }else if(resultadoIMC>=30 && resultadoIMC<=34.99){
      condicion="OBESIDAD MODERADA";
    }else if(resultadoIMC>=35 && resultadoIMC<=39.99){
      condicion="OBESIDAD SEVERA";
    }else if(resultadoIMC>=40){
      condicion="OBESIDAD MÓRBIDA";
    }

    //calcular riesgo segun medida de cintura y sexo
    if (sexo=="masculino" && cintura<90){
      riesgo="RIESGO BAJO";
    } else if(sexo=="masculino" && cintura>=90 && cintura <= 102){
      riesgo="RIESGO MODERADO";
    } else if(sexo=="masculino" && cintura>102){
      riesgo="RIESGO ALTO";
    }

    if (sexo=="femenino" && cintura<80){
      riesgo="RIESGO BAJO";
    } else if(sexo=="femenino" && cintura>=80 && cintura <= 88){
      riesgo="RIESGO MODERADO";
    } else if(sexo=="femenino" && cintura>88){
      riesgo="RIESGO ALTO";
    }

    //guardo las variables en variables del sistema
    window.localStorage.setItem('imc',resultadoIMC);
    window.localStorage.setItem('condicion', condicion);
    window.localStorage.setItem('riesgo',riesgo);
    window.localStorage.setItem('cintura',cintura);
    this.goToResultadoIMC();
  }

  /**
   * Navega hacia el modulo de resultado
   */
  goToResultadoIMC(){
      this.navCtrl.push(ResultadoImcPage);
  }
/**
 * Close
 */
  presentloading(){
    this.loader= this.loadingCtrl.create({
      content : 'Cargando...'
    })
    this.loader.present();
  }
/**
 * Cierra el modal
 */
  closeModal(){
    this.view.dismiss();
  }
/**
 * @ignore
 */
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalImcPage');
  }


/**
 * Detecta y limita el numero de caracteres en el componente
 * @param value componente de formulario
 */
  maxPeso(value){
    console.log(this.IMC.value.peso);
    //manually launch change detection
    this.cdRef.detectChanges();
    
    this.IMC.value.peso = value.length > 5 ? value.substring(0,5) : value;
  }
  /**
 * Detecta y limita el numero de caracteres en el componente
 * @param value componente de formulario
 */
  maxTalla(value){
    //manually launch change detection
    this.cdRef.detectChanges();
    this.IMC.value.talla = value.length > 4 ? value.substring(0,4) : value;
  }
/**
 * Detecta y limita el numero de caracteres en el componente
 * @param value componente de formulario
 */
  maxCintura(value){
    //manually launch change detection
    this.cdRef.detectChanges();
    this.IMC.value.cintura= value.length > 5 ? value.substring(0,5) : value;
  }
}
