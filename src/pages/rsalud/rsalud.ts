import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { EvaluacionPage } from '../evaluacion/evaluacion';

/**
 * Modulo Resultado Salud, muestra los resultados del estado de salud de acuerdo  a los datos ingresados
 */

@IonicPage()
@Component({
  selector: 'page-rsalud',
  templateUrl: 'rsalud.html',
})
export class RsaludPage {
  //variables
  sexo:string;
  colesterol:number;
  LDL:number;
  HDL:number;
  trigliceridos:number;
  glucosa:number;
  presion1:number;
  presion2:number;
  fondo:string;
  RColesterol={nivel:'', txt:'',riesgo:'', recomendacion:'', color:''};
  RLDL={nivel:'', txt:'',riesgo:'', recomendacion:'', color:''};
  RHDL={nivel:'', txt:'',riesgo:'', recomendacion:'', color:''};
  RTrigliceridos={nivel:'', txt:'',riesgo:'', recomendacion:'', color:''};
  RGlucosa={nivel:'',recomendacion:'', color:''};
  RPresion={nivel:'', recomendacion:'', color:''};
  parametros;
  /**
   * 
   * @param navCtrl 
   * @param navParams 
   * @param screenOrientation 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation:ScreenOrientation) {

  this.parametros=this.navParams.data;
  this.sexo=this.parametros.sexo;
  this.colesterol=this.parametros.CT;
  this.LDL=this.parametros.CLDL;
  this.HDL=this.parametros.CHDL;
  this.trigliceridos=this.parametros.trigliceridos;
  this.glucosa=this.parametros.glucosa;
  this.presion1=this.parametros.presion1;
  this.parametros=this.parametros.presion2;

   


//COLESTEROL TOTAL RESULTADOS

    if(this.colesterol<=200 && this.colesterol>0){
      this.RColesterol.nivel='DESEABLE';
      this.RColesterol.txt='Este es el nivel que se recomienda tener para';
      this.RColesterol.riesgo='ESTAR SALUDABLE.';
      this.RColesterol.recomendacion='Un estilo de vida saludable te ayuda a mantener los niveles recomendables de colesterol. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
      this.RColesterol.color="#1ca905";
    }else if(this.colesterol>=201 && this.colesterol<=239){
      this.RColesterol.nivel='ELEVADO';
      this.RColesterol.txt='Este nivel está en el';
      this.RColesterol.riesgo='LÍMITE DE RIESGO';
      this.RColesterol.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RColesterol.color='#f1592a';
    }else if(this.colesterol>=40){
      this.RColesterol.nivel='ALTO';
      this.RColesterol.txt='Este nivel representa';
      this.RColesterol.riesgo='RIESGO ALTO';
      this.RColesterol.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RColesterol.color='#e90000';
    }else{this.RColesterol.nivel='DATOS INCORRECTOS O FALTANTES'}


//LDL RESULTADOS

    if(this.LDL<=100 && this.LDL>0){
      this.RLDL.nivel='DESEABLE';
      this.RLDL.txt='Este es el';
      this.RLDL.riesgo='NIVEL ÓPTIMO';
      this.RLDL.recomendacion='que se recomienda tener para estar saludable. Un estilo de vida saludable te ayuda a mantener bajos los niveles de colesterol malo. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
      this.RLDL.color='#1ca905';
    }else if(this.LDL>=101 && this.LDL<=130){
      this.RLDL.nivel='ACEPTABLE';
      this.RLDL.txt='Este nivel está';
      this.RLDL.riesgo='CERCA DE UN NIVEL ÓPTIMO,';
      this.RLDL.recomendacion='te aconsejamos reducirlo a un nivel deseable. Un estilo de vida saludable te ayuda a mantener bajos los niveles de colesterol malo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RLDL.color='#ffdb00';
    }else if(this.LDL>=131 && this.LDL<=160){
      this.RLDL.nivel='ELEVADO';
      this.RLDL.txt='Este nivel está en el';
      this.RLDL.riesgo='LÍMITE DE RIESGO';
      this.RLDL.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RLDL.color='#f1592a';
    }else if(this.LDL>=161 && this.LDL<=190){
      this.RLDL.nivel='ALTO';
      this.RLDL.txt='Este nivel representa';
      this.RLDL.riesgo='RIESGO ALTO';
      this.RLDL.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RLDL.color='#e90000';
    }else if(this.LDL>=191){
      this.RLDL.nivel='MUY ALTO';
      this.RLDL.txt='Este nivel está en el';
      this.RLDL.riesgo='RIESGO MUY ALTO';
      this.RLDL.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella  calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RLDL.color='#b10012';
    }else{this.RLDL.nivel='DATOS INCORRECTOS O FALTANTES'}



  //HDL RESULTADOS
  if(this.sexo=='femenino'){
    if(this.HDL>0 && this.HDL<=54){
      this.RHDL.nivel='BAJO';
      this.RHDL.txt='Mantener el colesterol bueno (HDL) en niveles bajos representa un';
      this.RHDL.riesgo='RIESGO MAYOR';
      this.RHDL.recomendacion='te aconsejamos aumentarlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RHDL.color='#e90000';
    }else if(this.HDL>=55){
      this.RHDL.nivel='NORMAL';
      this.RHDL.txt='Un estilo de vida saludable te ayuda a mantener el nivel  de colesterol bueno dentro de los parámetros normales,  esto es lo';
      this.RHDL.riesgo='MEJOR PARA TU SALUD';
      this.RHDL.recomendacion='¡Consulta con un profesional de la salud! para que pueda  brindarte más consejos.';
      this.RHDL.color='#1ca905';
    }else{this.RHDL.nivel='DATOS INCORRECTOS O FALTANTES'}
  }else if(this.sexo=='masculino'){
    if(this.HDL>0 && this.HDL<=45){
      this.RHDL.nivel='BAJO';
      this.RHDL.txt='Mantener el colesterol bueno (HDL) en niveles bajos representa un';
      this.RHDL.riesgo='RIESGO MAYOR';
      this.RHDL.recomendacion='te aconsejamos aumentarlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
      this.RHDL.color='#e90000';
    }else if(this.HDL>=46){
      this.RHDL.nivel='NORMAL';
      this.RHDL.txt='Un estilo de vida saludable te ayuda a mantener el nivel  de colesterol bueno dentro de los parámetros normales,  esto es lo';
      this.RHDL.riesgo='MEJOR PARA TU SALUD';
      this.RHDL.recomendacion='¡Consulta con un profesional de la salud! para que pueda  brindarte más consejos.';
      this.RHDL.color='#1ca905';
    }else{this.RHDL.nivel='DATOS INCORRECTOS O FALTANTES'}
  }else{this.RHDL.nivel='SEXO FALTANTE'}


//TRIGLICERIDOS RESULTADOS

  if(this.trigliceridos<=150 && this.trigliceridos>0){
    this.RTrigliceridos.nivel='NORMAL';
    this.RTrigliceridos.txt='Este es el nivel que se recomienda tener para';
    this.RTrigliceridos.riesgo='ESTAR SALUDABLE.';
    this.RTrigliceridos.recomendacion='Un estilo de vida saludable te ayuda a mantener los niveles recomendables de triglicéridos. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
    this.RTrigliceridos.color='#1ca905';
  }else if(this.trigliceridos>=151 && this.trigliceridos<=199){
    this.RTrigliceridos.nivel='LEVEMENTE ELEVADO';
    this.RTrigliceridos.txt='Este nivel está en el';
    this.RTrigliceridos.riesgo='LÍMITE DE RIESGO';
    this.RTrigliceridos.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RTrigliceridos.color='#ffdb00';
  }else if(this.trigliceridos>=200 && this.trigliceridos<=499){
    this.RTrigliceridos.nivel='ELEVADO';
    this.RTrigliceridos.txt='Este nivel representa un';
    this.RTrigliceridos.riesgo='RIESGO ALTO';
    this.RTrigliceridos.recomendacion='te aconsejamos reducirlo. ¡Consulta a tu médico!, él o  ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RTrigliceridos.color='#f1592a';
  }else if(this.trigliceridos>=500){
    this.RTrigliceridos.nivel='MUY ELEVADO';
    this.RTrigliceridos.txt='Este representa un';
    this.RTrigliceridos.riesgo='RIESGO MUY ALTO';
    this.RTrigliceridos.recomendacion=') te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RTrigliceridos.color='#e90000';
  }else{
    this.RTrigliceridos.nivel='DATOS INCORRECTOS O FALTANTES'
  }


//GLUCOSA
  if(this.glucosa>=70 && this.glucosa<=100){
    this.RGlucosa.nivel='NORMAL';
    this.RGlucosa.recomendacion='Un estilo de vida saludable influye en el control del azúcar (glucosa) en la sangre. Consulta cualquier inquietud sobre tus niveles de glucosa con tu médico.';
    this.RGlucosa.color='#1ca905';
  }else if(this.glucosa>=101 && this.glucosa<=125){
    this.RGlucosa.nivel='POSIBLE PREDIABETES';
    this.RGlucosa.recomendacion='Es necesario tomar dos veces la prueba para poder saber si padeces de diabetes. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RGlucosa.color='#f1592a';
  }else if(this.glucosa>126){
    this.RGlucosa.nivel='POSIBLE DIABETES';
    this.RGlucosa.recomendacion='Es necesario tomar dos veces la prueba para poder saber si padeces de diabetes. ¡Consulta a tu médico!,él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RGlucosa.color='#e90000';
  }else{
    this.RGlucosa.nivel='DATOS INCORRECTOS O FALTANTES';
  }


//PRESION ARTERIAL

  if(this.presion1<=90 && this.presion1>0 || this.presion2<=60 && this.presion2>0){
    this.RPresion.nivel='BAJA';
    this.RPresion.recomendacion='Puedes presentar mareos, cansancio y problemas de concentración. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RPresion.color='#0086d3';
  }else if(this.presion1<=120 && this.presion1>90 || this.presion2<=80 && this.presion2>60){
    this.RPresion.nivel='ÓPTIMA';
    this.RPresion.recomendacion='Este es el nivel que se recomienda tener la presión arterial. Un estilo de vida saludable te ayuda a mantener los niveles recomendables de presión arterial. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
    this.RPresion.color='#1ca905';
  }else if(this.presion1>=121 && this.presion1<=139 || this.presion2>=81 && this.presion2<=89){
    this.RPresion.nivel='PREHIPERTENSIÓN';
    this.RPresion.recomendacion='Es uno de los tres factores de riesgo cardiovascular más importante y es modificable. Esto significa que puedes desarrollar presión arterial alta, es una alerta para prevenir esta enfermedad.  ¡Consultar a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RPresion.color='#ffdb00';
  }else if(this.presion1>=140 && this.presion1<=159 || this.presion2>=90 && this.presion2<=99){
    this.RPresion.nivel='HIPERTENSIÓN GRADO 1';
    this.RPresion.recomendacion='Es uno de los tres factores de riesgo cardiovascular más importante y es modificable. Es una forma temprana de presión arterial alta que representa peligro para tu salud. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento para evitar progresión al grado II.';
    this.RPresion.color='#f1592a';
  }else if(this.presion1>=160 && this.presion1<=179 || this.presion2>=100 && this.presion2<=109){
    this.RPresion.nivel='HIPERTENSIÓN GRADO 2';
    this.RPresion.recomendacion='Es uno de los tres factores de riesgo cardiovascular más importante y es modificable. Puede causarte derrames cerebrales, insuficiencia cardiaca, infartos al corazón e insuficiencia renal. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RPresion.color='#e90000';
  }else if(this.presion1>=180 || this.presion2>=110){
    this.RPresion.nivel='HIPERTENSIÓN GRADO 3';
    this.RPresion.recomendacion='Es uno de los tres factores de riesgo cardiovascular más importante y es modificable. Puede causarte derrames cerebrales, insuficiencia cardiaca, infartos cardiacos e insuficiencia renal. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
    this.RPresion.color='#b10012';
  }else{this.RPresion.nivel='DATOS INCORRECTOS O FALTANTES'}
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/fevaluatuestadodesalud.jpg'
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/fevaluatuestadodesaludh.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );
  }
  
  
goToMenu(){
  this.navCtrl.setRoot(EvaluacionPage);
}


/**
 * @ignore
 */
  ionViewDidLoad() {
    if (this.screenOrientation.type =='portrait-primary') {
      this.fondo='./assets/imgs/fevaluatuestadodesalud.jpg'
    }else if (this.screenOrientation.type=='landscape-primary') {
      this.fondo='./assets/imgs/fevaluatuestadodesaludh.jpg'
    }
    console.log('ionViewDidLoad RsaludPage');
  }

}
