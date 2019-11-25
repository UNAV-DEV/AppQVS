import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalTips1Page } from './../modal-tips1/modal-tips1';
import { ModalReflexionar1Page } from './../modal-reflexionar1/modal-reflexionar1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalOptions, Modal, ModalController, ToastController } from 'ionic-angular';
import { Compromisohbt1Page } from '../compromisohbt1/compromisohbt1';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Vista de la actividad diaria
 *
 * Muestra la actividad diaria del habito, Se reciben el dia, el habito para definir el diseno de la vista con el habito y dia correspondientes
 */

@IonicPage()
@Component({
  selector: 'page-actividadhbt1',
  templateUrl: 'actividadhbt1.html',
})
export class Actividadhbt1Page {

  //variables
  titulo;
  titulocolor;
  habito:any;
  auxdia:any;
  dia;
  color;
  actividad:any[]=[];
  links:string;
  public state:boolean;
  userConsulta = {"id": "","id_habito": "", "registro":"consultaActividad"}; //datos de envio a la api
  ConsultaLinks = {"id_habito": "", "dia":"", "registro":"consultaLinks"}; //consulta links a la api

  public state2:boolean;
  fondo:string;
  /**
   *  Se recibe la actividad, el habito y se define el diseno correspondiente
   * @param navCtrl 
   * @param Modal 
   * @param params 
   * @param toastCtrl toast
   * @param iap navegador web interno
   * @param screenOrientation orientacion de la pantalla
   */
  constructor(private navCtrl: NavController,private Modal:ModalController,public params:NavParams, public toastCtrl:ToastController, public iap: InAppBrowser, private screenOrientation:ScreenOrientation, private Rest:RestProvider) {
    this.habito=window.localStorage.getItem('habito');
    this.userConsulta.id_habito=this.habito;
    this.screenOrientation.onChange().subscribe(
      () => {
          
          if (this.screenOrientation.type =='portrait-primary' || this.screenOrientation.type=='portrait-secondary') {
            this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito')+'/factividadhbt.jpg'
          }else if (this.screenOrientation.type=='landscape-primary' || this.screenOrientation.type=='landscape-secondary') {
            this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito')+'/factividadhbth.jpg'
          }
          console.log(this.screenOrientation.type);
      }
   );

    
    //asignar variables
    this.userConsulta.id=window.localStorage.getItem("id");//optener id de usuario
    this.auxdia = parseInt (params.get('auxdia'));
    this.dia=this.auxdia;
    this.ConsultaLinks.dia=this.dia+1;
    this.ConsultaLinks.id_habito=window.localStorage.getItem('habito');
    
    //asigna el Link de saber mas 
    this.Rest.acepto(this.ConsultaLinks).then((result)=>{
      let data:any = result;
      console.log(data);
      this.links=data.link;
    });
    
    //validar estado del boton
    if(this.dia == parseInt(window.localStorage.getItem("actividad"))){
      this.state=false;
    }else{
      this.state=true;
    }
    

    //Asignar actividades, links y color de textos
    if(window.localStorage.getItem('habito')=='1'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='black';
      this.titulo='¡NO TE ESPERES A TENER SER!';
      this.titulocolor='#000392';

      //ACTIVIDADES
    this.actividad = [{act:"Bebe dos vasos de agua natural de 250 ml c/u al levantarte y hasta 30 minutos antes de desayunar."},
    {act:"Bebe un vaso de agua natural de 250 ml dos horas después del desayuno y un vaso de agua natural de 250 ml dos horas después de la comida del mediodía."},
    {act:"Bebe dos vasos de agua natural de 250 ml c/u media hora antes de la comida del mediodía."},
    {act:"Bebe dos vasos de agua natural de 250 ml c/u 30 minutos antes de la cena."},
    {act:"Bebe un vaso de 250ml de agua natural dos horas antes de dormir."},
    {act:"Bebe Agua Natural mientras realizas ejercicio físico."},
    {act:"No reemplaces el agua natural por refresco o jugos comerciales envasados."}
  ];

  

  

    }else if(window.localStorage.getItem('habito')=='2'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='white';
      this.titulo='¡CAMBIA TU ACTITUD, CAMBIA TU VIDA!';
      this.titulocolor='white';
      //ACTIVIDADES
  this.actividad = [{act:"Expresa tu cariño con un abrazo a ocho personas en este día, especialmente a tus padres, hijos, hermanos, esposo (a) o amigos."},
  {act:"Empieza un diario donde escribas las buenas experiencias y las cosas no tan agradables de cada día. De estas últimas escribe una lección positiva."},
  {act:"Escribe en tu diario de tres a cinco cosas por las que le agradeces a Dios."},
  {act:"Elige un problema o dificultad y acércate a tres personas con una mentalidad positiva y pídele su consejo."},
  {act:"Esta noche, antes de dormir realiza series de respiraciones profundas: inhalar cinco segundos, mantener cinco segundos y exhalar 10 segundos. (cuando te enfrentes a una situación incómoda, usa esta técnica)."},
  {act:"Regala una fruta a una persona que no te agrade y dile algo agradable a tres personas durante el día."},
  {act:"Felicita con una sonrisa de tres a cinco personas de las que te rodean, por alguna actividad bien realizada en este día."}
];
  
  

    }
    else if(window.localStorage.getItem('habito')=='3'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='white';
      this.titulo='¡TU DESTINO ESTA EN TU PLATO!';
      this.titulocolor='white';
      //ACTIVIDADES
  this.actividad = [{act:"Haz una lista de compras para tu despensa, incluyendo cada uno de los seis grupos de alimentos del Plato Quiero ¡Vivir Sano! Para saber cómo combinar cada uno de tus platillos diarios, descarga aquí  el Plato Quiero ¡Vivir Sano!, imprímelo y pégalo en un lugar visible de tu cocina."},
  {act:"Que la mitad de tu plato, en cada una de las comidas del día, sean verduras y frutas. No te olvides de comer al menos una fruta roja, una cítrica y una amarilla."},
  {act:"Inicia la comida del medio día con un plato grande de ensalada, preparada con tres diferentes colores de vegetales frescos. Además, consume proteínas de origen vegetal como frijoles, garbanzos y lentejas en lugar de proteínas de origen animal (carne, pollo, huevos y quesos)."},
  {act:"Prepara todas tus comidas de hoy sin freír. Hiérvelas o cocínalas al vapor e incluye grasas saludables como aguacate, semillas, nueces, almendras, aceite de oliva, aceite de coco."},
  {act:"Evita el consumo de cereales refinados como pasta, arroz, panes blancos, entre otros y sustitúyelos por cereales integrales como pan integral, pasta integral, arroz integral, entre otros."},
  {act:"Prepara tu receta favorita basándote en el Plato Quiero ¡Vivir Sano!."},
  {act:"Realiza una reunión familiar o con tus amigos en tu casa para compartir los conocimientos de esta semana sobre el Plato Quiero ¡Vivir Sano!, además de tus deliciosas recetas."}
];
  
 
    }

    else if(window.localStorage.getItem('habito')=='4'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='white';
      this.titulo='¡MANTÉNTE ACTIVO!';
      this.titulocolor='white';
      //ACTIVIDADES
  this.actividad = [{act:"Realiza en tu casa un trabajo físico que no realices normalmente, cómo los trabajos del hogar, reparar algún mueble o arreglar el jardín."},
  {act:"Aparta al menos 30 minutos para realizar alguno de los siguientes ejercicios físicos de tipo aeróbico: caminata rápida, trotar, aeróbicos, jugar tenis, basquetbol, fútbol, natación, etc.)"},
  {act:"Realiza de dos a tres series de 10 lagartijas y 10 sentadillas."},
  {act:"No pases más de dos horas sentado en tu trabajo o escuela, cada dos horas realiza dos sentadillas o camina por dos minutos y sigue con tus actividades."},
  {act:"Incorpora en tu rutina diaria nuevas costumbres con las que realices actividad física (dejar el carro más lejos, caminar al trabajo, usar bicicleta como transporte, subir y bajar escaleras)."},
  {act:"Realiza estiramientos de tu cuello, espalda, torso, caderas, muslos y pantorrillas por lo menos cinco veces en el día."},
  {act:"En este día especial realiza una caminata al aire libre y bajo la luz del sol con tus familiares o amigos."}
];
  
 
    }
    else if(window.localStorage.getItem('habito')=='5'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='white';
      this.titulo='¡SIN DESCANSO NO HAY ENTUCIASMO!';
      this.titulocolor='white';
      //ACTIVIDADES
      this.actividad = [{act:"Duerme antes de las 10 de la noche (22:00 horas) y al menos durante 7 horas seguidas diarias."},
      {act:"30 minutos antes de dormir, empieza una rutina de no más de 30 minutos como lavar tus dientes, darte un baño rápido, orar y a dormir."},
      {act:"Evita tener en tu recámara cosas que perturben tu sueño como televisión, radio, celular, videojuegos."},
      {act:"Tómate pausas en este día y realiza un ejercicio de relajación en tus músculos desde los pies hasta la cabeza: cierra los ojos, tensa y relaja el musculo y termina con una respiración profunda."},
      {act:"Detén 5 minutos tus actividades y toma un descanso, coloca tus pies y piernas en algún lugar elevado."},
      {act:"Realiza 5 respiraciones profundas. Para hacerlo ponte de pie, toma aire con la nariz, sostén la respiración contando hasta cinco y expulsa el aire por la boca."},
      {act:"Aparta este día para descansar y compartir con tu familia y/o amigos en algún lugar natural."}
];
    
 
    }else if(window.localStorage.getItem('habito')=='6'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='white';
      this.titulo='¡VIVE CON MODERACIÓN!';
      this.titulocolor='white';
      //ACTIVIDADES
  this.actividad = [{act:"Evita el consumo de alimentos y bebidas no nutritivas (chatarra) tales como frituras, bebidas azucaradas, gaseosas, dulces, con altos niveles de grasas saturadas, harinas refinadas y embutidos."},
  {act:"Haz un horario de tu semana y distribuye tus actividades de la manera más adecuada para llevar una vida balanceada."},
  {act:"Elabora un presupuesto de tus gastos mensuales acorde a tus ingresos, destina al ahorro el 10% y respeta este presupuesto cada día."},
  {act:"Evita el consumo de alimentos o bebidas azucaradas entre cada comida."},
  {act:"Cuida el medio ambiente depositando la basura y desechos en su respectivo lugar."},
  {act:"Abstente hoy de cualquier adicción presente en tu vida (juegos electrónicos, tabaco, alcohol, pornografía, internet, redes sociales)."},
  {act:"Repasa las porciones de alimentos sugeridas en el Plato Quiero ¡Vivir Sano! y modera la cantidad de alimentos y/o bebidas que consumes durante el día."}
];


    }else if(window.localStorage.getItem('habito')=='7'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='white';
      this.titulo='¡CUÁNTO COME SÍ IMPORTA! ';
      this.titulocolor='white';
      //ACTIVIDADES
  this.actividad = [{act:"En este día, realiza por escrito tu menú de desayunos y cenas de la semana basándote en el plato Quiero ¡Vivir Sano!, y pégalo en un lugar visible "},
  {act:"Inicia tu día con un desayuno saludable y abundante y finalízalo con una cena ligera y en un horario temprano."},
  {act:"Desayuna como máximo 1 hora después de haberte levantado."},
  {act:"Organiza tu tiempo para que puedas dedicarle por lo menos 30 minutos a tu desayuno, masticando bien y disfrutándolo. "},
  {act:"Ten una cena ligera y realízala por lo menos 3 horas antes de dormir."},
  {act:"Organízate para no saltarte el desayuno ni la comida para que reduzcas la cantidad de alimentos en la cena."},
  {act:"Aparta el momento del desayuno y compártelo con tu familia y/o amigos, conversando y disfrutando este tiempo juntos."}
];


    }else if(window.localStorage.getItem('habito')=='8'){
      //TITULO Y COLOR DEL TEXTO Y TITULO
      this.color='black';
      this.titulo='¡DECÍDETE A SER FELIZ!';
      this.titulocolor='black';
      //ACTIVIDADES
  this.actividad = [{act:"Brinda tu servicio o ayuda a una persona o familia necesitada en tu comunidad."},
  {act:"Aparta tiempo este día para realizar una o más actividades que te gustan o para convivir y disfrutar con tus amigos y/o familia."},
  {act:"Sonríe a todas las personas con las que te relaciones durante este día."},
  {act:"Anota en una libreta las bendiciones que recibas durante este día."},
  {act:"Aparte un momento en tu rutina diaria para platicar con Dios de forma sincera y cuéntale tus experiencias, tus peticiones y tus agradecimientos."},
  {act:"Abraza y expresa tus sentimientos de afecto, a través de algún pequeño detalle, a tu familia y/o amigos."},
  {act:"Involúcrate y participa en las actividades de tu iglesia o en un grupo en donde te sientas querido y aceptado."}
];


    }
  

  }
/**
    * @ignore
    */
ionViewDidLoad(screenOrientation:ScreenOrientation) {
  
  if (this.screenOrientation.type =='portrait-primary') {
    this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito')+'/factividadhbt.jpg'
  }else if (this.screenOrientation.type=='landscape-primary') {
    this.fondo='./assets/imgs/habito'+window.localStorage.getItem('habito')+'/factividadhbth.jpg'
  }
    
    
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
   * OpenModal, crea el modal de compromiso donde se encuentra el boton para realizar guardar la actividad diaria
   */
  openModal(){

  let compromisoOpciones : ModalOptions = {
   //mostrar fondo model
    showBackdrop:true
  };
   let compromiso:Modal = this.Modal.create(Compromisohbt1Page);//PRESENTAR MODAL
   compromiso.present();
   
  }


  //Modal Tips
  /**
   * Modal Tips, crea el modal del tip diario, envia al modal los datos de la actividad actual
   */
  ModalTips(){
    let datos ={ dia:this.dia };
    let TipsOpciones : ModalOptions = {
      //mostrar fondo model
       showBackdrop:true
     };
      let Tip:Modal = this.Modal.create(ModalTips1Page, { day: datos });//PRESENTAR MODAL y envio datos de actividad
      Tip.present();
  }

//Modal para rlexionar
/**
 * Modal Reflexionar, llama al modal de la reflexion diaria, envia al modal datos de la actividad actual
 */
  ModalReflexionar(){
    let datos ={ dia:this.dia };
    let reflexionarOpciones : ModalOptions = {
      //mostrar fondo model
       showBackdrop:true
     };
      let reflexionar:Modal = this.Modal.create(ModalReflexionar1Page, { day: datos });//PRESENTAR MODAL y envio datos de actividad
      reflexionar.present();
  }
//abrir reflexionar
/**
 * Manda a llamar el modal reflexionar
 */
goToReflexionar(){
  this.ModalReflexionar();
}

//abrir tips
/**
 * Manda a llamar el modal Tips
 */
goToTips(){
  this.ModalTips();
}

//abrir compromiso
/**
 * Manda a llamar el modal de compromiso
 */
  goToAdelante(){
    this.openModal();
    
  }

  //abrir saber mas
  /**
   * abre una pagina en el navegador interno con el link correspondiente a la actividad
   */
  goToSaberMas(){
    this.iap.create(this.links, "_blank");
  }
 
 
}
