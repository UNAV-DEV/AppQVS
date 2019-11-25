import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Modulo del Modal de la reflexion diaria, aqui se muestra el mensaje  del boton "Para reflexionar" de la actividad diaria
 */

@IonicPage()
@Component({
  selector: 'page-modal-reflexionar1',
  templateUrl: 'modal-reflexionar1.html',
})
export class ModalReflexionar1Page {
  //variables
  reflexion:any[]=[];
  dia:any;
  fondo;
  linea;
  habito;
/**
 * Se definen las reflexiones y los colores del diseno para cada habito
 * @param navCtrl 
 * @param navParams 
 * @param viewCtrl 
 */
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl :ViewController) {
    this.habito=window.localStorage.getItem('habito');
    //Reflexionesn y colores
    
    if(window.localStorage.getItem('habito')=='1'){
      this.fondo='#26c9dc';
      this.linea='#262163';
    this.reflexion = [{ref:"El agua es el componente principal del cuerpo humano: normalmente representa el 60% del peso corporal en hombres adultos, y es ligeramente inferior (50-55%) en mujeres debido a su proporción natural de más grasa corporal. "},
    {ref:"“Si necesitas algo para apagar la sed, el agua pura tomada poco antes o después de la comida es todo lo que la naturaleza requiere. Nunca té, café, cerveza, vino ni ninguna bebida alcohólica. El agua es el mejor líquido de que dispongamos para limpiar los tejidos”. The Review and Herald. 1884"},
    {ref:"“Muchos están viviendo en un estado de violación de las leyes de la salud, y son ignorantes de la relación que sus hábitos de comer, beber y trabajar tienen con su salud... Si los que sufren solamente recurrieran a los medios sencillos que han descuidado—el uso del agua y el régimen alimenticio debido—, la naturaleza tendría la clase de ayuda que necesita, y que debiera haber tenido hacía tiempo.” Consejos Sobre el Régimen Alimenticio. Pág. 359; 1864. "},
    {ref:"“Ingerida en cantidades suficientes, el agua suple las necesidades del organismo, y ayuda a la naturaleza a resistir a la enfermedad. Aplicada externamente, es uno de los medios más sencillo y eficaces para regularizar la circulación de la sangre”. El Ministerio de Curación. Pág. 181; 1905."},
    {ref:"El cerebro y los músculos son aproximadamente un 75% agua. La sangre y los riñones se componen en un 81% de agua. El 71% de tu hígado es agua y el 22% de tus huesos es agua."},
    {ref:"Cuando pierdes menos del 1% del agua de tu cuerpo, este comienza a necesitar agua de manera urgente porque se siente deshidratado."},
    {ref:"“La vida al aire libre es buena para el cuerpo y la mente. Es la medicina que Dios ha diseñado para la restauración de la salud. El aire puro, el agua limpia, la luz del sol y los hermosos parajes naturales son sus medios para devolverle la salud al enfermo, en armonía con la naturaleza”. Consejos Sobre el Régimen Alimenticio. Pág. 210; 1880."}
  ];
  }else if(window.localStorage.getItem('habito')=='2'){
    this.fondo='#ff36f8';
  this.linea='#84018d';
  this.reflexion = [{ref:"“Te aconsejo que hagas todo lo posible para estar en armonía con tus seres queridos. Cultiva una actitud amable y pacifista, y no dejes que sentimientos de venganza asalten tu mente y tu corazón. Dispones de muy poco tiempo en este mundo; actúa tomando en cuenta el futuro y la eternidad”. Mente, carácter y personalidad II. Pág. 544; 1885."},
  {ref:"Se calcula que el 25% de las personas padecen uno o más trastornos mentales o del comportamiento a lo largo de su vida, la mayoría de estos puede evitarse viviendo con una actitud positiva"},
  {ref:"La depresión es un trastorno mental frecuente, el cual aumenta el riesgo de padecer diabetes, presión arterial alta y enfermedades del corazón. Se calcula que afecta a 350 millones de personas en el mundo. Tú puedes contrarrestar esta enfermedad teniendo una Actitud Positiva."},
  {ref:"“No mantengas tu mente inclinada a ver el lado desalentador de la vida; porque eso perjudica tu salud. Solo tú puedes equilibrar tu mente hacia pensamientos positivos. Trata de no pensar demasiado en los problemas que puedas tener. Todo lo que puedas hacer para apartar tu mente de ti mismo, en cualquier clase de actividad, hazlo”. Mente, carácter y personalidad II. Pág. 413; 1906"},
  {ref:"´´Las habitaciones poco ventiladas influyen en la depresión mental. Las consecuencias de tener tus habitaciones cerradas y mal ventiladas son: tu organismo se debilita y pierde la salud, la circulación de la sangre se hace más lenta en tu cuerpo y tu mente se deprime y se ensombrece, mientras todo tu organismo se debilita, y hasta podrías experimentar fiebre y otras enfermedades agudas´´.  Mente, carácter y personalidad II. Pág. 501; 1868."},
  {ref:"Cuando los jefes y empleados adoptan una Actitud Positiva, esta permite a las personas sentirse más felices en su trabajo, logrando ser empleados con mucha energía y dinamismo, lo que representa para las empresas un aumento en su productividad hasta en un 88%."},
  {ref:"“La actitud positiva se refleja en el rostro. Los rostros de los que son simpáticos y generosos resplandecen con el brillo de la verdadera bondad, mientras que los que no tienen pensamientos positivos y motivos generosos, expresan en sus rostros la frialdad y negatividad que se encuentran en sus corazones”. Mente, carácter y personalidad II. Pág. 500; 1876"}
];
}else if(window.localStorage.getItem('habito')=='3'){
  this.fondo='#17da40';
  this.linea='#085518';
this.reflexion = [{ref:"“Nuestro alimento debe escogerse con mucho cuidado. Nuestro régimen alimentario debe adaptarse a la estación del año, al clima en que vivimos y a nuestra ocupación”. El Ministerio de Curación. Pág. 228; 1905."},
{ref:"“El alimento debe prepararse con sencillez, aunque en forma esmerada para que incite al apetito. Debéis eliminar la grasa de vuestra alimentación. Contamina cualquier alimento que preparéis. Comed mayormente frutas y verduras”. Consejos Sobre el Régimen Alimenticio. Pág. 300; 1890."},
{ref:"“Los alimentos como el arroz, trigo, maíz, avena, judías, frijoles, guisantes y lentejas se exportan hoy a todas partes. Junto con las frutas y con la variedad de verduras propias de cada país o importadas, facilitan la elección y elaboración de comidas, sin necesidad de carnes”. Consejos Sobre el Régimen Alimenticio. Pág. 113; 1890."},
{ref:"“Si hubo alguna vez un tiempo en que la alimentación debía ser de la clase más sencilla, es ahora... Los cereales y las frutas, preparados sin grasa en forma tan natural como sea posible deberían ser nuestro alimento”. Consejos Sobre el Régimen Alimenticio. Pág. 75; 1890."},
{ref:"Según la Organización Panamericana de la Salud comer al mismo tiempo que se hace otra actividad, incrementa el riesgo de comer en exceso y las probabilidades de ser obeso."},
{ref:"“Los cereales, las frutas carnosas, las oleaginosas y las legumbres constituyen el alimento escogido para nosotros por el Creador. Preparados del modo más sencillo y natural posible, son los comestibles más sanos y nutritivos. Comunican una fuerza, una resistencia y un vigor intelectual que no pueden obtenerse de un régimen alimenticio más complejo y estimulante”. Consejos Sobre el Régimen Alimenticio. Pág. 366; 1890."},
{ref:"´´Ha de evitarse el exceso de comida, aunque sea de la más saludable. El cuerpo no puede usar más de lo que se requiere para la reparación de los diversos órganos del cuerpo, y el exceso entorpece al organismo´´. La Educación. Pág. 205; 1903."}
];
}else if(window.localStorage.getItem('habito')=='4'){
  this.fondo='#fb0b0d';
  this.linea='#760001';
this.reflexion = [{ref:"“Sin ejercicio físico nadie puede tener una constitución sana ni una salud vigorosa, y la disciplina del trabajo bien regulado no es menos esencial para desarrollar una inteligencia fuerte y activa y un carácter noble”. Historia de los Patriarcas y Profetas. Pág. 650, 651; 1890."},
{ref:"La inactividad física se encuentra entre los 10 principales factores de riesgo de mortalidad a nivel mundial."},
{ref:"“El ejercicio moderado diario fortalecerá los músculos, los cuales sin ejercicio se vuelven blandos y débiles. Mediante el ejercicio activo diario, el hígado, los riñones y los pulmones también se fortalecerán para realizar su función”. Conducción del Niño. Pág. 317; 1964."},
{ref:"“No se puede conservar la salud a menos de que se dedique una parte de cada día al ejercicio muscular al aire libre”. Conducción del Niño. Pág. 321; 1964."},
{ref:"“El ejercicio es importante para la digestión, y para gozar de una condición saludable del cuerpo y la mente. Ud. necesita ejercicio físico”. Consejos Sobre el Régimen Alimenticio. Pág. 122; 1890."},
{ref:"“Los que se dedican a ocupaciones sedentarias debieran hacer ejercicio físico aun en el caso de que no necesiten trabajar por razones pecuniarias. La salud debería ser incentivo suficiente para inducirlos a unir el trabajo físico al mental”. La Educación Cristiana. Pág. 35; 1975."},
{ref:"“Al caminar en medio de las flores y los árboles, el gozo y la alegría les llenan el corazón. Es como si Dios les sonriera, al contemplar las maravillosas cosas que él ha creado para alegrarles su corazón entristecido”. El Ministerio Médico. Pág. 307; 1902."}
];
}else if(window.localStorage.getItem('habito')=='5'){
  this.fondo='#4dccb6';
  this.linea='#204949';
this.reflexion = [{ref:"El hecho de reducir el tiempo de sueño en tan solo hora y media, aún una sola noche, hace que el estado de alerta durante el día se reduzca en un 32%."},
{ref:"“Cuando nos retiramos a descansar, el estómago ya debería haber realizado todo su trabajo, porque él también necesita tener descanso como cualquiera otra parte del cuerpo. El trabajo de digestión no debería efectuarse durante ningún lapso de las horas de sueño.”Consejos sobre el régimen alimenticio, 208"},
{ref:"La Agencia Nacional para la Seguridad en el Tráfico en las Autopistas estima, anualmente en EEUU, conducir con sueño causa al menos 100,000 accidentes, 71,000 heridos y 1550 víctimas mortales."},
{ref:"“Hay que conceder a los pulmones la mayor libertad posible. Su capacidad se desarrolla mediante el libre funcionamiento; pero disminuye si se los tiene apretados y comprimidos. De ahí los malos efectos de la costumbre tan común, principalmente en las ocupaciones sedentarias, de encorvarse al trabajar.” Consejos sobre el régimen alimenticio, 124"},
{ref:"“Cuando ha habido mucho exceso de alguna actividad, el descanso completo por algún tiempo prevendrá a veces una grave enfermedad.” El Ministerio de Curación, 183."},
{ref:"“La influencia del aire puro y fresco hace que la sangre circule en forma saludable por el organismo. Refresca el cuerpo, y tiende a fortalecerlo y a hacerlo saludable, mientras que al mismo tiempo su influencia se siente en forma definida en la mente, pues imparte cierto grado de compostura y serenidad.” Consejos sobre el régimen alimenticio, 124."},
{ref:"“Los de cerebro cansado y de nervios deprimidos a consecuencia de un trabajo sedentario continuo, se verán muy beneficiados por una temporada en el campo, donde lleven una vida sencilla y libre de cuidados, cerca de la naturaleza.” El Ministerio de Curación 181."}
];
}else if(window.localStorage.getItem('habito')=='6'){
  this.fondo='#bf41b9';
  this.linea='#62005d';
this.reflexion = [{ref:"“Descarten todo lo que vaya en detrimento de la salud. Use alimento sano y sencillo. La fruta es excelente, y ahorra mucho trabajo de cocina. Descartad los pasteles, tortas y postres que son concentrados, y otros platos preparados para tentar el apetito.” Consejos sobre el régimen alimenticio, 398"},
{ref:"“Si supiéramos apreciar cada momento y dedicarlo a cosas buenas, tendríamos tiempo para hacer todo lo que necesitamos hacer para nosotros mismos o para los demás.” El ministerio de curación, 160"},
{ref:"““¡Cuánto dinero se derrocha en casas y muebles lujosos, en placeres egoístas, en manjares costosos y malsanos, en perniciosos antojos! ¡Cuánto se malgasta en regalos que no aprovechan a nadie! En cosas superfluas y muchas veces perjudiciales.” El ministerio de curación, 159"},
{ref:"Debe haber una hora señalada para cada comida, y entonces cada cual debe comer lo que su organismo requiere, y no ingerir más alimento hasta la comida siguiente.” Consejos sobre el régimen alimenticios 234"},
{ref:"“La naturaleza es el médico de Dios. El aire puro, la alegre luz del sol, las flores y los árboles, los huertos y los viñedos, el ejercicio al aire libre, en medio de estas bellezas, favorecen la salud y la vida”. El ministerio de curación, 203"},
{ref:"“La pérdida de auto-control manifestada al beber té y café, vino, cerveza, ron y aguardiente, y al usar tabaco, opio y otros narcóticos ha producido gran degeneración mental y física, y esta degeneración está en constante aumento.” -RH, 29 de julio de 1884; CH 49. Mente, carácter y personalidad, 149"},
{ref:"“La mente debe ser adiestrada por medio de pruebas diarias hasta lograr hábitos de fidelidad, hasta obtener un sentido de las exigencias de lo recto y del deber por sobre las inclinaciones y los placeres.” Mente, carácter y personalidad, 75"}
];
}else if(window.localStorage.getItem('habito')=='7'){
  this.fondo='#fe5c25';
  this.linea='#8c2400';
this.reflexion = [{ref:"“Las comidas deben ser variadas. Los mismos manjares, preparados del mismo modo, no deben figurar en la mesa, comida tras comida y día tras día. Las comidas se ingieren con mayor gusto y aprovechan mucho más cuando los manjares son variados.” Consejos sobre el régimen alimenticio, 134"},
{ref:"“A la hora del desayuno, el estómago se encuentra en mejor condición para recibir una mayor cantidad de alimento que en la segunda o tercera comida del día. Hágase del desayuno la comida más sustancial del día.” Consejos sobre el régimen alimenticio, 206"},
{ref:"“La regularidad en las comidas es de vital importancia. Debe haber una hora señalada para cada comida, y entonces cada cual debe comer lo que su organismo requiere, y no ingerir más alimento hasta la comida siguiente.” Consejos sobre el régimen alimenticio, 214"},
{ref:"“A fin de lograr una digestión saludable, el alimento debe comerse lentamente. No deben devorarse los alimentos, sino comer de a poco y masticarlos lentamente. El beneficio de la comida no depende tanto de la cantidad sino de su completa digestión; y la satisfacción del gusto no depende tanto de la cantidad de alimentos ingeridos como del tiempo que estos permanecen en la boca.” Consejos sobre el régimen alimenticio, 128"},
{ref:"“Muchos tienen el hábito perjudicial de comer justamente antes de dormir. Se introduce en él cuerpo una nueva cantidad de alimento que pone en movimiento los órganos digestivos para volver a realizar el mismo ciclo de trabajo durante las horas de sueño. El sueño de tales personas por lo general es perturbado por pesadillas, y en la mañana despiertan cansadas.” Consejos sobre el régimen alimenticio, 207"},
{ref:"“En ningún caso deben las comidas ser irregulares. No deben demorarse las comidas por una o dos horas, a fin de acomodarse a las circunstancias, o para que pueda realizarse una cantidad de trabajo. El estómago exige el alimento a la hora de costumbre.” Consejos sobre el régimen alimenticio, 213"},
{ref:"“Hágase la mesa amena y atractiva, al surtirla con las cosas buenas que Dios ha dispensado con tanta generosidad. Sea la hora de comer una hora de contento y alegría.” Consejos sobre el régimen alimenticio, 299"}
];
}else if(window.localStorage.getItem('habito')=='8'){
  this.fondo='#ffdb00';
  this.linea='#746400';
this.reflexion = [{ref:"“Los rostros de los que son generosos y simpáticos resplandecen con el brillo de la verdadera bondad, mientras que los que no albergan pensamientos bondadosos y motivos generosos, expresan en sus rostros los sentimientos que se encuentran en sus corazones”. - Mente, carácter y personalidad II, 501"},
{ref:"“Los que se encierran en sí mismos y no están dispuestos a prestarse para beneficiar a otros mediante amigable compañerismo, pierden muchas bendiciones, porque merced al trato mutuo el entendimiento se pule y refina; por el trato social se formalizan relaciones y amistades que acaban en una unidad de corazón y en una atmósfera de amor agradables a la vista del cielo”. Mente, carácter y personalidad II, 649"},
{ref:"“Si ofrecemos sonrisas, las recibiremos de vuelta; si pronunciamos palabras agradables y alegres, nos serán dichas otra vez”. Mente, carácter y personalidad II, 596"},
{ref:"En un estudio de investigación conducido por Emmons y McCullough (2003) de la Universidad de California y de la Universidad de Miami respectivamente, encontraron que simplemente el escribir acerca de cinco cosas por las que estamos agradecidos puede incrementar en un 25% el nivel de felicidad de las personas."},
{ref:"“Orar es el acto de abrir nuestro corazón a Dios como a un amigo. No es que se necesite esto para que Dios sepa lo que somos, sino a fin de capacitarnos para recibirlo. La oración no baja a Dios hasta nosotros, antes bien nos eleva a él.” El Camino a Cristo, 93"},
{ref:"“Al ser reprimidos, los impulsos de sociabilidad y generosidad se marchitan el corazón sé vuelve desolado y frío... El amor no puede durar mucho si no se le da expresión. No permitáis que el corazón de quienes os acompañen se agoste por falta de bondad y simpatía de parte vuestra”. Mente, carácter y personalidad I, 218"},
{ref:"“Aprovechen toda oportunidad de ir adonde se suela orar. Los que están realmente procurando mantenerse en comunión con Dios asistirán a los cultos de oración, serán fieles en cumplir su deber, y ávidos y ansiosos de cosechar todos los beneficios que puedan alcanzar. Aprovecharán toda oportunidad de colocarse donde puedan recibir rayos de luz celestial”. El Camino a Cristo, 98"}
];
}
  
  }
//obtiene dia
/**
 * Obtiene el dia de la actividad actual
 */
  ionViewWillLoad(){
   this.dia=this.navParams.get('day');
   this.dia= parseInt(this.dia.dia);
   console.log("dia "+ this.dia.dia);
  }

//muere modal
/**
 * cierra el modal
 */
  Cerrar(){
    this.viewCtrl.dismiss();
  }

}
