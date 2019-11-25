import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Modulo del modal del tips, se presental el mensaje del boton tip en la actividad diaria. 
 */

@IonicPage()
@Component({
  selector: 'page-modal-tips1',
  templateUrl: 'modal-tips1.html',
})
export class ModalTips1Page {
  //variables
  tips:any[]=[];
  tips2:any[]=[];
  dia:any;
  fondo;
  linea;
  icono;

  /**
   * Se definen los tips y los colores de los disenos
   * @param navCtrl 
   * @param navParams 
   * @param viewCtrl 
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    //Tips y colores
    if(window.localStorage.getItem('habito')=='1'){
      this.fondo='#26c9dc';
      this.linea='#262163';
      this.icono='icobeberaguablanco';
    this.tips = [{tip:"Deja un vaso con agua natural listo desde la noche para que no se te olvide Beber Agua Natural al momento de levantarte."},
    {tip:"Dedica una botella especial para tomar agua. Llévala a todas partes y bebe agua natural, aunque no tengas sed."},
    {tip:"Al momento de iniciar a cocinar los alimentos puedes Beber Agua Natural."},
    {tip:"Si no estás acostumbrado a tomar agua, puedes agregar tres rebanadas de limón, fresa, naranja, lima o frutos rojos, por litro, sin añadirle azúcar."},
    {tip:"Antes de cepillarte los dientes bebe un vaso con agua natural."},
    {tip:"Lleva tu botella con agua al lugar donde te ejercites y toma el equivalente a medio vaso o un vaso (100 ml a 250 ml), y repite cada 20 a 30 minutos para mantenerte hidratado/a."},
    {tip:"Lleva tu botella de agua natural contigo al trabajo o escuela y bebe de ella constantemente."}
  ];

  this.tips2 = [{tip2:"Puedes tomarla tibia añadiendo el jugo de un limón."},
    {tip2:"Rellena tu botella de agua natural cuantas veces sea necesario durante el día para mantenerte hidratado/a."},
    {tip2:"Si comes fuera de tu casa puedes Beber Agua Natural antes de ordenar los alimentos."},
    {tip2:"Pon notas en un lugar visible como tu espejo, refrigerador, puerta, etc. que diga: debo Beber Agua Natural hoy."},
    {tip2:"Programa un recordatorio en tu celular para motivarte a Beber Agua Natural."},
    {tip2:""},
    {tip2:"En lugar de ordenar refresco o jugo envasado pide agua natural."}
  ];
}else if(window.localStorage.getItem('habito')=='2'){
  this.fondo='#ff36f8';
  this.linea='#84018d';
  this.icono='icoactitudblanco';
this.tips = [{tip:"Comparte acciones afectivas con más regularidad a las personas que aprecias (abrazos, cuidados, atenciones, etc.)."},
{tip:"Haz una lista de las cosas buenas y de las oportunidades que tienes en tu vida."},
{tip:"Cuando tengas problemas dilos a Dios en oración."},
{tip:"Dale prioridad a los consejos u opinión de personas con una mentalidad positiva."},
{tip:"Practica respirar profundamente 10 veces por las noches antes de dormir y usa esta técnica al momento de estar enojado/a."},
{tip:"Evita hablar de forma negativa o grosera sobre las demás personas, aun en los momentos difíciles de manejar."},
{tip:"Reconoce las habilidades, talentos y capacidades de las personas que te rodean aun cuando éstas parezcan simples o poco notorias."}
];

this.tips2 = [{tip2:"Prepara una carta en donde expreses tu cariño a tus padres, hijos, hermanos, esposo(a) o amigos."},
{tip2:"Busca un aprendizaje positivo de cada situación de tu vida aun de los momentos difíciles."},
{tip2:"Analiza los problemas y busca de qué formas estos están creando oportunidades de aprendizaje para mejorar en tu vida."},
{tip2:"Comparte tiempo con personas que te ayuden a mejorar y edificarte como persona."},
{tip2:"Al enfrentarte a una situación tensa e incómoda procura no emitir ningún juicio o decisión."},
{tip2:"Di frases y opiniones positivas sobre ti y las personas que te rodean"},
{tip2:"Exprésale a las personas que te rodean lo bien que realizan alguna actividad, reconociendo su esfuerzo."}
];
}else if(window.localStorage.getItem('habito')=='3'){
  this.fondo='#17da40';
  this.linea='#085518';
  this.icono='icobiencomerblanco';
this.tips = [{tip:"Evita ir a hacer tus compras con hambre. Esto te ayudará a no comprar productos innecesarios y a que no hagas una mala inversión que afecte tu economía."},
{tip:"Al comprar frutas escoge las de temporada, esto te ayudará a reducir el costo y a comer más saludable."},
{tip:"Los productos de origen animal (carnes, pollo, pescado, leche, huevos, entre otros) no son los únicos con proteínas. ¡Todas las verduras y frutas tienen proteínas!"},
{tip:"Reemplaza los alimentos con mucho aceite y grasa por alimentos cocinados al vapor o hervidos."},
{tip:"Consumir cereales integrales te ayuda a mantener un peso saludable ya que te proporcionan una mayor saciedad."},
{tip:"Al preparar tus platillos, recuerda que la mayoría de tu plato deben ser verduras y frutas."},
{tip:"Compartir con otros lo que has aprendido te ayudará a reafirmar tus conocimientos."}
];

this.tips2 = [{tip2:""},
{tip2:""},
{tip2:"Deja las verduras y frutas picadas o ralladas en el refrigerador desde el fin de semana."},
{tip2:"En lugar de cocinar con mantequilla, margarina o manteca hazlo con aceite vegetal (aceite de oliva, de coco, entre otros)."},
{tip2:""},
{tip2:"Sustituye las proteínas de origen animal en tu receta por proteínas de origen vegetal"},
{tip2:""}
];
}else  if(window.localStorage.getItem('habito')=='4'){
  this.fondo='#fb0b0d';
  this.linea='#760001';
  this.icono='icoactividadblanco';
this.tips = [{tip:"Siembra un huerto con la ayuda de tu familia."},
{tip:"Pon un recordatorio en tu celular para que no olvides la actividad física de cada día."},
{tip:"Puedes tomar 2 o 3 pausas en tu actividad diaria, hacer una serie de lagartijas y una serie de sentadillas y luego continuar con tus actividades."},
{tip:"Al haber transcurrido dos horas sentado ponte de pie y realiza estiramientos de piernas y brazos."},
{tip:"Camina a una velocidad más rápida de la que acostumbras."},
{tip:"Respira profundamente y espira el aire de tus pulmones mientras ejecutas el estiramiento, así ayudarás al músculo en su elongación."},
{tip:"Sal al campo y disfruta de la naturaleza mientras realizas Actividad Física."}
];

this.tips2 = [{tip2:"Ten un proyecto en casa cómo: reparar la alacena o algún mueble."},
{tip2:"Organiza un partido de tu deporte favorito con tu familia o amigos y así practicas Actividad Física y te diviertes con ellos."},
{tip2:""},
{tip2:"Camina sobre tu área de trabajo o estudio."},
{tip2:"Aprovecha la oportunidad de caminar al ir de compras, visitar a tu familia, ir de paseo, entre otras cosas."},
{tip2:"Mantén la posición durante 30 segundos. Hay estudios que demuestran que es el tiempo que más beneficio aporta a tus músculos."},
{tip2:""}
];
}else if(window.localStorage.getItem('habito')=='5'){
  this.fondo='#4dccb6';
  this.linea='#204949';
  this.icono='icodescansoblanco';
this.tips = [{tip:"Dale prioridad a tu descanso sobre las demás actividades."},
{tip:"Realiza todas tus actividades antes de las 9 de la noche para que así tengas una hora libre para relajarte y prepararte para dormir."},
{tip:"Deja afuera de tu recámara la televisión, consolas de videojuegos, radio, entre otros dispositivos que puedan perturbar tu descanso."},
{tip:"Concéntrate en sentir el trabajo de los músculos y las articulaciones; no debes sentir dolor y se debe realizar antes de sentir cansancio muscular."},
{tip:"Como parte de tu agenda diaria, destina tiempo para la relajación, de la misma forma que lo haces para comer. No importa si tu agenda está muy apretada."},
{tip:"Al realizar tus respiraciones profundas, coloca una mano sobre el abdomen y la otra sobre el pecho, para verificar que el aire se dirija a la zona abdominal y no a la zona torácica. Esto permitirá el fortalecimiento de tu diafragma, facilitando el flujo de oxígeno, y haciendo más fácil la respiración."},
{tip:"Busca convivir con tu familia en áreas naturales, donde puedas descansar y apreciar la belleza de la naturaleza que te rodea."}
];

this.tips2 = [{tip2:"Si son las 9 de la noche y no has acabado con lo que tienes que hacer, déjalo y prepárate para dormir. Serás más productivo durante el día si descansas mejor."},
{tip2:"Pon una alarma en tu celular que te recuerde, 30 minutos antes de dormir, hacer tu rutina."},
{tip2:"Apaga o silencia tu celular durante al momento de irte a dormir."},
{tip2:"Asegúrate de que la respiración sea lo más profunda, lenta y rítmica posible."},
{tip2:"Aprovecha para descansar tu cuerpo y mente, permitiendo así la creación de nuevas y frescas ideas."},
{tip2:""},
{tip2:"Relaja tu mente y sistemas corporales escuchando los sonidos de la naturaleza, por ejemplo: el suave borboteo de un arroyo o el sonido del viento en los árboles."}
];
}else  if(window.localStorage.getItem('habito')=='6'){
  this.fondo='#bf41b9';
  this.linea='#62005d';
  this.icono='icoautocontrolblanco';
this.tips = [{tip:"Evita condimentar tus alimentos. Prefiere los alimentos en su forma natural y menos procesada."},
{tip:"Disminuye las horas que dedicas a ver televisión y realizar otra actividad de mayor provecho, por ejemplo: aprender un nuevo idioma o a tocar un instrumento."},
{tip:"Realiza un análisis comparativo de tus ingresos y en lo que gastas tu dinero, y así determina como mejorar la administración de tu dinero."},
{tip:"Evita tomar jugos, refrescos, u otro alimento entre comidas cuando tengas sed prefiere el agua natural."},
{tip:"Tira la basura en los lugares designados para ello. En tu carro puedes llevar una bolsa destinada para la basura y luego tirarla al llegar a tu casa."},
{tip:"Si tienes algún problema con cualquiera de estas adicciones, puedes pedir ayuda a un profesional de la salud (Psicólogo, Psiquiatra)."},
{tip:"Aunque un producto sea saludable, evita excederte en el consumo del mismo."}
];

this.tips2 = [{tip2:"En momentos de recreación prefiere ingerir alimentos saludables tales como frutas, verduras o semillas."},
{tip2:"Distribuye equilibradamente tu tiempo en las diferentes actividades que realices en el día."},
{tip2:"Distribuye tus gastos de acuerdo a prioridades."},
{tip2:"Evita tomar bebidas azucaradas al realizar ejercicio y mantente hidratado con agua natural."},
{tip2:"Puedes planear y realizar un proyecto comunitario para limpiar las áreas verdes de tu colonia."},
{tip2:""},
{tip2:"Practica la moderación aun con lo beneficioso."}
];
} if(window.localStorage.getItem('habito')=='7'){
  this.fondo='#fe5c25';
  this.linea='#8c2400';
  this.icono='icodesayunarblanco';
this.tips = [{tip:"Pega tú menú en la refrigeradora para que recuerdes lo que piensas preparar durante la semana."},
{tip:"Ingiere un desayuno saludable y abundante al comenzar el día y reduce la cantidad de alimentos en la noche."},
{tip:"Si no tienes tiempo durante la semana para preparar tus desayunos, adelanta su preparación el fin de semana previo."},
{tip:"Evita ingerir los alimentos viendo televisión o leyendo algún libro."},
{tip:"Desayuna todos los días así tendrás menos hambre durante la cena."},
{tip:"Sé estricto en tu hora de comida, no la retrases ni por una o dos horas."},
{tip:"Ingiere tus alimentos con tú familia, en la mesa y disfruta ese tiempo junto."}
];

this.tips2 = [{tip2:""},
{tip2:"Elige cenas ligeras y en un horario temprano."},
{tip2:"Dentro de tu agenda para el día debes añadir el desayuno como una cita importante."},
{tip2:"Organízate para levantarte con tiempo para prepararlo y disfrutarlo."},
{tip2:"Puedes cenar algo como una fruta con un pan con frijoles, recuerda que esto te ayudará a tener un mejor descanso y una mejor digestión."},
{tip2:"Procura desayunar como rey, comer como príncipe y cenar como mendigo."},
{tip2:"Conversa con tu familia durante el desayuno en lugar de ver televisión o usar tu celular."}
];
} if(window.localStorage.getItem('habito')=='8'){
  this.fondo='#ffdb00';
  this.linea='#746400';
  this.icono='icoserfelizblanco';
this.tips = [{tip:"Puedes servir o ayudar a los demás por medio de acciones sencillas y desinteresadas (barrer la banqueta de tu vecino, compartir una comida, etc)."},
{tip:"Asiste a algún club o grupo que realice actividades de tu interés."},
{tip:"Brinda una sonrisa cálida y acciones amables a tus compañeros de trabajo, de la escuela, familia y/o amigos."},
{tip:"Visualiza la mano de Dios en tu vida y sus bendiciones a pesar de la adversidad y anótalas en una libreta."},
{tip:"Agrega a tu rutina diaria un momento para orar por tus peticiones y otro por tus agradecimientos."},
{tip:"Regala algún pequeño detalle a tus seres queridos, no tiene que ser algo costoso con una carta que diga cuánto lo aprecias puede ser suficiente."},
{tip:"Participa en las actividades de tu iglesia o grupo activamente"}
];

this.tips2 = [{tip2:"Muéstrate atento a las necesidades de los demás. Realiza un proyecto comunitario."},
{tip2:"Disfruta los momentos de calidad y convivencia con tus amigos o familia."},
{tip2:"Puedes sonreír y mostrarte educado a la gente cuando vas por la calle diciendo expresiones atentas y buenas modales (buenos días, con permiso, etc)."},
{tip2:"Conversa con Dios sobre tus problemas y dudas, depositando tu plena confianza en su intervención. Busca y reconoce las promesas de Dios en la biblia y repite tus favoritas diariamente."},
{tip2:"Platica con Dios como si lo hicieras con tu mejor amigo haciéndolo de la manera más sincera posible. Comparte con Dios tus experiencias y aprendizaje diario a través de la oración."},
{tip2:"Antes de ir al trabajo o escuela abraza a tu familia y expresa tus sentimientos de afecto hacia ellos. Puedes cambiar el saludar de beso por dar un abrazo con las personas que conoces."},
{tip2:"Busca establecer lazos afectivos y amistades sinceras con las personas de tu grupo o iglesia."}
];
}
  }
  //optener dia
  /**
   * Obtiene el numero del tip 
   */
  ionViewWillLoad(){
    this.dia=this.navParams.get('day');
    this.dia= parseInt(this.dia.dia);
    console.log("dia "+ this.dia.dia);
   }
//cerrar modal
/**
 * cierra el modal
 */
  Cerrar(){
    this.viewCtrl.dismiss();
  }

  
}
