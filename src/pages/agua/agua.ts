import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompromisoPage } from '../compromiso/compromiso';
import { Actividadhbt1Page } from '../actividadhbt1/actividadhbt1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { getOrCreateContainerRef } from '@angular/core/src/render3/di';
import { Habito1Page } from '../habito1/habito1';
import { Habito2Page } from '../habito2/habito2';
import { Habito3Page } from '../habito3/habito3';
import { Habito4Page } from '../habito4/habito4';
import { Habito5Page } from '../habito5/habito5';
import { Habito6Page } from '../habito6/habito6';
import { Habito7Page } from '../habito7/habito7';
import { Habito8Page } from '../habito8/habito8';

/**
 * Esta modulo es la portada de los habitos, recibe los datos del habito y presenta el diseno predeterminado para cada habito
 */

@IonicPage()
@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})
export class AguaPage {
  //variables
  fondo:string;
  habito:string;
  descripcion:string;
  pregunta1:string;
  txt1:string;
  pregunta2:string;
  txt2:string;
  titulohbt:string;
  pagina:any;
  imagen:string;
  
  /**
   * En el constructor se definen el habito y el diseno de la pantalla
   * @param navCtrl 
   * @param navParams 
   * @param screenOrientation Orientacion de la pantalla
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation:ScreenOrientation) {
    this.habito=this.navParams.data.test;
    console.log('pagina portada ' + this.habito);
      //detectar habito y colocar valores de la pantalla
      if(this.habito=='Beber Agua Natural'){
        this.imagen='./assets/imgs/logoaguablanco.png';
        this.pagina=Habito1Page;
        this.titulohbt='BEBER AGUA NATURAL';
        this.descripcion='El hábito de Beber Agua Natural es el consumo adecuado de agua de acuerdo al requerimiento mínimo de cada individuo que depende de la dieta, ambiente y nivel de actividad de la persona.';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='Una botella de 1 litro para Beber Agua Natural constantemente.';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Realiza las actividades diarias indicadas en el curso.';
              }
      else if(this.navParams.data.test=='Actitud Positiva'){
        this.imagen='./assets/imgs/logoactitudblanco.png';
        this.pagina=Habito2Page;
        this.titulohbt='ACTITUD POSITIVA';
        this.descripcion='La Actitud Positiva es la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales.';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='Cultivar pensamientos positivos y vencer el pesimismo.';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Realiza las actividades indicadas para cada día en este curso, no te pierdas ni un día compártelo a tus familiares, amigos y vecinos.';
      }
      else if(this.navParams.data.test=='Bien Comer'){
        this.imagen='./assets/imgs/logobiencomerblanco.png';
         this.pagina=Habito3Page;
         this.titulohbt='BIEN COMER';
         this.descripcion='El hábito del Bien Comer establece recomendaciones más precisas y acertadas para una alimentación diaria que sea balanceada y que combine los diferentes grupos de alimentos por medio de las correctas porciones y calorías, que impactan el funcionamiento integral del individuo.';
         this.pregunta1='¿Qué necesitas para lograrlo?';
         this.txt1='Revisa el gráfico del plato Quiero ¡Vivir Sano!.';
         this.pregunta2='¿Cómo puedo lograrlo?';
         this.txt2='Sigue las actividades diarias indicadas en el curso, el objetivo es que aprendas a comer de una manera más saludable; pero que a la misma vez sea deliciosa y nutritiva.';
      }
      else if(this.navParams.data.test=='Actividad Física'){
        this.imagen='./assets/imgs/logoactividadblanco.png';
        this.pagina=Habito4Page;
        this.titulohbt='ACTIVIDAD FÍSICA';
        this.descripcion='El hábito de realizar Actividad Física es cualquier movimiento corporal producido por los músculos esquéleticos que exija un gasto de energía';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='-Un par de zapatos (preferiblemente tenis) y ropa cómoda. -Identificar un área cercana en dónde puedas realizar Actividad Física, preferiblemente al aire libre y dónde puedas recibir un poco de luz solar. ';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Sigue las actividades diarias indicadas en el curso, el objetivo es que realices Actividad Física de manera regular.';
      }
      else if(this.navParams.data.test=='Descanso Adecuado'){
        this.pagina=Habito5Page;
        this.imagen='./assets/imgs/logodescansoblanco.png';
        this.titulohbt='DESCANSO ADECUADO';
        this.descripcion='El hábito del Descanso Adecuado es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del o de otra actividad para reponer fuerzas físicas, mentales y espirituales.';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='Planificar tu tiempo durante el día.';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Realiza las actividades diarias indicadas en el curso, el objetivo es que puedas separar un tiempo para tener un Descanso Adecuado durante el día y que duermas al menos 7 horas continuas durante la noche. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, espiritual y social). ';
      }
      else if(this.navParams.data.test=='Auto-Control'){
        this.imagen='./assets/imgs/logoautocontrolblanco.png';
        this.pagina=Habito6Page;
        this.titulohbt='AUTO-CONTROL';
        this.descripcion='El hábito del Auto-Control es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso.';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='Dominio propio y fuerza de voluntad.';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Seguir las actividades de la siguiente tabla y marcar cada día las acciones que cumpla.';
      }
      else if(this.navParams.data.test=='Desayunar Más y Cenar Menos'){
        this.imagen='./assets/imgs/logodesayunarblanco.png';
        this.pagina=Habito7Page;
        this.titulohbt='DESAYUNAR MÁS Y CENAR MENOS';
        this.descripcion='El hábito de Desayunar Más y Cenar Menos es darle al desayuno nutritivo la priorida importancia que se merece, para lograr un mejor desarrollo y rendimiento integral del organismo y reducir la ingesta alimenticia en la cena.';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='Practicar el Bien Comer, ejercer le hábito del Auto-Control y dedicar tiempo a mi desayuno';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Seguir la actividades de la tabla y marcar cada día las acciones que cumpla.';
      }
      else if(this.navParams.data.test=='Ser Feliz'){
        this.imagen='./assets/imgs/logoserfelizblanco.png';
        this.pagina=Habito8Page;
        this.titulohbt='SER FELIZ';
        this.descripcion='El hábito de Ser Feliz es un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.';
        this.pregunta1='¿Qué necesitas para lograrlo?';
        this.txt1='La palabra de Dios, confianza y esperanza en una vida de calidad.';
        this.pregunta2='¿Cómo puedo lograrlo?';
        this.txt2='Seguir las actividades de la tabla de abajo y marcar cada día las acciones que cumpla.';
      }



    this.screenOrientation.onChange().subscribe(
      () => {
          if (this.screenOrientation.type =='portrait-primary') {
            this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito') +'/fportada.jpg';
          }else if (this.screenOrientation.type=='landscape-primary') {
            this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito') +'/fportadah.jpg';
          }
          console.log(this.screenOrientation.type);
      }
   );
  
  }


/**
 * Convierte en root el modulo del menu del habito actual
 */
  goToHbt(){

    this.navCtrl.setRoot(this.pagina);

    
   
  }

  /**
    * @ignore
    */
  ionViewDidLoad(screenOrientation:ScreenOrientation) {
    this.habito=this.navParams.data.test;
    
    if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
      this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito') +'/fportada.jpg';
    }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
      this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito') +'/fportadah.jpg';
    }
  
  }

}
