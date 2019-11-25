webpackJsonp([53],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDescansoadecuadoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * .
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestDescansoadecuadoPage = /** @class */ (function () {
    function TestDescansoadecuadoPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Duermo por lo menos siete horas diarias continuas en la noche?",
            "2-	¿Hago una pausa de cinco minutos para tomar un descanso durante mis actividades diarias?",
            "3-	¿Me duermo antes de las 10 de la noche?",
            "4-	¿Tengo una hora determinada para dormir y despertar?",
            "5- ¿Tengo problemas para conciliar el sueño?",
            "6-	¿Tengo una rutina antes de dormir, de no más de 30 minutos?",
            "7- ¿Hago algún ejercicio de relajación durante el día?",
            "8-	¿Me cuesta mucho levantarme por las mañanas?",
            "9-	¿Me siento cansado, irritado o estresado durante el día?",
            "10- ¿Tengo en mi recámara algo que perturbe mi sueño (televisión, videojuegos, radio, celular, entre otras cosas)? ",
            "11- ¿Aparto un día de la semana para descansar y compartir con mi familia? "];
        this.imagen = ["./assets/imgs/descansoadecuado1.png", "./assets/imgs/descansoadecuado2.png", "./assets/imgs/descansoadecuado3.png", "./assets/imgs/descansoadecuado4.png", "./assets/imgs/descansoadecuado5.png", "./assets/imgs/descansoadecuado6.png", "./assets/imgs/descansoadecuado7.png", "./assets/imgs/descansoadecuado8.png", "./assets/imgs/descansoadecuado9.png", "./assets/imgs/descansoadecuado10.png", "./assets/imgs/descansoadecuado11.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 5, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestDescansoadecuadoPage.prototype.No = function () {
        console.log(this.fechaActual);
        if (this.i == 4 || this.i == 7 || this.i == 8 || this.i == 9) {
            this.resultado = this.resultado + 5;
        }
        else {
            this.resultado = this.resultado + 1;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestDescansoadecuadoPage.prototype.Rara = function () {
        if (this.i == 4 || this.i == 7 || this.i == 8 || this.i == 9) {
            this.resultado = this.resultado + 4;
        }
        else {
            this.resultado = this.resultado + 2;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestDescansoadecuadoPage.prototype.Aveces = function () {
        if (this.i == 4 || this.i == 7 || this.i == 8 || this.i == 9) {
            this.resultado = this.resultado + 3;
        }
        else {
            this.resultado = this.resultado + 3;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestDescansoadecuadoPage.prototype.Frecuentemente = function () {
        if (this.i == 4 || this.i == 7 || this.i == 8 || this.i == 9) {
            this.resultado = this.resultado + 2;
        }
        else {
            this.resultado = this.resultado + 4;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestDescansoadecuadoPage.prototype.Si = function () {
        if (this.i == 4 || this.i == 7 || this.i == 8 || this.i == 9) {
            this.resultado = this.resultado + 1;
        }
        else {
            this.resultado = this.resultado + 5;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestDescansoadecuadoPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Descanso Adecuado",
                resultado: "¡Excelente!",
                contenido: "¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito de un ´´Descanso Adecuado´´ es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ",
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Descanso Adecuado",
                resultado: "¡Muy Bueno!",
                contenido: "¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El hábito de un ´´Descanso Adecuado´´ es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ",
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Descanso Adecuado",
                resultado: "¡Bueno!",
                contenido: "¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito de un ´´Descanso Adecuado´´ es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ",
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Descanso Adecuado",
                resultado: "¡Malo!",
                contenido: "Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de un ´´Descanso Adecuado´´ es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ",
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Descanso Adecuado",
                resultado: "¡Muy Malo!",
                contenido: "¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo!. El hábito de un ´´Descanso Adecuado´´ es el estado momentáneo de reposo, tranquilidad o inactividad, que se realiza en medio del trabajo o de otra actividad para reponer fuerzas físicas, mentales y espirituales. Así como el sueño para reparar el organismo. No tener un Descanso Adecuado puede perjudicar tu salud física, tu estado emocional y tu productividad.  ",
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestDescansoadecuadoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestDescansoadecuadoPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestDescansoadecuadoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestDescansoadecuadoPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestDescansoadecuadoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestDescansoadecuadoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-descansoadecuado',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-descansoadecuado/test-descansoadecuado.html"*/'<!--\n  Generated template for the TestDescansoadecuadoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="page-test-descansoadecuado">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-descansoadecuado/test-descansoadecuado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestDescansoadecuadoPage);
    return TestDescansoadecuadoPage;
}());

//# sourceMappingURL=test-descansoadecuado.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTips1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalTips1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTips1Page = /** @class */ (function () {
    function ModalTips1Page(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tips = [];
        this.tips2 = [];
        //Reflexiones
        this.tips = [{ tip: "Deja un vaso con agua natural listo desde la noche para que no se te olvide Beber Agua Natural al momento de levantarte." },
            { tip: "Dedica una botella especial para tomar agua. Llévala a todas partes y bebe agua natural, aunque no tengas sed." },
            { tip: "Al momento de iniciar a cocinar los alimentos puedes Beber Agua Natural." },
            { tip: "Si no estás acostumbrado a tomar agua, puedes agregar tres rebanadas de limón, fresa, naranja, lima o frutos rojos, por litro, sin añadirle azúcar." },
            { tip: "Antes de cepillarte los dientes bebe un vaso con agua natural." },
            { tip: "Lleva tu botella con agua al lugar donde te ejercites y toma el equivalente a medio vaso o un vaso (100 ml a 250 ml), y repite cada 20 a 30 minutos para mantenerte hidratado/a." },
            { tip: "Lleva tu botella de agua natural contigo al trabajo o escuela y bebe de ella constantemente." }
        ];
        this.tips2 = [{ tip2: "Puedes tomarla tibia añadiendo el jugo de un limón." },
            { tip2: "Rellena tu botella de agua natural cuantas veces sea necesario durante el día para mantenerte hidratado/a." },
            { tip2: "Si comes fuera de tu casa puedes Beber Agua Natural antes de ordenar los alimentos." },
            { tip2: "Pon notas en un lugar visible como tu espejo, refrigerador, puerta, etc. que diga: debo Beber Agua Natural hoy." },
            { tip2: "Programa un recordatorio en tu celular para motivarte a Beber Agua Natural." },
            { tip2: "" },
            { tip2: "En lugar de ordenar refresco o jugo envasado pide agua natural." }
        ];
    }
    //optener dia
    ModalTips1Page.prototype.ionViewWillLoad = function () {
        this.dia = this.navParams.get('day');
        this.dia = parseInt(this.dia.dia);
        console.log("dia " + this.dia.dia);
    };
    //cerrar modal
    ModalTips1Page.prototype.Cerrar = function () {
        this.viewCtrl.dismiss();
    };
    ModalTips1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-tips1',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips1/modal-tips1.html"*/'<!--\n  Generated template for the ModalTips1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="background-color: #26c9dc;">\n  <img src="./assets/imgs/tips.png" id="imgtip">\n  <h6 id="txttips" > {{tips[dia].tip}}</h6>\n  <h6 id="txttips2" > <strong>{{tips2[dia].tip2}}</strong> </h6>\n  <img src="./assets/imgs/icobeberaguablanco.png" id="icobeberaguablanco">\n <img src="./assets/imgs/logohabitos.png" id="logohtips">\n <img src="./assets/imgs/logo.png" id="logotips">\n \n</ion-content>\n<ion-footer>\n      \n  <button ion-button full color="primary" (click)="Cerrar()">¡Listo!</button>\n \n</ion-footer>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips1/modal-tips1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalTips1Page);
    return ModalTips1Page;
}());

//# sourceMappingURL=modal-tips1.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReflexionar1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalReflexionar1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalReflexionar1Page = /** @class */ (function () {
    function ModalReflexionar1Page(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.reflexion = [];
        //Reflexiones
        this.reflexion = [{ ref: "El agua es el componente principal del cuerpo humano: normalmente representa el 60% del peso corporal en hombres adultos, y es ligeramente inferior (50-55%) en mujeres debido a su proporción natural de más grasa corporal. " },
            { ref: "“Si necesitas algo para apagar la sed, el agua pura tomada poco antes o después de la comida es todo lo que la naturaleza requiere. Nunca té, café, cerveza, vino ni ninguna bebida alcohólica. El agua es el mejor líquido de que dispongamos para limpiar los tejidos”. The Review and Herald. 1884" },
            { ref: "“Muchos están viviendo en un estado de violación de las leyes de la salud, y son ignorantes de la relación que sus hábitos de comer, beber y trabajar tienen con su salud... Si los que sufren solamente recurrieran a los medios sencillos que han descuidado—el uso del agua y el régimen alimenticio debido—, la naturaleza tendría la clase de ayuda que necesita, y que debiera haber tenido hacía tiempo.” Consejos Sobre el Régimen Alimenticio. Pág. 359; 1864. " },
            { ref: "“Ingerida en cantidades suficientes, el agua suple las necesidades del organismo, y ayuda a la naturaleza a resistir a la enfermedad. Aplicada externamente, es uno de los medios más sencillo y eficaces para regularizar la circulación de la sangre”. El Ministerio de Curación. Pág. 181; 1905." },
            { ref: "El cerebro y los músculos son aproximadamente un 75% agua. La sangre y los riñones se componen en un 81% de agua. El 71% de tu hígado es agua y el 22% de tus huesos es agua." },
            { ref: "Cuando pierdes menos del 1% del agua de tu cuerpo, este comienza a necesitar agua de manera urgente porque se siente deshidratado." },
            { ref: "“La vida al aire libre es buena para el cuerpo y la mente. Es la medicina que Dios ha diseñado para la restauración de la salud. El aire puro, el agua limpia, la luz del sol y los hermosos parajes naturales son sus medios para devolverle la salud al enfermo, en armonía con la naturaleza”. Consejos Sobre el Régimen Alimenticio. Pág. 210; 1880." }
        ];
    }
    //obtiene dia
    ModalReflexionar1Page.prototype.ionViewWillLoad = function () {
        this.dia = this.navParams.get('day');
        this.dia = parseInt(this.dia.dia);
        console.log("dia " + this.dia.dia);
    };
    //muere modal
    ModalReflexionar1Page.prototype.Cerrar = function () {
        this.viewCtrl.dismiss();
    };
    ModalReflexionar1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-reflexionar1',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar1/modal-reflexionar1.html"*/'<!--\n  Generated template for the ModalReflexionar1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content style="background-color: #26c9dc;">\n <img src="./assets/imgs/parareflexionar.png" id="parareflexionarmodal">\n <img src="./assets/imgs/logohabitos.png" id="logohpr">\n <img src="./assets/imgs/logo.png" id="logopr">\n <h6 id="txtreflexion" > {{reflexion[dia].ref}}</h6>\n<img src="./assets/imgs/habito1/parareflexionar{{dia+1}}.png" id="imgreflexion">\n\n</ion-content>\n<ion-footer id="feet">\n      \n  <button ion-button full color="primary" (click)="Cerrar()">¡ENTENDIDO!</button>\n \n</ion-footer>\n\n\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar1/modal-reflexionar1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalReflexionar1Page);
    return ModalReflexionar1Page;
}());

//# sourceMappingURL=modal-reflexionar1.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compromisohbt1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_principal_menu_principal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Compromisohbt1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Compromisohbt1Page = /** @class */ (function () {
    function Compromisohbt1Page(navCtrl, rest, loadingCtrl, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.userData = { "id": window.localStorage.getItem('id'), "id_habito": 1, "registro": "aceptohbt1" };
    }
    Compromisohbt1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Compromisohbt1Page');
    };
    Compromisohbt1Page.prototype.goToAcepto = function () {
        var _this = this;
        this.showLoader();
        this.rest.acepto(this.userData).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            window.localStorage.setItem("actividad", _this.data.actividad);
            console.log(_this.data.exito, _this.data.actividad);
            if (_this.data.exito == "Ya has realizado la actividad del día de hoy") {
                _this.presentToast("No puedes realizar esta actividad hoy ¡Vuelve mañana!");
                _this.gotomenu();
            }
            else {
                _this.presentToast("¡Listo! Hemos terminado por hoy, te esperamos mañana");
                _this.gotomenu();
            }
            _this.viewCtrl.dismiss();
        });
    };
    Compromisohbt1Page.prototype.gotomenu = function () {
        var _this = this;
        window.setTimeout(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]); }, 3000);
    };
    Compromisohbt1Page.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    Compromisohbt1Page.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Compromisohbt1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-compromisohbt1',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt1/compromisohbt1.html"*/'<!--\n  Generated template for the Compromisohbt1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="page-compromisohbt1" >\n <div id="logoscompromiso">\n   <img id="logocompromiso" src="./assets/imgs/logo.png">\n   <img id="logohabitoscompromiso" src="./assets/imgs/logohabitos.png">\n </div>\n <p id="compromiso1txt">He leído y entendido la actividad para este día.\n  Me comprometo a realizarlas porque <strong>yo Quiero ¡Vivir Sano!</strong>\n</p> \n<button id="btnaceptocompromiso" ion-button color="primary" (click)="goToAcepto()">ACEPTO</button>\n<img id="imgbotella" src="./assets/imgs/habito1/imgcompromiso.png">\n</ion-content>\n\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt1/compromisohbt1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ViewController */]])
    ], Compromisohbt1Page);
    return Compromisohbt1Page;
}());

//# sourceMappingURL=compromisohbt1.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluacionImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_imc_modal_imc__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EvaluacionImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvaluacionImcPage = /** @class */ (function () {
    function EvaluacionImcPage(navCtrl, modal, platform, loadingCrtl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.loadingCrtl = loadingCrtl;
        this.viewCtrl = viewCtrl;
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    }
    EvaluacionImcPage.prototype.goToCalculoIMC = function () {
        var modalIMC = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__modal_imc_modal_imc__["a" /* ModalImcPage */]);
        modalIMC.present();
    };
    EvaluacionImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EvaluacionImcPage');
    };
    EvaluacionImcPage.prototype.presentLoading = function () {
        this.loader = this.loadingCrtl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    EvaluacionImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evaluacion-imc',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/evaluacion-imc/evaluacion-imc.html"*/'<!--\n  Generated template for the EvaluacionImcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Evalua tu IMC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="page-IMC">\n  \n   \n  <img src="./assets/imgs/evaluatusalud.png" id="evaluatusalud">\n  <h3 id="textoIMC">EVALÚA TU ÍNDICE DE <br> MASA CORPORAL Y TU <br>PERÍMETRO ABDOMINAL</h3>\n  <p id="imctexto">El Índice de Masa Corporal (IMC) es el resultado de la relación entre tu peso y estatura, y te ayuda a identificar el grado de riesgo asociado con la obesidad. \n    El Perímetro Abdominal es una medida antropométrica que permite determinar la grasa acumulada en el cuerpo. Tu salud es una razón de peso, ¡Te invitamos a calcular el tuyo!</p>\n\n    <button ion-button id="btnCalculoIMC" (click)="goToCalculoIMC()">¡CALCULA <br>TU IMC!</button>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/evaluacion-imc/evaluacion-imc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], EvaluacionImcPage);
    return EvaluacionImcPage;
}());

//# sourceMappingURL=evaluacion-imc.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultado_imc_resultado_imc__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalImcPage = /** @class */ (function () {
    function ModalImcPage(navCtrl, navParams, view, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.loadingCtrl = loadingCtrl;
        this.IMC = { "peso": "", "talla": "", "cintura": "", "sexo": "" };
    }
    ModalImcPage.prototype.calcularIMC = function () {
        var condicion;
        var riesgo;
        var peso = this.IMC.peso;
        var talla = this.IMC.talla;
        var cintura = this.IMC.cintura;
        var sexo = this.IMC.sexo;
        //calcular imc
        talla = talla * talla;
        var resultadoIMC = peso / talla;
        //calcular condicion IMC
        if (resultadoIMC < 18.5) {
            condicion = "BAJO PESO";
        }
        else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.99) {
            condicion = "PESO NORMAL";
        }
        else if (resultadoIMC >= 25 && resultadoIMC <= 29.99) {
            condicion = "SOBREPESO";
        }
        else if (resultadoIMC >= 30 && resultadoIMC <= 34.99) {
            condicion = "OBESIDAD MODERADA";
        }
        else if (resultadoIMC >= 35 && resultadoIMC <= 39.99) {
            condicion = "OBESIDAD SEVERA";
        }
        else if (resultadoIMC >= 40) {
            condicion = "OBESIDAD MÓRBIDA";
        }
        //calcular riesgo segun medida de cintura y sexo
        if (sexo == "masculino" && cintura < 90) {
            riesgo = "RIESGO BAJO";
        }
        else if (sexo == "masculino" && cintura >= 90 && cintura <= 102) {
            riesgo = "RIESGO MODERADO";
        }
        else if (sexo == "masculino" && cintura > 102) {
            riesgo = "RIESGO ALTO";
        }
        if (sexo == "femenino" && cintura < 80) {
            riesgo = "RIESGO BAJO";
        }
        else if (sexo == "femenino" && cintura >= 80 && cintura <= 88) {
            riesgo = "RIESGO MODERADO";
        }
        else if (sexo == "femenino" && cintura > 88) {
            riesgo = "RIESGO ALTO";
        }
        //guardo las variables en variables del sistema
        window.localStorage.setItem('imc', resultadoIMC);
        window.localStorage.setItem('condicion', condicion);
        window.localStorage.setItem('riesgo', riesgo);
        window.localStorage.setItem('cintura', cintura);
        this.goToResultadoIMC();
    };
    ModalImcPage.prototype.goToResultadoIMC = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resultado_imc_resultado_imc__["a" /* ResultadoImcPage */]);
    };
    ModalImcPage.prototype.presentloading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    ModalImcPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalImcPage');
    };
    ModalImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-imc',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-imc/modal-imc.html"*/'<!--\n  Generated template for the ModalImcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Evalua tu IMC</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n\n<ion-content id="IMC-modal">\n    <img src="./assets/imgs/evaluatusalud.png" id="evaluatusalud">\n    <h3 id="textoIMC">INTRODUCE TUS DATOS</h3>\n\n    <ion-list id="form2">\n        <ion-item>\n            <ion-label style="color:#96005a; font-size:110%"  stacked><strong>Peso</strong></ion-label>\n            <ion-input type="number" placeholder="Kilogramos"  [(ngModel)]="IMC.peso"></ion-input>\n\n          </ion-item>\n  \n          <ion-item>\n              <ion-label style="color:#96005a; font-size:110%"  stacked><strong>Talla</strong></ion-label>\n              <ion-input type="number" placeholder="Metros" [(ngModel)]="IMC.talla"></ion-input>\n            </ion-item>\n            \n          \n            <ion-item>\n                <ion-label style="color:#96005a; font-size:110%" stacked><Strong>Cintura</Strong></ion-label>\n                <ion-input type="number" placeholder="Centimetros" [(ngModel)]="IMC.cintura" ></ion-input>\n              </ion-item>\n            \n            <ion-item>\n                <ion-label style="color:#96005a; font-size:110%" stacked><strong>Sexo</strong></ion-label>\n                <ion-select [(ngModel)]="IMC.sexo">\n                    <ion-option value="masculino">Masculino</ion-option>\n                    <ion-option value="femenino">Femenino</ion-option>\n                   \n                  </ion-select>\n              </ion-item>\n\n              <button ion-button block (click)="calcularIMC()">CALCULAR</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-imc/modal-imc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ModalImcPage);
    return ModalImcPage;
}());

//# sourceMappingURL=modal-imc.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoImcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perimetro_abdominal_perimetro_abdominal__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResultadoImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadoImcPage = /** @class */ (function () {
    function ResultadoImcPage(platform, loadingCtrl, navCtrl, screenOrientation, navParams) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.screenOrientation = screenOrientation;
        this.navParams = navParams;
        this.lista1 = [];
        this.screenOrientation.lock('portrait');
        this.presentLoading();
        platform.ready().then(function () {
            //Seleccionar fondos\
            if (window.localStorage.getItem('sexo') == "masculino") {
                _this.fondoimc = "./assets/imgs/fimch.jpg";
            }
            else if (window.localStorage.getItem('sexo') == "femenino") {
                _this.fondoimc = "./assets/imgs/fimcm.jpg";
            }
            //asignnar datos a la variables
            _this.nombre = window.localStorage.getItem('nombre');
            _this.IMC = Number(window.localStorage.getItem('imc')).toFixed(1);
            _this.condicion = window.localStorage.getItem('condicion');
            //seleccionar listas y recomendacion 
            if (window.localStorage.getItem('condicion') == 'BAJO PESO') {
                _this.lista1 = [{ titulo: "Trastornos del sistema inmunológico (Las defensas de tu cuerpo)" },
                    { titulo: "Pérdida de masa ósea" },
                    { titulo: "Anemia por deficiencia de hierro" },
                    { titulo: "Problemas cardíacos" },
                    { titulo: "Problemas de fertilidad" },
                    { titulo: "Mayor riesgo de sufrir osteoporosis" },
                    { titulo: "Ausencia de período menstrual en mujeres (Amenorrea)" },
                    { titulo: "Mayor riesgo de sufrir infecciones" }];
                _this.recomendacion = 'Tienes un BAJO PESO ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            if (window.localStorage.getItem('condicion') == 'PESO NORMAL') {
                _this.lista1 = [];
                _this.recomendacion = 'Tienes un RIESGO BAJO  y es lo MEJOR PARA TU SALUD, esto puede brindarte cierta protección. Un estilo de vida saludable te ayuda a mantener un peso normal. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
            }
            if (window.localStorage.getItem('condicion') == 'SOBREPESO') {
                _this.lista1 = [{ titulo: 'Diabetes' },
                    { titulo: 'Presión arterial alta (hipertensión)' },
                    { titulo: 'Insuficiencia cardíaca' },
                    { titulo: 'Algunos tipos de cáncer' },
                    { titulo: 'Estrés' },
                    { titulo: 'Ansiedad' },
                    { titulo: 'Depresión' },
                    { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
                    { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
                    { titulo: 'Niveles altos de LDL (Colesterol malo)' },
                    { titulo: 'Síndrome metabólico' },
                    { titulo: 'Infartos al corazón' },
                    { titulo: 'Gastritis' },
                    { titulo: 'Reflujo gastroesofágico' }
                ];
                _this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD MODERADA') {
                _this.lista1 = [{ titulo: 'Diabetes' },
                    { titulo: 'Presión arterial alta (hipertensión)' },
                    { titulo: 'Insuficiencia cardíaca' },
                    { titulo: 'Algunos tipos de cáncer' },
                    { titulo: 'Estrés' },
                    { titulo: 'Ansiedad' },
                    { titulo: 'Depresión' },
                    { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
                    { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
                    { titulo: 'Niveles altos de LDL (Colesterol malo)' },
                    { titulo: 'Síndrome metabólico' },
                    { titulo: 'Infartos al corazón' },
                    { titulo: 'Gastritis' },
                    { titulo: 'Reflujo gastroesofágico' }
                ];
                _this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO MODERADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD SEVERA') {
                _this.lista1 = [{ titulo: 'Diabetes' },
                    { titulo: 'Presión arterial alta (hipertensión)' },
                    { titulo: 'Insuficiencia cardíaca' },
                    { titulo: 'Algunos tipos de cáncer' },
                    { titulo: 'Estrés' },
                    { titulo: 'Ansiedad' },
                    { titulo: 'Depresión' },
                    { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
                    { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
                    { titulo: 'Niveles altos de LDL (Colesterol malo)' },
                    { titulo: 'Síndrome metabólico' },
                    { titulo: 'Infartos al corazón' },
                    { titulo: 'Gastritis' },
                    { titulo: 'Reflujo gastroesofágico' }
                ];
                _this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO SEVERO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD MÓRBIDA') {
                _this.lista1 = [{ titulo: 'Diabetes' },
                    { titulo: 'Presión arterial alta (hipertensión)' },
                    { titulo: 'Insuficiencia cardíaca' },
                    { titulo: 'Algunos tipos de cáncer' },
                    { titulo: 'Estrés' },
                    { titulo: 'Ansiedad' },
                    { titulo: 'Depresión' },
                    { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
                    { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
                    { titulo: 'Niveles altos de LDL (Colesterol malo)' },
                    { titulo: 'Síndrome metabólico' },
                    { titulo: 'Infartos al corazón' },
                    { titulo: 'Gastritis' },
                    { titulo: 'Reflujo gastroesofágico' }
                ];
                _this.recomendacion = 'Te encuentras en un RIESGO AUMENTADO MUY SEVERO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            //Seleccionar imagen
            if (window.localStorage.getItem('condicion') == 'BAJO PESO' && window.localStorage.getItem('sexo') == 'femenino') {
                _this.imagenpeso = './assets/imgs/bajopesom.png';
            }
            if (window.localStorage.getItem('condicion') == 'BAJO PESO' && window.localStorage.getItem('sexo') == 'masculino') {
                _this.imagenpeso = './assets/imgs/bajopesoh.png';
            }
            if (window.localStorage.getItem('condicion') == 'PESO NORMAL' && window.localStorage.getItem('sexo') == 'femenino') {
                _this.imagenpeso = './assets/imgs/pesonormalm.png';
            }
            if (window.localStorage.getItem('condicion') == 'PESO NORMAL' && window.localStorage.getItem('sexo') == 'masculino') {
                _this.imagenpeso = './assets/imgs/pesonormalh.png';
            }
            if (window.localStorage.getItem('condicion') == 'SOBREPESO' && window.localStorage.getItem('sexo') == 'femenino') {
                _this.imagenpeso = './assets/imgs/sobrepesom.png';
            }
            if (window.localStorage.getItem('condicion') == 'SOBREPESO' && window.localStorage.getItem('sexo') == 'masculino') {
                _this.imagenpeso = './assets/imgs/sobrepesoh.png';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD MODERADA' && window.localStorage.getItem('sexo') == 'femenino') {
                _this.imagenpeso = './assets/imgs/obesom.png';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD MODERADA' && window.localStorage.getItem('sexo') == 'masculino') {
                _this.imagenpeso = './assets/imgs/obesoh.png';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD SEVERA' && window.localStorage.getItem('sexo') == 'femenino') {
                _this.imagenpeso = './assets/imgs/obesoseverom.png';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD SEVERA' && window.localStorage.getItem('sexo') == 'masculino') {
                _this.imagenpeso = './assets/imgs/obesoseveroh.png';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD MÓRBIDA' && window.localStorage.getItem('sexo') == 'femenino') {
                _this.imagenpeso = './assets/imgs/obesomorbidom.png';
            }
            if (window.localStorage.getItem('condicion') == 'OBESIDAD MÓRBIDA' && window.localStorage.getItem('sexo') == 'masculino') {
                _this.imagenpeso = './assets/imgs/obesomorbidoh.png';
            }
            sessionStorage.setItem('listo', '1');
        });
        this.loader.dismiss();
    }
    ResultadoImcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadoImcPage');
    };
    ResultadoImcPage.prototype.goToPerimetroAbdominal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perimetro_abdominal_perimetro_abdominal__["a" /* PerimetroAbdominalPage */]);
    };
    ResultadoImcPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.loader.present();
    };
    ResultadoImcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultado-imc',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/resultado-imc/resultado-imc.html"*/'<!--\n  Generated template for the ResultadoImcPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>IMC</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content  id="page-resultadoimc" [ngStyle]="{\'background-image\': \'url(\' + fondoimc + \')\'}">\n \n<img id="evaluatusaludb" src="./assets/imgs/evaluatusaludb.png">\n<img id="manocorazon" src="./assets/imgs/manocorazon.png">\n<img id="manocruz" src="./assets/imgs/manocruz.png">\n<h3 id="holaimc">¡Hola<span style="color:yellow"> {{nombre}}</span>!</h3>\n<img id="peso" [src]="imagenpeso">\n<div id="tabla">\n  <H4 id="tuimc">TU IMC ES</H4>\n  <h3  style="color:yellow; font-size:250%">{{IMC}}</h3>\n</div>\n<div id="condicion"><p>De acuerdo a tu <strong>IMC</strong><br>estas en el rango de:</p>\n<h3 style="margin:auto;color:yellow;font-family: \'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif;margin-top:-5%;\nwidth:60%;">{{condicion}}</h3></div>\n<p style="color:white; width:80%; position:relative; margin-left:10%;margin-top:10%;"><strong>De acuerdo a los datos puedes padecer una o más enfermedades presentadas a continuación:</strong></p>\n\n<div id="lista">\n        <ion-list style="position:relative; width:70%; display:inline-block;color:yellow;margin:auto">\n              <li *ngFor="let item of lista1" >\n                   -{{ item.titulo }}\n                   <br><br>\n              </li> \n        </ion-list>\n        \n     \n      </div>\n<p id="recomendacion">{{recomendacion}}</p>\n<button ion-button color="light" outline (click)="goToPerimetroAbdominal()">Siguiente</button>\n</ion-content>\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/resultado-imc/resultado-imc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResultadoImcPage);
    return ResultadoImcPage;
}());

//# sourceMappingURL=resultado-imc.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*import { HttpClient, HttpHeaders } from '@angular/common/http';*/




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'http://qvs.unav.edu.mx/ws/';
var RestProvider = /** @class */ (function () {
    function RestProvider(http, httpPlugin) {
        this.http = http;
        this.httpPlugin = httpPlugin;
        console.log('Hello RestProvider Provider');
    }
    //coneccion login al WS
    RestProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'login.php', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //coneccion de registro al WS
    RestProvider.prototype.registro = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers2 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers2.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'registro.php', JSON.stringify(credentials), { headers: headers2 })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //coneccion registro test agua al WS
    RestProvider.prototype.registrotestagua = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers3 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers3.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'registraresultados.php', JSON.stringify(credentials), { headers: headers3 })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    //coneccion al WS
    RestProvider.prototype.acepto = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers3 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers3.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'registraresultados.php', JSON.stringify(credentials), { headers: headers3 })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.reg = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers3 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers3.append('Content-Type', 'application/json');
            _this.httpPlugin.setHeader("", "content-type", "application/json");
            _this.httpPlugin.get(apiUrl + 'registro.php', JSON.stringify(credentials), headers3)
                .then(function (data) {
                resolve(data.data.json());
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
            })
                .catch(function (error) {
                reject(error.error);
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerimetroAbdominalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_principal_menu_principal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerimetroAbdominalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerimetroAbdominalPage = /** @class */ (function () {
    function PerimetroAbdominalPage(navCtrl, loadingCtrl, platform, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.lista = [];
        this.screenOrientation.lock('portrait');
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
        this.nombre = window.localStorage.getItem('nombre');
        this.perimetro = window.localStorage.getItem('cintura');
        //Seleccionar fondos\
        if (window.localStorage.getItem('sexo') == "masculino") {
            this.fondoperimetro = "./assets/imgs/fimch.jpg";
        }
        else if (window.localStorage.getItem('sexo') == "femenino") {
            this.fondoperimetro = "./assets/imgs/fimcm.jpg";
        }
        //llenar lista
        this.lista = [{ titulo: 'Diabetes' },
            { titulo: 'Presión arterial alta (hipertensión)' },
            { titulo: 'Insuficiencia cardíaca' },
            { titulo: 'Algunos tipos de cáncer' },
            { titulo: 'Estrés' },
            { titulo: 'Ansiedad' },
            { titulo: 'Depresión' },
            { titulo: 'Niveles altos de colesterol y triglicéridos en la sangre' },
            { titulo: 'Niveles bajos de HDL (Colesterol bueno)' },
            { titulo: 'Niveles altos de LDL (Colesterol malo)' },
            { titulo: 'Síndrome metabólico' },
            { titulo: 'Infartos al corazón' },
            { titulo: 'Gastritis' },
            { titulo: 'Reflujo gastroesofágico' }
        ];
        //color, y riesgo
        if (window.localStorage.getItem('sexo') == "femenino") {
            this.color = '#FEE900';
            if (this.perimetro < 80) {
                this.riesgo = 'RIESGO BAJO';
                this.recomendacion = 'Tienes un RIESGO BAJO y es lo MEJOR PARA TU SALUD, esto puede brindarte cierta protección. Un estilo de vida saludable te ayuda a mantenerte en niveles saludables. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
            }
            else if (this.perimetro >= 80 && this.perimetro <= 88) {
                this.riesgo = 'RIESGO MODERADO';
                this.recomendacion = 'Te encuentras en un RIESGO MODERADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            else if (this.perimetro > 88) {
                this.riesgo = 'RIESGO ALTO';
                this.recomendacion = 'Te encuentras en un RIESGO ALTO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
        }
        else if (window.localStorage.getItem('sexo') == 'masculino') {
            this.color = '#FD0101';
            if (this.perimetro < 90) {
                this.riesgo = 'RIESGO BAJO';
                this.recomendacion = 'Tienes un RIESGO BAJO y es lo MEJOR PARA TU SALUD, esto puede brindarte cierta protección. Un estilo de vida saludable te ayuda a mantenerte en niveles saludables. ¡Consulta con un profesional de la salud! para que pueda brindarte más consejos.';
            }
            else if (this.perimetro >= 90 && this.perimetro <= 102) {
                this.riesgo = 'RIESGO MODERADO';
                this.recomendacion = 'Te encuentras en un RIESGO MODERADO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
            else if (this.perimetro > 102) {
                this.riesgo = 'RIESGO ALTO';
                this.recomendacion = 'Te encuentras en un RIESGO ALTO te aconsejamos reducirlo. ¡Consulta a tu médico!, él o ella calculará tus riesgos y decidirá si requieres algún tratamiento.';
            }
        }
        console.log(this.lista);
    }
    PerimetroAbdominalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerimetroAbdominalPage');
    };
    PerimetroAbdominalPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    PerimetroAbdominalPage.prototype.goToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
    };
    PerimetroAbdominalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perimetro-abdominal',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/perimetro-abdominal/perimetro-abdominal.html"*/'<!--\n  Generated template for the PerimetroAbdominalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Perimetro Abdominal</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content  id="page-perimetro-abdominal" [ngStyle]="{\'background-image\': \'url(\' + fondoperimetro + \')\'}">\n  <img id="evaluatusaludb" src="./assets/imgs/evaluatusaludb.png">\n<img id="manocorazon2" src="./assets/imgs/manocorazon.png">\n<img id="manocruz2" src="./assets/imgs/manocruz.png">\n<br><br>\n<h3 id="holaimc">¡Hola<span style="color:yellow"> {{nombre}}</span>!</h3>\n<br>\n<br>\n<h3 id="perimetrotxt" style="color:white" ><strong>PERIMETRO <br>\nABDOMINAL</strong></h3>\n\n<br>\n<p style="color:white;font-size:110%">Tu perímetro abdominal es:</p>\n<h1 style="font-size:300%" [ngStyle]="{\'color\': \'\' + color + \'\'}"> {{perimetro}}</h1>\n\n<p style="color:white; font-size:120%">De acuerdo al dato tienes un</p>\n\n<h1 [ngStyle]="{\'color\':\'\'+color+\'\' }">{{riesgo}}</h1>\n<p style="color:white; font-size:120%; width:80%;margin:auto">de padecer una o más de las siguientes enfermedades:</p>\n<br>\n<div>\n  <ion-list style="position:relative; width:70%; display:inline-block;margin:auto; font-size:110%" [ngStyle]="{\'color\':\'\'+color+\'\'}">\n        <li *ngFor="let item of lista" >\n             -{{ item.titulo }}\n             <br><br>\n        </li> \n  </ion-list>\n  \n</div>\n\n<p style="color:white; width:80%;margin:auto">\n  {{recomendacion}} \n</p>\n<br>\n\n\n<button ion-button color="light" outline (click)=\'goToMenu()\'>Siguiente</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/perimetro-abdominal/perimetro-abdominal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], PerimetroAbdominalPage);
    return PerimetroAbdominalPage;
}());

//# sourceMappingURL=perimetro-abdominal.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_autocontrol_test_autocontrol__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_serfeliz_test_serfeliz__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_desayunarmas_test_desayunarmas__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_descansoadecuado_test_descansoadecuado__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_actividadfisica_test_actividadfisica__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_biencomer_test_biencomer__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_actitudpositiva_test_actitudpositiva__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__introtestagua_introtestagua__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, platform, loadingCrtl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCrtl = loadingCrtl;
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    }
    TestPage.prototype.goToTestAgua = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__introtestagua_introtestagua__["a" /* IntrotestaguaPage */]);
    };
    TestPage.prototype.goToTestActitudPositiva = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__test_actitudpositiva_test_actitudpositiva__["a" /* TestActitudpositivaPage */]);
    };
    TestPage.prototype.goToTestBienComer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__test_biencomer_test_biencomer__["a" /* TestBiencomerPage */]);
    };
    TestPage.prototype.goToActividadFisica = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__test_actividadfisica_test_actividadfisica__["a" /* TestActividadfisicaPage */]);
    };
    TestPage.prototype.goToDescansoAdecuado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test_descansoadecuado_test_descansoadecuado__["a" /* TestDescansoadecuadoPage */]);
    };
    TestPage.prototype.goToAutoControl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__test_autocontrol_test_autocontrol__["a" /* TestAutocontrolPage */]);
    };
    TestPage.prototype.goToDesayunarMas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_desayunarmas_test_desayunarmas__["a" /* TestDesayunarmasPage */]);
    };
    TestPage.prototype.goToSerFeliz = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__test_serfeliz_test_serfeliz__["a" /* TestSerfelizPage */]);
    };
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage.prototype.presentLoading = function () {
        this.loader = this.loadingCrtl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar  color=\'primary\'>\n      <ion-title>Evaluación de Estilo de Vida</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n<ion-content id="page-test">\n  <img id="evaluatusaludb"  src="./assets/imgs/evaluatusaludb.png">\n<br>\n<br>\n\n\n  <div class="test">\n    <input class="logostest" src="./assets/imgs/beberagua.png"type="image" (click)="goToTestAgua()">\n    <p style="color:#2c2f88; line-height:0%"><strong>Test 1 de 8</strong></p>\n   \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/actitudpositiva.png"type="image" (click)="goToTestActitudPositiva()">\n      <p style="color:#ed197a; line-height:0%"><strong>Test 2 de 8</strong></p>\n     \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/biencomer.png"type="image" (click)="goToTestBienComer()">\n      <p style="color:#3cb64b; line-height:0%"><strong>Test 3 de 8</strong></p>\n            \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/actividadfisica.png"type="image" (click)="goToActividadFisica()">\n      <p style="color:#ec2028; line-height:0%"><strong>Test 4 de 8</strong></p>\n      \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/descansoadecuado.png"type="image"(click)="goToDescansoAdecuado()">\n      <p style="color:#17aa9d; line-height:0%"><strong>Test 5 de 8</strong></p>\n       \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/autocontrol.png"type="image" (click)="goToAutoControl()">\n      <p style="color:#942a8f; line-height:0%" ><strong>Test 6 de 8</strong></p>\n       \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/desayunarmas.png" type="image" (click)="goToDesayunarMas()">\n      <p style="color:#f15b28; line-height:0%"><strong>Test 7 de 8</strong></p>\n     \n  </div>\n  <div class="test">\n      <input class="logostest" src="./assets/imgs/serfeliz.png" type="image" (click)="goToSerFeliz()">\n      <p style="color:#ffde16; line-height:0%"><strong>Test 8 de 8</strong></p>\n     \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* LoadingController */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestAutocontrolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestAutocontrolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestAutocontrolPage = /** @class */ (function () {
    function TestAutocontrolPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Soy moderado en la cantidad de porciones de alimentos que consumo durante el día?",
            "2-	¿Soy moderado en la cantidad de porciones de bebidas que consumo durante el día?",
            "3-	¿Evito el consumo de tabaco?",
            "4-	¿Evito el consumo de alimentos no nutritivos (frituras, bebidas azucaradas, grasas saturadas, harinas refinadas, embutidos, alimentos altos en sodio y azúcar)?",
            "5- ¿Evito el consumo de bebidas embriagantes?",
            "6-	¿Distribuyo mi tiempo en las diferentes actividades del día para llevar una vida balanceada?",
            "7- ¿Evito el consumo de alimentos entre cada comida?",
            "8-	¿Evito consumir bebidas azucaradas entre cada comida?",
            "9-	¿Me sujeto a un presupuesto de gastos mensuales de acuerdo a mis ingresos?",
            "10- ¿Cuido el medio ambiente que me rodea tirando la basura y desechos en su respectivo bote?",
            "11- ¿Evito cualquier tipo de adicciones (drogas, pornografía, juegos, internet, aparatos electrónicos)?",
            "12- ¿Tengo la fuerza de voluntad necesaria para llevar una vida más saludable?"];
        this.imagen = ["./assets/imgs/autocontrol1.png", "./assets/imgs/autocontrol2.png", "./assets/imgs/autocontrol3.png", "./assets/imgs/autocontrol4.png", "./assets/imgs/autocontrol5.png", "./assets/imgs/autocontrol6.png", "./assets/imgs/autocontrol7.png", "./assets/imgs/autocontrol8.png", "./assets/imgs/autocontrol9.png", "./assets/imgs/autocontrol10.png", "./assets/imgs/autocontrol11.png", "./assets/imgs/autocontrol12.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 6, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestAutocontrolPage.prototype.No = function () {
        console.log(this.fechaActual);
        this.resultado = this.resultado + 1;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 12) {
            this.goToTest();
        }
    };
    TestAutocontrolPage.prototype.Rara = function () {
        this.resultado = this.resultado + 2;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 12) {
            this.goToTest();
        }
    };
    TestAutocontrolPage.prototype.Aveces = function () {
        this.resultado = this.resultado + 3;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 12) {
            this.goToTest();
        }
    };
    TestAutocontrolPage.prototype.Frecuentemente = function () {
        this.resultado = this.resultado + 4;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 12) {
            this.goToTest();
        }
    };
    TestAutocontrolPage.prototype.Si = function () {
        this.resultado = this.resultado + 5;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 12) {
            this.goToTest();
        }
    };
    TestAutocontrolPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Auto-Control",
                resultado: "¡Excelente!",
                contenido: " ¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable. El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. ",
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Auto-Control",
                resultado: "¡Muy Bueno!",
                contenido: " ¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. ",
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Auto-Control",
                resultado: "¡Bueno!",
                contenido: "¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.  ",
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Auto-Control",
                resultado: "¡Malo!",
                contenido: " Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El ´´Auto-control´´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable.  ",
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Auto-Control",
                resultado: "¡Muy Malo!",
                contenido: " ¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El ´Auto-control´ es ejercer el dominio propio y la fuerza de voluntad para evitar lo nocivo y hacer uso correcto de lo beneficioso. Debes tener auto-control con los alimentos, las bebidas, el tiempo, el dinero, los recursos, y hasta con el medio ambiente; asimismo, evitar cualquier tipo de adicciones. Practicar este hábito de “Auto-control” te ayudará a mantener una mente clara y alerta y un cuerpo saludable. ",
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestAutocontrolPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestAutocontrolPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestAutocontrolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestAutocontrolPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestAutocontrolPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestAutocontrolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-autocontrol',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-autocontrol/test-autocontrol.html"*/'<!--\n  Generated template for the TestAutocontrolPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="page-test-autocontrol">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-autocontrol/test-autocontrol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestAutocontrolPage);
    return TestAutocontrolPage;
}());

//# sourceMappingURL=test-autocontrol.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestSerfelizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestSerfelizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestSerfelizPage = /** @class */ (function () {
    function TestSerfelizPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Disfruto de momentos agradables en el día?",
            "2-	¿Me considero una persona feliz?",
            "3-	¿Tengo una buena relación con Dios?",
            "4-	¿Mantengo una comunicación constante con Dios mediante la oración o la meditación?",
            "5- ¿Doy apoyo a las personas que lo necesitan?",
            "6-	¿Doy abrazos a los miembros de mi familia y/o amigos?",
            "7- ¿Afronto mis problemas confiando plenamente en la dirección de Dios?",
            "8-	¿Participo en un grupo de apoyo donde me siento querido y aceptado?",
            "9-	¿Reflexiono en la Palabra de Dios al menos 15 minutos al día?",
            "10- ¿Comparto mi alegría con las demás personas?"];
        this.imagen = ["./assets/imgs/serfeliz1.png", "./assets/imgs/serfeliz2.png", "./assets/imgs/serfeliz3.png", "./assets/imgs/serfeliz4.png", "./assets/imgs/serfeliz5.png", "./assets/imgs/serfeliz6.png", "./assets/imgs/serfeliz7.png", "./assets/imgs/serfeliz8.png", "./assets/imgs/serfeliz9.png", "./assets/imgs/serfeliz10.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 8, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestSerfelizPage.prototype.No = function () {
        console.log(this.fechaActual);
        this.resultado = this.resultado + 1;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestSerfelizPage.prototype.Rara = function () {
        this.resultado = this.resultado + 2;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestSerfelizPage.prototype.Aveces = function () {
        this.resultado = this.resultado + 3;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestSerfelizPage.prototype.Frecuentemente = function () {
        this.resultado = this.resultado + 4;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestSerfelizPage.prototype.Si = function () {
        this.resultado = this.resultado + 5;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestSerfelizPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Ser Feliz",
                resultado: "¡Excelente!",
                contenido: "¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable.  El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Ser Feliz",
                resultado: "¡Muy Bueno!",
                contenido: "¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.  Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Ser Feliz",
                resultado: "¡Bueno!",
                contenido: "¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Ser Feliz",
                resultado: "¡Malo!",
                contenido: "Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás.  Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Ser Feliz",
                resultado: "¡Muy Malo!",
                contenido: "¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de ´´Ser Feliz´´ se define como un estado de armonía con Dios el Creador que proporciona gozo, paz, realización y que se obtiene por medio de una plena confianza y esperanza en Él, al servicio de los demás. Tú estilo de vida saludable se completa practicando este hábito. La felicidad es importante para el bienestar de tu cuerpo. La salud integral (física, mental, espiritual y social) se ve vinculada con la felicidad. ",
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestSerfelizPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestSerfelizPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestSerfelizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestSerfelizPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestSerfelizPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestSerfelizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-serfeliz',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-serfeliz/test-serfeliz.html"*/'<!--\n  Generated template for the TestSerfelizPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="page-test-serfeliz">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-serfeliz/test-serfeliz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestSerfelizPage);
    return TestSerfelizPage;
}());

//# sourceMappingURL=test-serfeliz.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDesayunarmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestDesayunarmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestDesayunarmasPage = /** @class */ (function () {
    function TestDesayunarmasPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Tomo un desayuno saludable todos los días?",
            "2-	¿Planeo el menú de desayunos y cenas de la semana basada en alimentos saludables?",
            "3-	¿Considero mi desayuno la comida más importante del día?",
            "4-	¿Dedico 30 minutos al día para ingerir mi desayuno?",
            "5- ¿Ceno por lo menos tres horas antes de dormir?",
            "6-	¿Prefiero cenar poco?",
            "7- ¿Comparto el desayuno en familia?",
            "8-	¿Prefiero no desayunar porque se me hace tarde?",
            "9-	¿Siento que ceno demasiado?",
            "10- ¿Desayuno como máximo una hora después de levantarme? "];
        this.imagen = ["./assets/imgs/desayunarmas1.png", "./assets/imgs/desayunarmas2.png", "./assets/imgs/desayunarmas3.png", "./assets/imgs/desayunarmas4.png", "./assets/imgs/desayunarmas5.png", "./assets/imgs/desayunarmas6.png", "./assets/imgs/desayunarmas7.png", "./assets/imgs/desayunarmas8.png", "./assets/imgs/desayunarmas9.png", "./assets/imgs/desayunarmas10.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 7, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestDesayunarmasPage.prototype.No = function () {
        console.log(this.fechaActual);
        if (this.i == 7 || this.i == 8) {
            this.resultado = this.resultado + 5;
        }
        else {
            this.resultado = this.resultado + 1;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestDesayunarmasPage.prototype.Rara = function () {
        if (this.i == 7 || this.i == 8) {
            this.resultado = this.resultado + 4;
        }
        else {
            this.resultado = this.resultado + 2;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestDesayunarmasPage.prototype.Aveces = function () {
        if (this.i == 7 || this.i == 8) {
            this.resultado = this.resultado + 3;
        }
        else {
            this.resultado = this.resultado + 3;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestDesayunarmasPage.prototype.Frecuentemente = function () {
        if (this.i == 7 || this.i == 8) {
            this.resultado = this.resultado + 2;
        }
        else {
            this.resultado = this.resultado + 4;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestDesayunarmasPage.prototype.Si = function () {
        if (this.i == 7 || this.i == 8) {
            this.resultado = this.resultado + 1;
        }
        else {
            this.resultado = this.resultado + 5;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestDesayunarmasPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Desayunar Más y Cenar Menos",
                resultado: "¡Excelente!",
                contenido: "¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable.  El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Desayunar Más y Cenar Menos",
                resultado: "¡Muy Bueno!",
                contenido: "¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Desayunar Más y Cenar Menos",
                resultado: "¡Bueno!",
                contenido: "¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Desayunar Más y Cenar Menos",
                resultado: "¡Malo!",
                contenido: "Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Desayunar Más y Cenar Menos",
                resultado: "¡Muy Malo!",
                contenido: "¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de ´´Desayunar Más y Cenar Menos´´ le da al desayuno nutritivo la prioridad e importancia que merece. Al practicarlo puedes lograr un mejor desarrollo y rendimiento integral de tu organismo y reducir la ingesta alimenticia de la cena. Recuerda que debes de desayunar como rey, comer como príncipe y cenar como mendigo. ",
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestDesayunarmasPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestDesayunarmasPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestDesayunarmasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestDesayunarmasPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestDesayunarmasPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestDesayunarmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-desayunarmas',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-desayunarmas/test-desayunarmas.html"*/'<!--\n  Generated template for the TestDesayunarmasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="page-test-desayunarmas">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-desayunarmas/test-desayunarmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestDesayunarmasPage);
    return TestDesayunarmasPage;
}());

//# sourceMappingURL=test-desayunarmas.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestActividadfisicaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestActividadfisicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestActividadfisicaPage = /** @class */ (function () {
    function TestActividadfisicaPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Realizo al menos 30 minutos de actividad física al día?",
            "2-	¿Incorporo a mi rutina diaria nuevas maneras de hacer actividad física (dejar el carro más lejos, caminar al trabajo, usar bicicleta como transporte, subir y bajar escaleras)?",
            "3-	¿Practico algún deporte o actividad física con mis hijos, familia o amigos? ",
            "4-	¿Realizo estiramientos de piernas y brazos varias veces al día?",
            "5- ¿Realizo ejercicio físico por lo menos tres días a la semana?",
            "6-	¿Practico actividad de tipo aeróbico (correr, andar en bicicleta, patinar, caminar, deportes, entre otros) al menos tres veces por semana?",
            "7- ¿Realizo actividades para el fortalecimiento de los grandes grupos musculares (lagartijas, abdominales, sentadillas, levantamiento de pesas)?",
            "8-	¿Realizo algún trabajo físico manual durante el día?",
            "9-	¿Realizo mi actividad física al aire libre y bajo la luz solar?",
            "10- ¿Evito estar sentado por más de dos horas seguidas?"];
        this.imagen = ["./assets/imgs/actividadfisica1.png", "./assets/imgs/actividadfisica2.png", "./assets/imgs/actividadfisica3.png", "./assets/imgs/actividadfisica4.png", "./assets/imgs/actividadfisica5.png", "./assets/imgs/actividadfisica6.png", "./assets/imgs/actividadfisica7.png", "./assets/imgs/actividadfisica8.png", "./assets/imgs/actividadfisica9.png", "./assets/imgs/actividadfisica10.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 4, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestActividadfisicaPage.prototype.No = function () {
        console.log(this.fechaActual);
        this.resultado = this.resultado + 1;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestActividadfisicaPage.prototype.Rara = function () {
        this.resultado = this.resultado + 2;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestActividadfisicaPage.prototype.Aveces = function () {
        this.resultado = this.resultado + 3;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestActividadfisicaPage.prototype.Frecuentemente = function () {
        this.resultado = this.resultado + 4;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestActividadfisicaPage.prototype.Si = function () {
        this.resultado = this.resultado + 5;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 10) {
            this.goToTest();
        }
    };
    TestActividadfisicaPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Actividad Física",
                resultado: "¡Excelente!",
                contenido: '¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Actividad Física",
                resultado: "¡Muy Bueno!",
                contenido: '¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Actividad Física",
                resultado: "¡Bueno!",
                contenido: '¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Actividad Física",
                resultado: "¡Malo!",
                contenido: 'Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Actividad Física",
                resultado: "¡Muy Malo!",
                contenido: '¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! La Actividad Física te ayuda a mejorar todas las dimensiones de tu salud. Es uno de los hábitos que, aunque te cueste adquirir, más puede impactar sobre tu salud. No debes de confundir la Actividad Física con el "ejercicio", el cual es incluido dentro de la misma, junto con las otras actividades que incluyen movimiento corporal y se realizan como parte de los momentos de juego, del trabajo, de formas de transporte activas, de las tareas domésticas y de actividades recreativas.',
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestActividadfisicaPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestActividadfisicaPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestActividadfisicaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestActividadfisicaPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestActividadfisicaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestActividadfisicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-actividadfisica',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-actividadfisica/test-actividadfisica.html"*/'<!--\n  Generated template for the TestActividadfisicaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="page-test-actividadfisica">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-actividadfisica/test-actividadfisica.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestActividadfisicaPage);
    return TestActividadfisicaPage;
}());

//# sourceMappingURL=test-actividadfisica.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestBiencomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestDescansoadecuadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestBiencomerPage = /** @class */ (function () {
    function TestBiencomerPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Consumo nueces, semillas o almendras por lo menos una vez a la semana?",
            "2-	¿Consumo al día más verduras y frutas que otros alimentos?",
            "3-	¿Sustituyo el consumo de alimentos refinados (pasta blanca, arroz blanco, pan blanco) por alimentos integrales (pan integral, pasta integral, arroz integral, etc.)?",
            "4-	¿Consumo productos de origen animal (carne, pollo, pescado, huevo, leche, queso y embutidos)?",
            "5- ¿Consumo leguminosas (frijoles, garbanzos, lentejas, habas, alubias, soya, entre otros) en mis alimentos diarios?",
            "6-	¿Utilizo margarina o mantequilla para preparar mis alimentos?",
            "7- ¿Reemplazo en mis alimentos la proteína de la carne por otras proteínas de origen vegetal?",
            "8-	¿Consumo diariamente tubérculos como papas, camote, yuca?",
            "9-	¿Consumo alimentos fritos diariamente?",
            "10- ¿Consumo más de 3 porciones de verduras al día? ",
            "11- ¿Cómo más de 5 porciones de frutas al día? "];
        this.imagen = ["./assets/imgs/biencomer1.png", "./assets/imgs/biencomer2.png", "./assets/imgs/biencomer3.png", "./assets/imgs/biencomer4.png", "./assets/imgs/biencomer5.png", "./assets/imgs/biencomer6.png", "./assets/imgs/biencomer7.png", "./assets/imgs/biencomer8.png", "./assets/imgs/biencomer9.png", "./assets/imgs/biencomer10.png", "./assets/imgs/biencomer11.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 3, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestBiencomerPage.prototype.No = function () {
        console.log(this.fechaActual);
        if (this.i == 3 || this.i == 5 || this.i == 8) {
            this.resultado = this.resultado + 5;
        }
        else {
            this.resultado = this.resultado + 1;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestBiencomerPage.prototype.Rara = function () {
        if (this.i == 3 || this.i == 5 || this.i == 8) {
            this.resultado = this.resultado + 4;
        }
        else {
            this.resultado = this.resultado + 2;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestBiencomerPage.prototype.Aveces = function () {
        if (this.i == 3 || this.i == 5 || this.i == 8) {
            this.resultado = this.resultado + 3;
        }
        else {
            this.resultado = this.resultado + 3;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestBiencomerPage.prototype.Frecuentemente = function () {
        if (this.i == 3 || this.i == 5 || this.i == 8) {
            this.resultado = this.resultado + 2;
        }
        else {
            this.resultado = this.resultado + 4;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestBiencomerPage.prototype.Si = function () {
        if (this.i == 3 || this.i == 5 || this.i == 8) {
            this.resultado = this.resultado + 1;
        }
        else {
            this.resultado = this.resultado + 5;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 11) {
            this.goToTest();
        }
    };
    TestBiencomerPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Bien Comer",
                resultado: "¡Excelente!",
                contenido: "¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables.  Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Bien Comer",
                resultado: "¡Muy Bueno!",
                contenido: "¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo!. El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Bien Comer",
                resultado: "¡Bueno!",
                contenido: "¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Bien Comer",
                resultado: "¡Malo!",
                contenido: "Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Bien Comer",
                resultado: "¡Muy Malo!",
                contenido: "¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito del ´´Bien Comer´´ es alimentarse de manera balanceada, integrando y combinando los diferentes grupos de alimentos, por medio de las correctas porciones y calorías, para puedas poseer un funcionamiento integral durante tu día. La alimentación se ha vuelto la pieza clave para el mantenimiento de la salud. ´´Que tu alimento sea tu medicina´´, Hipócrates. ",
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestBiencomerPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestBiencomerPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestBiencomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestBiencomerPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestBiencomerPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestBiencomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-biencomer',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-biencomer/test-biencomer.html"*/'<!--\n  Generated template for the TestBiencomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content id="page-test-biencomer">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-biencomer/test-biencomer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestBiencomerPage);
    return TestBiencomerPage;
}());

//# sourceMappingURL=test-biencomer.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestActitudpositivaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TestActitudpositivaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestActitudpositivaPage = /** @class */ (function () {
    function TestActitudpositivaPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl) {
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.array = ["1- ¿Comparto pensamientos y emociones positivas con mis seres queridos?",
            "2-	¿Veo el lado positivo de las situaciones?",
            "3-	¿Reconozco las buenas cualidades en los demás?",
            "4-	¿Le expreso a las personas las buenas cualidades que observo en ellos?",
            "5- ¿Me agrada rodearme de personas positivas?",
            "6-	¿Me tranquilizo antes de responder cuando estoy enojado?",
            "7- ¿Mantengo una actitud positiva durante el día?",
            "8-	¿Utilizo palabras positivas y apropiadas al comunicarme con las demás personas?",
            "9-	¿Soy optimista en mi forma de ver la vida?",
            "10- ¿Veo los momentos difíciles como una oportunidad de crecer y mejorar?",
            "11- ¿Me siento capaz de enfrentar los problemas de la vida cuando le pido a Dios fuerza y sabiduría?",
            "12- ¿Soy agradecido con Dios por las bendiciones que recibo?",
            "13- ¿Soy agradecido con las personas que me rodean?"];
        this.imagen = ["./assets/imgs/actitudpositiva1.png", "./assets/imgs/actitudpositiva2.png", "./assets/imgs/actitudpositiva3.png", "./assets/imgs/actitudpositiva4.png", "./assets/imgs/actitudpositiva5.png", "./assets/imgs/actitudpositiva6.png", "./assets/imgs/actitudpositiva7.png", "./assets/imgs/actitudpositiva8.png", "./assets/imgs/actitudpositiva9.png", "./assets/imgs/actitudpositiva10.png", "./assets/imgs/actitudpositiva11.png", "./assets/imgs/actitudpositiva12.png", "./assets/imgs/actitudpositiva13.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.test = {};
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 2, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
    }
    TestActitudpositivaPage.prototype.No = function () {
        console.log(this.fechaActual);
        this.resultado = this.resultado + 1;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 13) {
            this.goToTest();
        }
    };
    TestActitudpositivaPage.prototype.Rara = function () {
        this.resultado = this.resultado + 2;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 13) {
            this.goToTest();
        }
    };
    TestActitudpositivaPage.prototype.Aveces = function () {
        this.resultado = this.resultado + 3;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 13) {
            this.goToTest();
        }
    };
    TestActitudpositivaPage.prototype.Frecuentemente = function () {
        this.resultado = this.resultado + 4;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 13) {
            this.goToTest();
        }
    };
    TestActitudpositivaPage.prototype.Si = function () {
        this.resultado = this.resultado + 5;
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 13) {
            this.goToTest();
        }
    };
    TestActitudpositivaPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        if (this.resultadotest >= 91) {
            this.test = { test: "Actitud Positiva",
                resultado: "¡Excelente!",
                contenido: "¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ",
                color: "#185417" };
        }
        else if (this.resultadotest < 91 && this.resultadotest >= 81) {
            this.test = { test: "Actitud Positiva",
                resultado: "¡Muy Bueno!",
                contenido: "¡Muy bien!, muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social.",
                color: "#458f31" };
        }
        else if (this.resultadotest < 81 && this.resultadotest >= 71) {
            this.test = { test: "Actitud Positiva",
                resultado: "¡Bueno!",
                contenido: "¡Bien! Algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo, ¡Tú eres protagonista de tu vida! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ",
                color: "#e1c206" };
        }
        else if (this.resultadotest < 71 && this.resultadotest >= 61) {
            this.test = { test: "Actitud Positiva",
                resultado: "¡Malo!",
                contenido: "Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo, ¡Tú eres protagonista de tu vida! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social.",
                color: "#d54b00" };
        }
        else if (this.resultadotest < 61) {
            this.test = { test: "Actitud Positiva",
                resultado: "¡Muy Malo!",
                contenido: "¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! La frase ´´mente sana, cuerpo sano´´, es una gran realidad que ha sido comprobada científicamente. Alrededor del 80% de los problemas de salud son mentales. La ´´Actitud Positiva´´ se define como la elección de aprender a pensar en lo bueno y agradable de forma constructiva, objetiva y sana y expresarlo en las relaciones interpersonales. Para mantenerte saludable es determinante conservar una Actitud Positiva frente a todas las situaciones de la vida. Esta actitud conlleva a una salud física, mental, espiritual y social. ",
                color: "#c40404" };
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__rtestagua_rtestagua__["a" /* RtestaguaPage */], this.test);
    };
    TestActitudpositivaPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestActitudpositivaPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestActitudpositivaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestActitudpositivaPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestActitudpositivaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestActitudpositivaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-test-actitudpositiva',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-actitudpositiva/test-actitudpositiva.html"*/'<!--\n  Generated template for the TestActitudpositivaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content id="page-test-actitudpositiva">\n  <img id="esalud" src="./assets/imgs/evaluatusaludb.png">\n    <br><br><br>\n    \n    <h4 class="pregunta2"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-actitudpositiva/test-actitudpositiva.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */]])
    ], TestActitudpositivaPage);
    return TestActitudpositivaPage;
}());

//# sourceMappingURL=test-actitudpositiva.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestAguaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TestAguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestAguaPage = /** @class */ (function () {
    function TestAguaPage(navCtrl, platform, restprovider, loadingCtrl, toastCtrl, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.screenOrientation = screenOrientation;
        this.array = ["1-	¿Reemplazo el agua natural por otros líquidos, ya sea refrescos o jugos, cuando tengo sed?",
            "2-	¿Bebo dos vasos de agua natural al levantarme, antes de desayunar?",
            "3-	¿Bebo dos vasos de agua natural 30 minutos antes de cada comida?",
            "4-	¿Bebo dos vasos de agua natural 30 minutos antes de cada cena?",
            "5-	¿Bebo agua cuando estoy realizando ejercicio físico?",
            "6-	¿Bebo agua natural aun sin tener sed?",
            "7- ¿Bebo un vaso de agua natural una hora antes de dormir?",
            "8-	¿Beber agua natural forma parte de mi rutina diaria?",
            "9-	¿Consumo al menos ocho vasos de agua natural al día?"
        ];
        this.imagen = ["./assets/imgs/agua1y6.png", "./assets/imgs/agua2y7.png", "./assets/imgs/agua3y4.png", "./assets/imgs/agua3y4.png", "./assets/imgs/agua5.png", "./assets/imgs/agua1y6.png", "./assets/imgs/agua2y7.png", "./assets/imgs/agua8.png", "./assets/imgs/agua9.png"];
        this.i = 0;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        this.resultado = 0;
        this.resultado2 = 0;
        this.resultado3 = 0;
        this.resultadotest = 0;
        this.fechaActual = new Date();
        this.datosTest = { "id": window.localStorage.getItem('id'), "id_habito": 1, "resultado": "", "fecha": this.fechaActual, "registro": "test1" };
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary') {
                _this.fondo = './assets/imgs/ftestagua.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary') {
                _this.fondo = './assets/imgs/ftestaguah.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        /*  this.presentLoading();
    /*platform.ready().then(()=>{
              this.loader.dismiss();
          });*/
    }
    TestAguaPage.prototype.No = function () {
        console.log(this.fechaActual);
        if (this.i == 0) {
            this.resultado = this.resultado + 5;
        }
        else {
            this.resultado = this.resultado + 1;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 9) {
            this.goToTest();
        }
    };
    TestAguaPage.prototype.Rara = function () {
        if (this.i == 0) {
            this.resultado = this.resultado + 4;
        }
        else {
            this.resultado = this.resultado + 2;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 9) {
            this.goToTest();
        }
    };
    TestAguaPage.prototype.Aveces = function () {
        if (this.i == 0) {
            this.resultado = this.resultado + 3;
        }
        else {
            this.resultado = this.resultado + 3;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 9) {
            this.goToTest();
        }
    };
    TestAguaPage.prototype.Frecuentemente = function () {
        if (this.i == 0) {
            this.resultado = this.resultado + 2;
        }
        else {
            this.resultado = this.resultado + 4;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 9) {
            this.goToTest();
        }
    };
    TestAguaPage.prototype.Si = function () {
        if (this.i == 0) {
            this.resultado = this.resultado + 1;
        }
        else {
            this.resultado = this.resultado + 5;
        }
        this.i = this.i + 1;
        this.pregunta = this.array[this.i];
        this.imagenagua = this.imagen[this.i];
        if (this.i == 9) {
            this.goToTest();
        }
    };
    TestAguaPage.prototype.goToTest = function () {
        //this.navCtrl.push(TestPage);
        this.resultado = this.resultado - this.i;
        this.resultado2 = (this.i * 5) - this.i;
        this.resultado3 = (this.resultado / this.resultado2);
        this.resultadotest = this.resultado3 * 100;
        window.localStorage.setItem('rtestagua', this.resultadotest);
        this.datosTest.resultado = this.resultadotest;
        this.registrartest();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rtestagua_rtestagua__["a" /* RtestaguaPage */]);
    };
    TestAguaPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    //registro resultados del test
    TestAguaPage.prototype.registrartest = function () {
        var _this = this;
        console.log(this.datosTest);
        this.showLoader();
        this.restprovider.registrotestagua(this.datosTest).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            _this.mensaje = _this.data.exito;
            var men = _this.data.mensaje;
            console.log(men);
            console.log(_this.mensaje);
            console.log(window.localStorage.getItem('id'));
            if (_this.mensaje == "Registro exitoso") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
            else if (_this.mensaje == "POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS") {
                console.log(_this.mensaje);
                _this.presentToast(_this.mensaje);
            }
        }, function (err) {
            console.log(_this.mensaje);
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    TestAguaPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
            this.fondo = './assets/imgs/ftestagua.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary' || this.screenOrientation.type == 'landscape-secondary') {
            this.fondo = './assets/imgs/ftestaguah.jpg';
        }
        console.log(this.screenOrientation.type);
        console.log('ionViewDidLoad TestAguaPage');
    };
    TestAguaPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    TestAguaPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TestAguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-agua',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/test-agua/test-agua.html"*/'<!--\n  Generated template for the TestAguaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="page-test-agua"  [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n    <img id="esalud" src="./assets/imgs/evaluatusaludb.png" >\n    <br><br><br>\n    \n    <h4 class="pregunta"><strong>{{pregunta}}</strong></h4>\n    \n    <div style="position:relative; width:100%; top:5%">\n    <div id="testagua">\n      <img id="imgtestagua"  [src]="imagenagua">\n    </div>\n    \n    <div id="testagua" style="top:50%">\n      <button id="btnagua" ion-button color="light" (click)="No()"><strong>No/nunca</strong></button><br>\n      <br>\n      <button id="btnagua" ion-button color="light" (click)="Rara()"><strong>Rara Vez</strong> </button><br>\n      <br>\n      <button id="btnagua"ion-button color="light"(click)="Aveces()"><strong> A veces</strong></button><br><br>\n      <button id="btnagua"ion-button color="light" (click)="Frecuentemente()"><strong>Frecuentemente</strong></button> <br><br>\n      <button id="btnagua"ion-button color="light"(click)="Si()"><strong> Si/siempre </strong></button>\n    </div>\n  </div>\n  </ion-content>\n\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/test-agua/test-agua.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], TestAguaPage);
    return TestAguaPage;
}());

//# sourceMappingURL=test-agua.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaludoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_principal_menu_principal__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SaludoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaludoPage = /** @class */ (function () {
    function SaludoPage(navCtrl, loadingCtrl, rest, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rest = rest;
        this.presentLoading();
        platform.ready().then(function () {
            console.log(window.localStorage.getItem('sexo'));
            _this.nombre = window.localStorage.getItem('nombre');
            if (window.localStorage.getItem("sexo") == 'masculino') {
                _this.imagen = "./assets/imgs/nino.png";
            }
            else if (window.localStorage.getItem("sexo") == 'femenino') {
                _this.imagen = "./assets/imgs/nina.png";
            }
            _this.loader.dismiss();
        });
    }
    SaludoPage.prototype.goToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]);
    };
    SaludoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    SaludoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SaludoPage');
    };
    SaludoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saludo',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/saludo/saludo.html"*/'<!--\n  Generated template for the SaludoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content id="page-saludo">\n \n    <div id="img">\n      <img [src]="imagen">\n    </div>\n    \n    <div id="hola">\n        <h1 style="font-size:2em">¡Hola, {{ nombre }}! </h1>\n        <h2 id="texto">¡Sigue adelante, <br> hacia la Plenitud!</h2>\n        <button ion-button style="background-color:#870f53" (click)="goToMenu()">COMENZEMOS</button>\n    </div>\n  \n    \n  \n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/saludo/saludo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], SaludoPage);
    return SaludoPage;
}());

//# sourceMappingURL=saludo.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bienvenida_bienvenida__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, restprovider, formBuilder, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.registro = {};
        this.datos = this.formBuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z áéíóú]*')]],
            edad: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            sexo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            ciudad: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z áéíóú]*')]],
            pais: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z áéíóú]*')]],
            estado: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z áéíóú]*')]],
            municipio: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z áéíóú]*')]],
            religion: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[a-zA-Z áéíóú]*')]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)]]
        });
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    RegistroPage.prototype.signup = function () {
        var _this = this;
        this.showLoader();
        this.restprovider.reg(this.datos.value).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            console.log(_this.data);
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
        /*this.showLoader();
        this.restprovider.registro(this.datos.value).then((result) => {
          this.loading.dismiss();
          this.data = result;
          this.mensaje = this.data.exito;
          console.log(this.data.nombre);
          console.log(this.mensaje);
          window.localStorage.setItem('correo', this.data.correo);
          window.localStorage.setItem('password', this.data.password);
          window.localStorage.setItem('token',this.data.token);
          window.localStorage.setItem('nombre',this.data.nombre);
          window.localStorage.setItem('sexo', this.data.sexo);
          if(this.mensaje=="Registro exitoso"){
            this.goToBienvenida();
            this.presentToast(this.mensaje);
    
          }else if(this.mensaje=="POR FAVOR, RELLENE TODOS LOS CAMPOS REQUERIDOS"){
            this.presentToast(this.mensaje);
          } else if(this.mensaje=="ESTE CORREO YA ESTA REGISTRADO"){
            this.presentToast(this.mensaje);
          }
          /*if(typeof window.localStorage.getItem('token')!=undefined){
          this.goToSaludo();
          }
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
        });*/
    };
    RegistroPage.prototype.goToBienvenida = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bienvenida_bienvenida__["a" /* BienvenidaPage */]);
    };
    RegistroPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Autenticando...'
        });
        this.loading.present();
    };
    RegistroPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/registro/registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="page-registro">\n    <ion-content id="contenedor-registro">\n\n      \n        <form id="form1" [formGroup]="datos" (ngSubmit)="signup()">\n          <ion-list >\n              <ion-item>\n                  <ion-label color="primary"  floating>Nombre</ion-label>\n                  <ion-input   type="text" formControlName="nombre"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="datos.get(\'nombre\').errors && datos.get(\'nombre\').dirty">\n                  <p color= "danger" *ngIf="datos.get(\'nombre\').hasError(\'required\')">*Campo Requerido</p>\n                  <p color="danger" *ngIf="datos.get(\'nombre\').hasError(\'pattern\')">*Solo se admiten letras</p>\n                </ion-item>\n                <ion-item>\n                    <ion-label color="primary"  floating>Edad</ion-label>\n                    <ion-input type="number" formControlName="edad"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="datos.get(\'edad\').errors && datos.get(\'edad\').dirty">\n                    <p color = "danger" *ngIf="datos.get(\'edad\').hasError(\'required\')">*Campo Requerido</p>\n                  </ion-item>\n        \n                  \n                  <ion-item>\n                      <ion-label color="primary" floating>Sexo</ion-label>\n                      <ion-select formControlName="sexo">\n                          <ion-option value="masculino">Masculino</ion-option>\n                          <ion-option value="femenino">Femenino</ion-option>\n                         \n                        </ion-select>\n                    </ion-item>\n                    <ion-item *ngIf="datos.get(\'sexo\').errors && datos.get(\'sexo\').dirty">\n                      <p color = "danger" *ngIf="datos.get(\'sexo\').hasError(\'required\')">*Campo Requerido</p>\n                    </ion-item>\n        \n                    <ion-item>\n                        <ion-label color="primary" floating>Correo</ion-label>\n                        <ion-input type="email"  formControlName="email"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="datos.get(\'email\').errors && datos.get(\'email\').dirty">\n                        <p color = "danger" *ngIf="datos.get(\'email\').hasError(\'required\')">*Campo Requerido</p>\n                        <p color="danger" *ngIf="datos.get(\'email\').hasError(\'email\')">*Introduce un correo electronico valido</p>\n                      </ion-item>\n\n                    <ion-item>\n                        <ion-label color="primary" floating>Password</ion-label>\n                        <ion-input type="password"  formControlName="password"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="datos.get(\'password\').errors && datos.get(\'password\').dirty">\n                        <p color=  "danger" *ngIf="datos.get(\'password\').hasError(\'minLength\')">*Debe tener al menos 6 caracteres</p>\n                        <p color = "danger" *ngIf="datos.get(\'password\').hasError(\'required\')">*Campo Requerido</p>\n                        \n                      </ion-item>\n                      <ion-item>\n                          <ion-label color="primary" floating>Pais</ion-label>\n                          <ion-input  formControlName="pais"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="datos.get(\'pais\').errors && datos.get(\'pais\').dirty">\n                          <p color = "danger" *ngIf="datos.get(\'pais\').hasError(\'required\')">*Campo Requerido</p>\n                          <p color="danger" *ngIf="datos.get(\'pais\').hasError(\'pattern\')">*Solo se admiten letras</p>\n                        </ion-item>\n        \n                        <ion-item>\n                            <ion-label color="primary" floating>Estado</ion-label>\n                            <ion-input formControlName="estado"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="datos.get(\'estado\').errors && datos.get(\'estado\').dirty">\n                            <p color = "danger" *ngIf="datos.get(\'estado\').hasError(\'required\')">*Campo Requerido</p>\n                            <p color="danger" *ngIf="datos.get(\'estado\').hasError(\'pattern\')">*Solo se admiten letras</p>\n                          </ion-item>\n                          <ion-item>\n                              <ion-label color="primary" floating>Municipio</ion-label>\n                              <ion-input formControlName="municipio"></ion-input>\n                            </ion-item>\n                            <ion-item *ngIf="datos.get(\'municipio\').errors && datos.get(\'municipio\').dirty">\n                              <p color = "danger" *ngIf="datos.get(\'municipio\').hasError(\'required\')">*Campo Requerido</p>\n                              <p color="danger" *ngIf="datos.get(\'municipio\').hasError(\'pattern\')">*Solo se admiten letras</p>\n                            </ion-item>\n\n                            <ion-item>\n                            <ion-label color="primary" floating>Ciudad</ion-label>\n                            <ion-input formControlName="ciudad"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="datos.get(\'ciudad\').errors && datos.get(\'ciudad\').dirty">\n                            <p color = "danger" *ngIf="datos.get(\'ciudad\').hasError(\'required\')">*Campo Requerido</p>\n                            <p color="danger" *ngIf="datos.get(\'ciudad\').hasError(\'pattern\')">*Solo se admiten letras</p>\n                          </ion-item>\n                         \n                        <ion-item>\n                        <ion-label color="primary" floating>Religion</ion-label>\n                        <ion-input formControlName="religion"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="datos.get(\'religion\').errors && datos.get(\'religion\').dirty">\n                        <p color = "danger" *ngIf="datos.get(\'religion\').hasError(\'required\')">*Campo Requerido</p>\n                        <p color="danger" *ngIf="datos.get(\'religion\').hasError(\'pattern\')">*Solo se admiten letras</p>\n                      </ion-item>\n        \n                      <ion-item>\n                          <button ion-button block  type="submit" [disabled]="!datos.valid" >REGISTRAR</button>\n                      </ion-item>\n                      <p id="AvisoPrivacidad" style="font-size:0.9em"><strong><a href="http://ciafeb.com/" id="AvisoPrivacidad">AVISO DE PRIVACIDAD.</a></strong> Ponemos a tus disposición los términos del aviso de privacidad de nuestros servicios.</p>\n              </ion-list>\n        </form>\n              \n     </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BienvenidaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instrucciones_instrucciones__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BienvenidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BienvenidaPage = /** @class */ (function () {
    function BienvenidaPage(platform, navCtrl, loadingCtrl, restprovider, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restprovider = restprovider;
        this.toastCtrl = toastCtrl;
        this.userData = { "password": window.localStorage.getItem('password'), "correo": window.localStorage.getItem("correo") };
        this.presentLoading();
        this.doLogin();
        platform.ready().then(function () {
            _this.sexo = window.localStorage.getItem('sexo');
            _this.nombre = window.localStorage.getItem('nombre');
            console.log(_this.sexo);
            if (_this.sexo == "masculino") {
                _this.fondo = './assets/imgs/fbh.jpg';
            }
            else if (_this.sexo == 'femenino') {
                _this.fondo = './assets/imgs/fbm.jpg';
            }
            console.log(_this.fondo);
        });
        this.loader.dismiss();
    }
    BienvenidaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BienvenidaPage');
    };
    BienvenidaPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.loader.present();
    };
    BienvenidaPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader();
        this.restprovider.login(this.userData).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            console.log(_this.data.nombre);
            window.localStorage.setItem('id', _this.data.id);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    BienvenidaPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Autenticando...'
        });
        this.loading.present();
    };
    BienvenidaPage.prototype.goToInstrucciones = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__instrucciones_instrucciones__["a" /* InstruccionesPage */]);
    };
    BienvenidaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-bienvenida',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/bienvenida/bienvenida.html"*/'<!--\n  Generated template for the BienvenidaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="page-bienvenida" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}" >\n<h1>¡BIENVENIDO!</h1>\n<h3>{{nombre}}</h3>\n<p id="textobienvenida"><br>Nos complace darte la bienvenidad al CURSO EN LÌNEA de los "8 Habitos \n   <br> Saludables" de <strong>Quiero ¡Vivir Sano!</strong><br>\n  <br> ¡Felicidades por preocuparte por tu salud y aceptar este desafío de incorporar<br>\nnuevos y saludables hábitos que mejorarán tu calidad de vida! Estos hábitos<br>\nque te propondremos practicar, tienen un efecto sobre tu Salud Integral</p>\n\n<div id="imagenes">\n<div>\n  <img id="salud" src="./assets/imgs/fsf.png">\n  <img id="salud1" src="./assets/imgs/fsm.png">\n  </div>\n<div>\n    <img id="salud" src="./assets/imgs/fse.png">\n    <img id="salud1" src="./assets/imgs/fss.png">\n    \n  </div>\n  <div><p id="textobienvenida"><br>El Curso en Línea de los "8 Hábitos Saludables" de <strong>Quiero ¡Vivir Sano!,</strong> es una aventura de ocho semanas. Durante el curso realizarás actividades y tendrás acceso a contenidos con un sustento cientifico. Este contenido es actualizado y sumamente sencillo de practicar, permitiéndote mejorar tu Salud Integral<br>\n  <br>¡Comparte estos hábitos con tus amigos, familiares y vecinos e instalos a ponerlos en práctica! Esto, garantizará una motivación a lo largo de las ocho semanasy la obtención de resultados más duraderos.<br>\n  <strong>Nuevamente, ¡Bienvenido!</strong>\n  </p></div>\n\n</div>\n\n<button ion-button block outline color="light" id="btnbienvenida" (click)="goToInstrucciones()">¡ADELANTE!</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/bienvenida/bienvenida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]])
    ], BienvenidaPage);
    return BienvenidaPage;
}());

//# sourceMappingURL=bienvenida.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstruccionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_principal_menu_principal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InstruccionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InstruccionesPage = /** @class */ (function () {
    function InstruccionesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InstruccionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InstruccionesPage');
    };
    InstruccionesPage.prototype.goToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]);
    };
    InstruccionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-instrucciones',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/instrucciones/instrucciones.html"*/'<!--\n  Generated template for the InstruccionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="position: absolute;">\n  \n  <ion-slides  pager="true">\n    \n    <ion-slide id="instruccion">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos"><h1><strong>¡BIENVENIDOS!</strong></h1>\n      <h4>¡UNA AVENTURA HACIA LA VIDA REAL!</h4>\n      <h3 style="color:#96005a"> <strong>ACERCA DE ESTE CURSO</strong> </h3>\n      </div>\n      <p style="text-align: justify; font-size: 80%; padding: 3%;">Este curso está basado en investigaciones científicas y en ocho remedios naturales que fueron presentados desde 1863 en el libro ´´Consejos Sobre la Salud´´:    </p>\n      <p style="position: relative; text-align: justify; font-size: 80%; padding: 5%; margin-top: -7%"> <strong>"El aire puro, el sol, la abstinencia, el descanso, el ejercicio, un régimen alimenticio conveniente, el agua y la \n        confianza en el poder divino son los verdaderos remedios. Todos debieran conocer los agentes que la \n        naturaleza provee como remedios, y saber aplicarlos". Consejos Sobre la Salud, Pág. 89.\n        </strong> </p>\n        <p style="text-align: justify; font-size: 80%; padding: 3%; margin-top: -6%">Estos remedios gratuitos y disponibles para todas las personas se han programado en este curso que te \n          enseñará a desarrollar y conservar una vida mejor en el ámbito físico, mental, espiritual y social. \n           <br><br>\n          ¿Deseas vivir más, tener más salud y ser más feliz? Realiza las actividades que te presentamos en este curso, \n          siguiendo las siguientes instrucciones y tu sueño podrá hacerse realidad.\n          </p> <br>\n        <img id="img" src="./assets/imgs/img.png" alt="">\n    </ion-slide> \n\n     <ion-slide id="instruccion-1">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos">\n        <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/1.png" alt="">\n       <h1 style="color: #96005a; margin-top: 1%"><strong>OCHO HÁBITOS <br> EN OCHO SEMANAS</strong></h1>\n      </div>\n      <p style="font-size: 80%; width: 80%; margin-left: 10%;"> <strong>Cada semana aprenderás cómo ir incorporando un hábito nuevo a tu estilo de vida, los hábitos son:</strong> \n          </p>\n\n          <p style="color: #96005a; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icobeberagua.png" alt=""> Semana 1: <strong>Beber Agua Natural</strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icoactitudpositiva.png" alt=""> Semana 2: <strong>Actitud Positiva</strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icobiencomer.png" alt=""> Semana 3: <strong>El Bien Comer</strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icoactividadfisica.png" alt=""> Semana 4: <strong>Realizar Actividad Física</strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icodescansoadecuado.png" alt=""> Semana 5: <strong>Descanso Adecuado </strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icoautocontrol.png" alt=""> Semana 6: <strong>Auto-control </strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icodesayunarmas.png" alt=""> Semana 7: <strong>Desayunar Más y Cenar Menos</strong> </p>\n          <p style="color: #96005a; ; font-size: 70%"> <img style="width: 8%; vertical-align:middle" src="./assets/imgs/icoserfeliz.png" alt=""> Semana 8: <strong>Ser Feliz</strong> </p>\n\n     </ion-slide>\n\n\n     <ion-slide id="instruccion-2">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos">\n        <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/2.png" alt="">\n        <h1 style="color: #96005a; margin-top: 1%"><strong>UNA SALUD INTEGRAL</strong></h1>\n      </div>\n      <p style="width: 80%; font-size: 85%; margin-left: 10% "> <strong> Los hábitos que integrarás a tu estilo de vida te ayudarán a desarrollar todos los aspectos de tu salud:</strong>\n      </p>\n\n      <div>\n        <img id="salud" src="./assets/imgs/saludfisica.png">\n        <img id="salud1" src="./assets/imgs/saludmental.png">\n        </div>\n      <div>\n          <img id="salud2" src="./assets/imgs/saludespiritual.png">\n          <img id="salud1" src="./assets/imgs/saludsocial.png">\n          \n        </div>\n\n        \n          <img id="img2" src="./assets/imgs/img2.png" alt="">\n     </ion-slide>\n\n  \n\n     <ion-slide id="instruccion-3"style="font-size:1.5em">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos">\n        <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/3.png" alt="">\n        <h1 style="color: #96005a; margin-top: 1%"><strong>EVALUACIÓN DE TU <br>ESTILO DE VIDA</strong></h1>\n      </div>\n      <p style="width: 70%; font-size: 70%; margin-left: 15%; margin-top: 5%; "> <strong> Al inicio de cada hábito podrás contestar unas preguntas sencillas que te darán una evaluación sobre tu estilo de vida en relación con el hábito a practicar esa semana.\n      </strong>\n      </p>\n\n        \n      <img id="img3" src="./assets/imgs/img3.png" alt="">\n     </ion-slide>\n\n              \n     <ion-slide id="instruccion-4"> \n    \n          <div id="logos">  \n            <img id="img8hs" src="./assets/imgs/logohabitos.png">\n            <img id="imgqvs" src="./assets/imgs/logo.png"> \n           </div>\n           <div id="textos">\n            <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/4.png" alt="">\n            <h1 style="color: #96005a; margin-top: 1%"><strong>ACTIVIDADES<br>DIARIAS</strong></h1>\n          </div>\n          <p style="width: 70%; font-size: 80%; margin-left: 15%; margin-top: 5%; "> <strong> Cada día se te invitará a realizar una actividad que contribuirá a la adquisición o mejora del hábito de la semana.      </strong>\n          </p>\n    \n            \n          <img id="img4" src="./assets/imgs/img4.png" alt="">\n         \n     </ion-slide>\n\n               \n     <ion-slide id="instruccion-5"> \n    \n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n       <div id="textos">\n        <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/5.png" alt="">\n        <h1 style="color: #96005a; margin-top: 1%"><strong>ARTÍCULOS PARA <br>SABER MÁS</strong></h1>\n      </div>\n      <p style="width: 50%; font-size: 80%; margin-left: 25%; margin-top: 5%; "> <strong> Asimismo, tendrás a la disposición un artículo que te brindará más información sobre las actividades y sus beneficios.\n\n      </strong>\n      </p>\n\n        \n      <img id="img5" src="./assets/imgs/img5.png" alt="">\n </ion-slide>\n\n           \n <ion-slide id="instruccion-6"> \n    \n  <div id="logos">  \n    <img id="img8hs" src="./assets/imgs/logohabitos.png">\n    <img id="imgqvs" src="./assets/imgs/logo.png"> \n   </div>\n   <div id="textos">\n    <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/6.png" alt="">\n    <h1 style="color: #96005a; margin-top: 1%"><strong>DATOS INDISPENSABLES PARA EVALUAR TU SALUD</strong></h1>\n  </div>\n  <p style="width: 80%; font-size: 90%; margin-left: 10%; margin-top: 5%; text-align: left"> Para poder evaluar tu IMC y tu Perímetro Abdominal se requerirá la siguiente información: <br>\n  a)<strong> PESO</strong> <br>\n    b)<STROng> ESTATURA</STROng> <br>\n    c)<strong> CINTURA</strong> <span style="font-size: 80%">(El diámetro de la cintura se mide a la altura del ombligo)</span>\n    <br> Con estos datos  podrás obtener una evaluación de tu estado de salud.\n    \n  </p>\n\n    \n  <img id="img6" src="./assets/imgs/img6.png" alt="">\n</ion-slide>\n\n          \n<ion-slide id="instruccion-7"> \n    \n  <div id="logos">  \n    <img id="img8hs" src="./assets/imgs/logohabitos.png">\n    <img id="imgqvs" src="./assets/imgs/logo.png"> \n   </div>\n   <div id="textos">\n    <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/7.png" alt="">\n    <h1 style="color: #96005a; margin-top: 1%"><strong>DATOS OPCIONALES PARA EVALUAR TU SALUD</strong></h1>\n  </div>\n  <p style="width: 85%; font-size: 80%; margin-left: 7.5%; margin-top: 7%; text-align: justify"> De manera <strong>OPCIONAL</strong> puedes recolectar los siguientes datos en tu centro de salud, hospital o laboratorio  de confianza: \n    <br>\n <strong>a) PRESIÓN ARTERIAL</strong> <br>\n <strong>b) GLUCOSA EN AYUNAS</strong>   <br>\n <strong>c) COLESTEROL TOTAL</strong> <br>\n <strong>d) COLESTEROL HDL </strong> <br>\n <strong>e) COLESTEROL LDL</strong> <br>\n <strong>f) TRIGLICÉRIDOS </strong> <br>\nCon estos datos  podrás obtener una valoración de tu estado de salud.\n\n  </p>\n\n    \n  <img id="img6" src="./assets/imgs/img7.png" alt="">\n</ion-slide>\n\n          \n<ion-slide id="instruccion-8"> \n    \n  <div id="logos">  \n    <img id="img8hs" src="./assets/imgs/logohabitos.png">\n    <img id="imgqvs" src="./assets/imgs/logo.png"> \n   </div>\n   <div id="textos">\n    <img style="position: relative; display: inline-block; width: 25%" src="./assets/imgs/8.png" alt="">\n    <h1 style="color: #96005a; margin-top: 1%"><strong>PERSEVERANCIA</strong></h1>\n  </div>\n  <p style="width: 70%; font-size: 80%; margin-left: 15%; margin-top: 5%; "> <strong>Para asegurar la formación del hábito te recomendamos que realices al menos cinco de las actividades de cada hábito.</strong>\n  </p>\n\n  <button id="botons" ion-button block outline color="primary" (click)="goToMenu()">EMPEZAR</button>  \n  <br>\n  <img id="img4" src="./assets/imgs/img8.png" alt="">\n  \n \n</ion-slide>\n    \n   </ion-slides>  \n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/instrucciones/instrucciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], InstruccionesPage);
    return InstruccionesPage;
}());

//# sourceMappingURL=instrucciones.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaludPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SaludPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SaludPage = /** @class */ (function () {
    function SaludPage(navCtrl, loadingCtrl, platform, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.loader = false;
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary') {
                _this.fondo = './assets/imgs/fintroestadodesalud.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary') {
                _this.fondo = './assets/imgs/fintroestadodesaludh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    }
    SaludPage.prototype.ionViewWillEnter = function () {
        this.estado = false;
    };
    SaludPage.prototype.ionViewDidEnter = function () {
        this.estado = true;
    };
    SaludPage.prototype.ionViewWillLeave = function () {
        this.estado = false;
    };
    SaludPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
            this.fondo = './assets/imgs/fintroestadodesalud.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary' || this.screenOrientation.type == 'landscape-secondary') {
            this.fondo = './assets/imgs/fintroestadodesaludh.jpg';
        }
        console.log('ionViewDidLoad SaludPage');
        this.estado = false;
    };
    SaludPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    SaludPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-salud',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/salud/salud.html"*/'<!--\n  Generated template for the SaludPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Evalua Tu Salud</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="page-salud" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n  <img src="./assets/imgs/estadosalud.png" id="estSalud">\n  <p id="txtestsalud">Puedes obtener los siguientes datos en tu centro de salud, hospital o laboratorio de confianza. Introdúcelos en los siguientes campos y podrás obtener una evaluación de tu estado de salud.</p>\n  <ion-list id="formestsalud">\n    <ion-item col-6 id="txtform" style="width: 49%" tooltip="¡Comencemos! ¡Ingresa tus datos!" [active]="estado" duration=4000 arrow positionV=\'top\'>\n        <ion-label stacked id="lblform"><strong>Presión Arterial</strong></ion-label>\n        <ion-input type="number"  placeholder="mmHg"> </ion-input>\n      </ion-item>\n     \n      <ion-item col-4 id="txtform" style="width: 49%">\n        <ion-label stacked id="lblform"><strong></strong></ion-label>\n        <ion-input type="number" id="txtform"  placeholder="/   mmHg"> </ion-input>\n      </ion-item>\n\n\n      <ion-item col-6 id="txtform" >\n        <ion-label stacked id="lblform"><strong>Glucosa</strong></ion-label>\n        <ion-input type="number"  placeholder="mg/dl"> </ion-input>\n      </ion-item>\n      \n\n      <ion-item col-6 id="txtform" >\n        <ion-label stacked id="lblform"><strong>Colesterol Total</strong></ion-label>\n        <ion-input type="number"  placeholder="mg/dl"> </ion-input>\n      </ion-item>\n\n      <ion-item col-6 id="txtform" >\n        <ion-label stacked id="lblform"><strong>Colesterol HDL</strong></ion-label>\n        <ion-input type="number"  placeholder="mg/dl"> </ion-input>\n      </ion-item>\n    \n      <ion-item col-6 id="txtform" >\n        <ion-label stacked id="lblform"><strong>Colesterol LDL</strong></ion-label>\n        <ion-input type="number"  placeholder="mg/dl"> </ion-input>\n      </ion-item>\n\n      <ion-item col-6 id="txtform" >\n        <ion-label stacked id="lblform"><strong>Triglicéridos</strong></ion-label>\n        <ion-input type="number"  placeholder="mg/dl"> </ion-input>\n      </ion-item>\n        \n        <ion-item col-6 id="txtform">\n            <ion-label id="lblform" stacked><strong>Sexo</strong></ion-label>\n            <ion-select >\n                <ion-option value="masculino">Masculino</ion-option>\n                <ion-option value="femenino">Femenino</ion-option>\n               \n              </ion-select>\n          </ion-item>\n          \n          \n  </ion-list>\n  <button col-3 ion-button block style="margin-left: 37.5%" >CALCULAR</button>\n  <img src="./assets/imgs/dr1.png" id="dr">\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/salud/salud.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], SaludPage);
    return SaludPage;
}());

//# sourceMappingURL=salud.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuHabitosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__habito1_habito1__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__habito2_habito2__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuHabitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuHabitosPage = /** @class */ (function () {
    function MenuHabitosPage(navCtrl, platform, loadingCtrl, navParams, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.habito1 = [];
        this.habito2 = [];
        this.habito3 = [];
        this.habito4 = [];
        this.habito5 = [];
        this.habito6 = [];
        this.habito7 = [];
        this.habito8 = [];
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary' || _this.screenOrientation.type == 'portrait-secondary') {
                _this.fondo = './assets/imgs/fmenuhabitos.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary' || _this.screenOrientation.type == 'landscape-secondary') {
                _this.fondo = './assets/imgs/fmenuhabitosh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
        console.log(window.localStorage.getItem("actividad"));
        //seleccionar sexo de las figuras
        if (window.localStorage.getItem('sexo') == 'femenino') {
            this.sex = 'mujer';
        }
        else if (window.localStorage.getItem('sexo') == 'masculino') {
            this.sex = 'hombre';
        }
        //rellenar figuras deacuerdo a los dias realizados
        if (window.localStorage.getItem("actividad") != "null") {
            var actividad = window.localStorage.getItem("actividad");
            var auxactividad = 7 - actividad;
            for (var i = 0; i < auxactividad; i++) {
                this.habito1[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
            }
            for (var i = auxactividad; i < 7; i++) {
                this.habito1[i] = { titulo: "./assets/imgs/ico" + this.sex + "azul.png" };
            }
        }
        else {
            for (var i = 0; i < 7; i++) {
                this.habito1[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
            }
        }
        for (var i = 0; i < 7; i++) {
            this.habito2[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
        for (var i = 0; i < 7; i++) {
            this.habito3[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
        for (var i = 0; i < 7; i++) {
            this.habito4[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
        for (var i = 0; i < 7; i++) {
            this.habito5[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
        for (var i = 0; i < 7; i++) {
            this.habito6[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
        for (var i = 0; i < 7; i++) {
            this.habito7[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
        for (var i = 0; i < 7; i++) {
            this.habito8[i] = { titulo: "./assets/imgs/ico" + this.sex + "gris.png" };
        }
    }
    MenuHabitosPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/fmenuhabitos.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/fmenuhabitosh.jpg';
        }
    };
    MenuHabitosPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    MenuHabitosPage.prototype.goToHabito1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__habito1_habito1__["a" /* Habito1Page */]);
    };
    MenuHabitosPage.prototype.goToHabito2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__habito2_habito2__["a" /* Habito2Page */]);
    };
    MenuHabitosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-habitos',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/menu-habitos/menu-habitos.html"*/'<!--\n  Generated template for the MenuHabitosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Menu Habitos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="page-menu-habitos" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n\n  \n  <img id="logohabitos" src="./assets/imgs/logohabitos.png"/>\n  \n\n  <ion-grid style=" width:90%; margin-left:5%">\n      <ion-row >\n          <ion-col col-2  style="align-self: center;">\n            <input id="menuhabitologo" src="./assets/imgs/icobeberagua.png" type="image" (click)="goToHabito1()">\n          </ion-col>\n          \n          <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                <strong style="display:inline-block;">Beber Agua<br>\n                    Natural</strong><img id="figuras" *ngFor="let item of habito1" [src]="item.titulo">\n                        \n            </ion-col>\n          \n        </ion-row>\n        \n        <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <input id="menuhabitologo" src="./assets/imgs/icoactitudpositiva.png" type="image" (click)="goToHabito2()">\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Actitud<br>\n                        Positiva</strong><img id="figuras" *ngFor="let item of habito2" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <img style="width:90%; display:relative" src="./assets/imgs/icobiencomer.png"/>\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Bien<br>\n                        Comer</strong><img id="figuras" *ngFor="let item of habito3" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <img style="width:90%; display:relative" src="./assets/imgs/icoactividadfisica.png"/>\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Actividad<br>\n                        Física</strong><img id="figuras" *ngFor="let item of habito4" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <img style="width:90%; display:relative" src="./assets/imgs/icodescansoadecuado.png"/>\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Descanso<br>\n                        Adecuado</strong><img id="figuras" *ngFor="let item of habito5" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <img style="width:90%; display:relative" src="./assets/imgs/icoautocontrol.png"/>\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Auto-Control</strong><img id="figuras" *ngFor="let item of habito6" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <img style="width:90%; display:relative" src="./assets/imgs/icodesayunarmas.png"/>\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Desayunar Más<br>\n                        Y Cenar Menos</strong><img id="figuras" *ngFor="let item of habito7" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-2  style="align-self: center">\n                <img style="width:90%; display:relative" src="./assets/imgs/icoserfeliz.png"/>\n            </ion-col>\n            <ion-col col-10 style="align-self: center;background-color: rgba(255, 255, 255, 0.5); position: relative">\n                    <strong style="display:inline-block;">Ser<br>\n                        Feliz</strong><img id="figuras" *ngFor="let item of habito8" [src]="item.titulo">\n                            \n                </ion-col>\n          </ion-row>\n\n\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/menu-habitos/menu-habitos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MenuHabitosPage);
    return MenuHabitosPage;
}());

//# sourceMappingURL=menu-habitos.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Habito2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introtestagua_introtestagua__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Habito2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Habito2Page = /** @class */ (function () {
    function Habito2Page(navCtrl, platform, restprovider, loadingCtrl, toastCtrl, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.screenOrientation = screenOrientation;
        this.userData = { "id": "", "id_habito": "2", "registro": "actualizafecha" };
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary' || _this.screenOrientation.type == 'portrait-secondary') {
                _this.fondo = './assets/imgs/habito2/fmenuhabito.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary' || _this.screenOrientation.type == 'landscape-secondary') {
                _this.fondo = './assets/imgs/habito2/fmenuhabitoh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
    }
    Habito2Page.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/habito2/fmenuhabito.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/habito2/fmenuhabitoh.jpg';
        }
        console.log('ionViewDidLoad Habito2Page');
    };
    //consulta status del usuario si es nuevo o si ya ha entrado  y actualiza la fecha de entrada a la aplicacion y muestra el estado para lanzar tooltip, muestra toast si ya ha realizado el usuario del dia de hoy
    Habito2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userData.id = window.localStorage.getItem("id");
        this.restprovider.registrotestagua(this.userData).then(function (result) {
            _this.data = result;
            window.localStorage.setItem("actividad", _this.data.actividad);
            _this.dia = _this.data.actividad;
            console.log(window.localStorage.getItem("actividad"));
            if (_this.data.consulta == '¡Ya haz realizado la actividad del día de hoy!') {
                _this.estado = false;
                _this.presentToast(_this.data.consulta);
            }
            else if (_this.data.consulta == 'nuevo') {
                _this.estado = true;
                console.log(_this.data.consulta);
                window.sessionStorage.setItem("consulta", _this.data.consulta);
            }
            else {
                _this.estado = false;
            }
        }, function (err) {
            _this.presentToast(err);
        });
    };
    Habito2Page.prototype.ionViewWillLeave = function () {
        this.estado = false;
    };
    Habito2Page.prototype.ionViewWillenter = function (platform) {
        var _this = this;
        this.estado = false;
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    };
    Habito2Page.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    Habito2Page.prototype.goToTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__introtestagua_introtestagua__["a" /* IntrotestaguaPage */]);
    };
    Habito2Page.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Habito2Page.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    //asignar actividades a los botones actividades
    Habito2Page.prototype.goToActividad1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 0 });
    };
    Habito2Page.prototype.goToActividad2 = function () {
        if (this.dia >= 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 1 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito2Page.prototype.goToActividad3 = function () {
        if (this.dia >= 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 2 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito2Page.prototype.goToActividad4 = function () {
        if (this.dia >= 3) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 3, "consulta": this.data.consulta });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito2Page.prototype.goToActividad5 = function () {
        if (this.dia >= 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 4 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito2Page.prototype.goToActividad6 = function () {
        if (this.dia >= 5) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 5 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito2Page.prototype.goToActividad7 = function () {
        if (this.dia >= 6) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */], { 'auxdia': 6 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-habito2',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/habito2/habito2.html"*/'<!--\n  Generated template for the Habito1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Beber Agua Natural</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <!--fondo de pantalla, icono test y titulo del habito-->\n\n<ion-content id="page-habito1" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n    <input src="./assets/imgs/tablatest.png" id="tablatest"  type="image" (click)="goToTest()"tooltip="¡Sino has realizado tu test es hora! ¡Adelante!" [active]="estado" duration=3000 arrow positionV=\'bottom\'>\n \n  <h5 id="textomenu1">ACTIVIDADES DIARIAS\n    <br>\n    <strong>BEBER AGUA NATURAL</strong>\n  </h5>\n\n  <!--Iconos de los dias del menu del habito-->\n\n  <div id="tablaactividad" style="margin-top:-5%" (click)="goToActividad1()" [class.button-disabled]="true">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 01 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" style="margin-top:-5%" (click)="goToActividad2()">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 02 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" (click)="goToActividad3()">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 03 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" (click)="goToActividad4()">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 04 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad"(click)="goToActividad5()">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 05 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad"(click)="goToActividad6()">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 06 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" style="margin-left:37.5%" (click)="goToActividad7()">\n    <img id="rectangulo" src="./assets/imgs/habito2/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito2/icono.png">\n    <h6 id="dias">\n      <strong>Día 07 de 7</strong>\n    </h6>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/habito2/habito2.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]) === "function" && _f || Object])
    ], Habito2Page);
    return Habito2Page;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=habito2.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividadhbt2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Actividadhbt2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Actividadhbt2Page = /** @class */ (function () {
    function Actividadhbt2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Actividadhbt2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actividadhbt2Page');
    };
    Actividadhbt2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actividadhbt2',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt2/actividadhbt2.html"*/'<!--\n  Generated template for the Actividadhbt2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>actividadhbt2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt2/actividadhbt2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Actividadhbt2Page);
    return Actividadhbt2Page;
}());

//# sourceMappingURL=actividadhbt2.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AguaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actividadhbt1_actividadhbt1__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AguaPage = /** @class */ (function () {
    function AguaPage(navCtrl, navParams, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.fondo = './assets/imgs/fagua.jpg';
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary') {
                _this.fondo = './assets/imgs/fagua.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary') {
                _this.fondo = './assets/imgs/faguah.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.goToHbt();
    }
    AguaPage.prototype.goToHbt = function () {
        var _this = this;
        window.setTimeout(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */]); }, 25000);
    };
    AguaPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
            this.fondo = './assets/imgs/fagua.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary' || this.screenOrientation.type == 'landscape-secondary') {
            this.fondo = './assets/imgs/faguah.jpg';
        }
    };
    AguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agua',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/agua/agua.html"*/'<!--\n  Generated template for the AguaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="page-agua" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n    <img id="logoblancoagua" src="./assets/imgs/logoaguablanco.png">\n    <h1 id="aguatitulo"><strong>BEBER AGUA <BR>\n    NATURAL</strong></h1>\n    <h6 id="txtdescripcionagua">El hábito de Beber Agua Natural es el consumo adecuado de agua de acuerdo al requerimiento mínimo de cada individuo que depende de la dieta, ambiente y nivel de actividad de la persona.</h6>\n    <h5 id="txtdescripcionagua2"><strong>¿Qué necesitas para lograrlo?</strong><br>\n      Una botella de 1 litro para Beber Agua Natural constantemente.<br><br>\n      \n      <strong>¿Cómo puedo lograrlo?</strong><br>\n      Realiza las actividades diarias indicadas en el curso.\n      </h5>\n\n</ion-content>'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/agua/agua.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], AguaPage);
    return AguaPage;
}());

//# sourceMappingURL=agua.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompromisoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agua_agua__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__habito1_habito1__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CompromisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompromisoPage = /** @class */ (function () {
    function CompromisoPage(navCtrl, navParams, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary') {
                _this.fondo = './assets/imgs/fcompromiso.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary') {
                _this.fondo = './assets/imgs/fcompromisoh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
    }
    CompromisoPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/fcompromiso.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/fcompromisoh.jpg';
        }
    };
    CompromisoPage.prototype.goToCompromisoAgua = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__habito1_habito1__["a" /* Habito1Page */]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__agua_agua__["a" /* AguaPage */]);
    };
    CompromisoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compromiso',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/compromiso/compromiso.html"*/'<!--\n  Generated template for the CompromisoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content id="page-compromiso" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n <!-- tituto texto y boton del compromiso    -->\n <h3 id="titlecompromisohbt1"><strong>MI COMPROMISO</strong></h3>\n <h6 id="txtcompromisohbt1">Me comprometo a realizar las actividades de cada semana, practicando también las de la semana anterior; y así desarrollaré un estilo de vida saludable porque yo Quiero ¡Vivir Sano!</h6>\n <button ion-button id="btncompromiso" (click)="goToCompromisoAgua()">ACEPTO</button>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/compromiso/compromiso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], CompromisoPage);
    return CompromisoPage;
}());

//# sourceMappingURL=compromiso.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidePage = /** @class */ (function () {
    function SlidePage(navCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.screenOrientation = screenOrientation;
        this.screenOrientation.lock('portrait');
    }
    SlidePage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slide',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/slide/slide.html"*/'<!--\n  Generated template for the SlidePage page.\n  Generado por Erick Barahona en el depto. Desarrollo financiero de la Universidad de Navojoa\n  para mayor informacion contacto: 1140118@unav.edu.mx\n\n  \n-->\n\n\n  <ion-slides  pager="true">\n    \n    <ion-slide id="slide-1">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos" style="color:white"><p>PROGRAMA PREPARADO <br>PARA AYUDARTE A <br>ADQUIRIR HÁBITOS <br>Y CONDUCTAS <br>SALUDABLES</p></div>\n     </ion-slide>\n\n     <ion-slide id="slide-2">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos" style="font-size:1.6em"><p><strong>DESAFÍA</strong> A <br>TU <strong>CUERPO, <br>ANTES</strong> QUE <br><strong>TU CUERPO </strong><br>TE <strong>DESAFÍE</strong> A <strong>TI</strong></p></div>\n     </ion-slide>\n\n     <ion-slide id="slide-3">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos"><p>HACIA EL <br><strong>DESARROLLO MÁS <br>ELEVADO</strong> DEL<br><strong>CUERPO, </strong>LA <strong>MENTE</strong> Y <br><strong>EL ALMA</strong></p></div>\n     </ion-slide>\n\n     <ion-slide id="slide-4"style="font-size:1.5em">\n      <div id="logos">  \n        <img id="img8hs" src="./assets/imgs/logohabitos.png">\n        <img id="imgqvs" src="./assets/imgs/logo.png"> \n       </div>\n      <div id="textos"><p><strong>¿QUÉ LOGRAS?</strong><br>Tener una vida más <br>\n      abundante y con <br>mejor calidad</p></div>\n     </ion-slide>\n\n              \n     <ion-slide id="slide-5"> \n    \n          <div id="logos">  \n            <img id="img8hs" src="./assets/imgs/logohabitos.png">\n            <img id="imgqvs" src="./assets/imgs/logo.png"> \n           </div>\n          <div id="textos" style="font-size:1.8em; color:#96005a"><p><strong>¡ATRÉVETE A <br>VIVIR SANO!</strong></p></div>\n        \n         \n     </ion-slide>\n    \n   </ion-slides>\n\n   <ion-footer id="piebtn">\n    <div id="boton">\n      <button ion-button color="light" (click)="goToHome()">EMPEZAR</button>\n  </div>\n   </ion-footer>'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/slide/slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_imc_evaluacion_imc__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__test_test__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__salud_salud__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the EvaluacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EvaluacionPage = /** @class */ (function () {
    function EvaluacionPage(navCtrl, platform, loadingCrtl, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCrtl = loadingCrtl;
        this.screenOrientation = screenOrientation;
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary' || _this.screenOrientation.type == 'portrait-secondary') {
                _this.fondo = './assets/imgs/fevaluaciones.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary' || _this.screenOrientation.type == 'landscape-secondary') {
                _this.fondo = './assets/imgs/fevaluacionesh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    }
    EvaluacionPage.prototype.goToSalud = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__salud_salud__["a" /* SaludPage */]);
    };
    EvaluacionPage.prototype.goToIMC = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evaluacion_imc_evaluacion_imc__["a" /* EvaluacionImcPage */]);
    };
    EvaluacionPage.prototype.goToTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__test_test__["a" /* TestPage */]);
    };
    EvaluacionPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/fevaluaciones.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/fevaluacionesh.jpg';
        }
        console.log('ionViewDidLoad EvaluacionPage');
    };
    EvaluacionPage.prototype.cerrarsesion = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    EvaluacionPage.prototype.presentLoading = function () {
        this.loader = this.loadingCrtl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    EvaluacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-evaluacion',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/evaluacion/evaluacion.html"*/'<!--\n  Generated template for the EvaluacionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Evalua tu salud</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content id="page-evaluacion" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n <input src="./assets/imgs/iconoevalua.png" class="botonimagen" type="image" >\n\n <input src="./assets/imgs/iconopeso.png" class="botonpeso" type="image" (click)="goToIMC()">\n <p class="textopeso">EVALUACIÓN<br> <strong>IMC Y PERÍMETRO<br> ABDOMINAL</strong></p>\n <input src="./assets/imgs/iconofamilia.png" class="botonfamilia" type="image" (click)="goToTest()">\n <p class="textofamilia">EVALUACIÓN<br> <strong>DE ESTILO DE VIDA </strong></p>\n <input src="./assets/imgs/iconosclinicos.png" class="botonclinicos" type="image" (click)="goToSalud()">\n <p class="textoclinico">EVALUACIÓN DE<br> <strong>ESTADO DE SALUD </strong></p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/evaluacion/evaluacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], EvaluacionPage);
    return EvaluacionPage;
}());

//# sourceMappingURL=evaluacion.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/actividadhbt1/actividadhbt1.module": [
		342,
		52
	],
	"../pages/actividadhbt2/actividadhbt2.module": [
		343,
		51
	],
	"../pages/actividadhbt3/actividadhbt3.module": [
		344,
		50
	],
	"../pages/actividadhbt4/actividadhbt4.module": [
		345,
		49
	],
	"../pages/actividadhbt5/actividadhbt5.module": [
		346,
		48
	],
	"../pages/agua/agua.module": [
		347,
		47
	],
	"../pages/bienvenida/bienvenida.module": [
		348,
		46
	],
	"../pages/compromiso/compromiso.module": [
		350,
		45
	],
	"../pages/compromisohbt1/compromisohbt1.module": [
		353,
		44
	],
	"../pages/compromisohbt2/compromisohbt2.module": [
		349,
		43
	],
	"../pages/compromisohbt3/compromisohbt3.module": [
		351,
		42
	],
	"../pages/compromisohbt4/compromisohbt4.module": [
		352,
		41
	],
	"../pages/compromisohbt5/compromisohbt5.module": [
		354,
		40
	],
	"../pages/evaluacion-imc/evaluacion-imc.module": [
		355,
		39
	],
	"../pages/evaluacion/evaluacion.module": [
		356,
		38
	],
	"../pages/habito1/habito1.module": [
		357,
		37
	],
	"../pages/habito2/habito2.module": [
		358,
		36
	],
	"../pages/habito3/habito3.module": [
		359,
		35
	],
	"../pages/habito4/habito4.module": [
		360,
		34
	],
	"../pages/habito5/habito5.module": [
		362,
		33
	],
	"../pages/instrucciones/instrucciones.module": [
		361,
		32
	],
	"../pages/introtestagua/introtestagua.module": [
		364,
		31
	],
	"../pages/login/login.module": [
		365,
		30
	],
	"../pages/menu-habitos/menu-habitos.module": [
		363,
		29
	],
	"../pages/menu-principal/menu-principal.module": [
		366,
		28
	],
	"../pages/modal-imc/modal-imc.module": [
		367,
		27
	],
	"../pages/modal-reflexionar1/modal-reflexionar1.module": [
		368,
		26
	],
	"../pages/modal-reflexionar2/modal-reflexionar2.module": [
		369,
		25
	],
	"../pages/modal-reflexionar3/modal-reflexionar3.module": [
		371,
		24
	],
	"../pages/modal-reflexionar4/modal-reflexionar4.module": [
		370,
		23
	],
	"../pages/modal-reflexionar5/modal-reflexionar5.module": [
		372,
		22
	],
	"../pages/modal-tips1/modal-tips1.module": [
		373,
		21
	],
	"../pages/modal-tips2/modal-tips2.module": [
		374,
		20
	],
	"../pages/modal-tips3/modal-tips3.module": [
		375,
		19
	],
	"../pages/modal-tips4/modal-tips4.module": [
		377,
		18
	],
	"../pages/modal-tips5/modal-tips5.module": [
		376,
		17
	],
	"../pages/perimetro-abdominal/perimetro-abdominal.module": [
		378,
		16
	],
	"../pages/registro/registro.module": [
		380,
		15
	],
	"../pages/resultado-imc/resultado-imc.module": [
		394,
		14
	],
	"../pages/resultado-salud/resultado-salud.module": [
		379,
		13
	],
	"../pages/rtestagua/rtestagua.module": [
		381,
		12
	],
	"../pages/salud/salud.module": [
		383,
		11
	],
	"../pages/saludo/saludo.module": [
		382,
		10
	],
	"../pages/slide/slide.module": [
		384,
		9
	],
	"../pages/test-actitudpositiva/test-actitudpositiva.module": [
		387,
		8
	],
	"../pages/test-actividadfisica/test-actividadfisica.module": [
		388,
		7
	],
	"../pages/test-agua/test-agua.module": [
		385,
		6
	],
	"../pages/test-autocontrol/test-autocontrol.module": [
		389,
		5
	],
	"../pages/test-biencomer/test-biencomer.module": [
		390,
		4
	],
	"../pages/test-desayunarmas/test-desayunarmas.module": [
		391,
		3
	],
	"../pages/test-descansoadecuado/test-descansoadecuado.module": [
		392,
		2
	],
	"../pages/test-serfeliz/test-serfeliz.module": [
		393,
		1
	],
	"../pages/test/test.module": [
		386,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtestaguaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_principal_menu_principal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compromiso_compromiso__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RtestaguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RtestaguaPage = /** @class */ (function () {
    function RtestaguaPage(navCtrl, loadingCtrl, platform, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.promedio = window.localStorage.getItem('rtestagua');
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary') {
                _this.fondo = './assets/imgs/frtestagua.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary') {
                _this.fondo = './assets/imgs/frtestaguah.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
        if (this.promedio >= 91) {
            this.resultado = "¡Excelente!";
            this.color = "#185417";
            this.contenido = "¡Felicitaciones! casi todos los aspectos de tu vida, con respecto a este hábito, son saludables. Solo unos pocos cambios y lograrás una vida aún más saludable. El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
        }
        else if (this.promedio < 91 && this.promedio >= 81) {
            this.resultado = "¡Muy Bueno!";
            this.color = "#458f31";
            this.contenido = "¡Muy bien! muchos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar nuevos cambios que te acerquen a una vida más saludable. ¡Puedes hacerlo! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual). ";
        }
        else if (this.promedio < 81 && this.promedio >= 71) {
            this.resultado = "¡Bueno!";
            this.color = "#e1c206";
            this.contenido = "¡Bien! algunos aspectos de tu vida, con respecto a este hábito, son saludables. ¡Felicitaciones! Puedes realizar unos pocos cambios que te acerquen aún más a una vida más saludable. Puedes hacerlo. ¡Tú eres protagonista de tu vida!. El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
        }
        else if (this.promedio < 71 && this.promedio >= 61) {
            this.resultado = "¡Malo!";
            this.color = "#d54b00";
            this.contenido = "Estás un poco alejado de una vida saludable en este hábito. Revisa tu estilo de vida y haz cambios que te acerquen a una vida más saludable. Lo importante es que transformes tu realidad. Puedes hacerlo. ¡Tú eres protagonista de tu vida! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
        }
        else if (this.promedio < 61) {
            this.resultado = "¡Muy Malo!";
            this.color = "#c40404";
            this.contenido = "¡Es urgente que revises tu estilo de vida! Haz los cambios necesarios para lograr una vida saludable. Transforma tu realidad, ¡puedes lograrlo! El hábito de Beber Agua Natural te ayudará a mantenerte bien hidratado durante el día. La mayor parte de nuestro peso es agua y es vital para que nuestro organismo funcione de la mejor manera. Adquirir y mantener este Hábito Saludable beneficiará a tu cuerpo en todas sus dimensiones (física, mental, social y espiritual).";
        }
    }
    RtestaguaPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary' || this.screenOrientation.type == 'portrait-secondary') {
            this.fondo = './assets/imgs/frtestagua.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary' || this.screenOrientation.type == 'landscape-secondary') {
            this.fondo = './assets/imgs/frtestaguah.jpg';
        }
        console.log('ionViewDidLoad RtestaguaPage');
    };
    RtestaguaPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    RtestaguaPage.prototype.goToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_principal_menu_principal__["a" /* MenuPrincipalPage */]);
        if (window.sessionStorage.getItem("consulta") == 'nuevo') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__compromiso_compromiso__["a" /* CompromisoPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
        }
    };
    RtestaguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rtestagua',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/rtestagua/rtestagua.html"*/'<!--\n  Generated template for the RtestaguaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content id="page-rtestagua" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n    <img id="personas"  src="./assets/imgs/personasresultado.png">\n    <br><br>\n    <h1 id="rta" style="color:#223d5b; text-align:center"><strong>RESULTADOS</strong></h1>\n    <H3 style="position:relative;color:#223d5b; width:70%;margin-left:15%;text-align:center">BEBER AGUA NATURAL</H3>\n    <h1  id="rta" style="font-size:250%" [ngStyle]="{\'color\': \'\' + color + \'\'}"> {{resultado}}</h1>\n    <p id="contenidota"><strong> {{contenido}} </strong></p>\n    <button ion-button color="light" outline style="display:inline; position:relative; width: 40%; margin-left: 30%" (click)=\'goToMenu()\' >SIGUIENTE</button>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/rtestagua/rtestagua.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], RtestaguaPage);
    return RtestaguaPage;
}());

//# sourceMappingURL=rtestagua.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividadhbt3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Actividadhbt3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Actividadhbt3Page = /** @class */ (function () {
    function Actividadhbt3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Actividadhbt3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actividadhbt3Page');
    };
    Actividadhbt3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actividadhbt3',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt3/actividadhbt3.html"*/'<!--\n  Generated template for the Actividadhbt3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>actividadhbt3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt3/actividadhbt3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Actividadhbt3Page);
    return Actividadhbt3Page;
}());

//# sourceMappingURL=actividadhbt3.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividadhbt4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Actividadhbt4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Actividadhbt4Page = /** @class */ (function () {
    function Actividadhbt4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Actividadhbt4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actividadhbt4Page');
    };
    Actividadhbt4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actividadhbt4',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt4/actividadhbt4.html"*/'<!--\n  Generated template for the Actividadhbt4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>actividadhbt4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt4/actividadhbt4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Actividadhbt4Page);
    return Actividadhbt4Page;
}());

//# sourceMappingURL=actividadhbt4.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividadhbt5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Actividadhbt5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Actividadhbt5Page = /** @class */ (function () {
    function Actividadhbt5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Actividadhbt5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Actividadhbt5Page');
    };
    Actividadhbt5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actividadhbt5',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt5/actividadhbt5.html"*/'<!--\n  Generated template for the Actividadhbt5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>actividadhbt5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt5/actividadhbt5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Actividadhbt5Page);
    return Actividadhbt5Page;
}());

//# sourceMappingURL=actividadhbt5.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compromisohbt2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Compromisohbt2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Compromisohbt2Page = /** @class */ (function () {
    function Compromisohbt2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Compromisohbt2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Compromisohbt2Page');
    };
    Compromisohbt2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compromisohbt2',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt2/compromisohbt2.html"*/'<!--\n  Generated template for the Compromisohbt2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>compromisohbt2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt2/compromisohbt2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Compromisohbt2Page);
    return Compromisohbt2Page;
}());

//# sourceMappingURL=compromisohbt2.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compromisohbt3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Compromisohbt3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Compromisohbt3Page = /** @class */ (function () {
    function Compromisohbt3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Compromisohbt3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Compromisohbt3Page');
    };
    Compromisohbt3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compromisohbt3',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt3/compromisohbt3.html"*/'<!--\n  Generated template for the Compromisohbt3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>compromisohbt3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt3/compromisohbt3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Compromisohbt3Page);
    return Compromisohbt3Page;
}());

//# sourceMappingURL=compromisohbt3.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compromisohbt4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Compromisohbt4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Compromisohbt4Page = /** @class */ (function () {
    function Compromisohbt4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Compromisohbt4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Compromisohbt4Page');
    };
    Compromisohbt4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compromisohbt4',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt4/compromisohbt4.html"*/'<!--\n  Generated template for the Compromisohbt4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>compromisohbt4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt4/compromisohbt4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Compromisohbt4Page);
    return Compromisohbt4Page;
}());

//# sourceMappingURL=compromisohbt4.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Compromisohbt5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Compromisohbt5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Compromisohbt5Page = /** @class */ (function () {
    function Compromisohbt5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Compromisohbt5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Compromisohbt5Page');
    };
    Compromisohbt5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compromisohbt5',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt5/compromisohbt5.html"*/'<!--\n  Generated template for the Compromisohbt5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>compromisohbt5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/compromisohbt5/compromisohbt5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Compromisohbt5Page);
    return Compromisohbt5Page;
}());

//# sourceMappingURL=compromisohbt5.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Habito3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Habito3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Habito3Page = /** @class */ (function () {
    function Habito3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Habito3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Habito3Page');
    };
    Habito3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-habito3',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/habito3/habito3.html"*/'<!--\n  Generated template for the Habito3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>habito3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/habito3/habito3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Habito3Page);
    return Habito3Page;
}());

//# sourceMappingURL=habito3.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Habito4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Habito4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Habito4Page = /** @class */ (function () {
    function Habito4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Habito4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Habito4Page');
    };
    Habito4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-habito4',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/habito4/habito4.html"*/'<!--\n  Generated template for the Habito4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>habito4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/habito4/habito4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Habito4Page);
    return Habito4Page;
}());

//# sourceMappingURL=habito4.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Habito5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Habito5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Habito5Page = /** @class */ (function () {
    function Habito5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Habito5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Habito5Page');
    };
    Habito5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-habito5',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/habito5/habito5.html"*/'<!--\n  Generated template for the Habito5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>habito5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/habito5/habito5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Habito5Page);
    return Habito5Page;
}());

//# sourceMappingURL=habito5.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReflexionar2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalReflexionar2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalReflexionar2Page = /** @class */ (function () {
    function ModalReflexionar2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalReflexionar2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalReflexionar2Page');
    };
    ModalReflexionar2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-reflexionar2',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar2/modal-reflexionar2.html"*/'<!--\n  Generated template for the ModalReflexionar2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalReflexionar2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar2/modal-reflexionar2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalReflexionar2Page);
    return ModalReflexionar2Page;
}());

//# sourceMappingURL=modal-reflexionar2.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReflexionar4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalReflexionar4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalReflexionar4Page = /** @class */ (function () {
    function ModalReflexionar4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalReflexionar4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalReflexionar4Page');
    };
    ModalReflexionar4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-reflexionar4',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar4/modal-reflexionar4.html"*/'<!--\n  Generated template for the ModalReflexionar4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalReflexionar4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar4/modal-reflexionar4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalReflexionar4Page);
    return ModalReflexionar4Page;
}());

//# sourceMappingURL=modal-reflexionar4.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReflexionar3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalReflexionar3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalReflexionar3Page = /** @class */ (function () {
    function ModalReflexionar3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalReflexionar3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalReflexionar3Page');
    };
    ModalReflexionar3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-reflexionar3',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar3/modal-reflexionar3.html"*/'<!--\n  Generated template for the ModalReflexionar3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalReflexionar3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar3/modal-reflexionar3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalReflexionar3Page);
    return ModalReflexionar3Page;
}());

//# sourceMappingURL=modal-reflexionar3.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReflexionar5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalReflexionar5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalReflexionar5Page = /** @class */ (function () {
    function ModalReflexionar5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalReflexionar5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalReflexionar5Page');
    };
    ModalReflexionar5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-reflexionar5',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar5/modal-reflexionar5.html"*/'<!--\n  Generated template for the ModalReflexionar5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalReflexionar5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-reflexionar5/modal-reflexionar5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalReflexionar5Page);
    return ModalReflexionar5Page;
}());

//# sourceMappingURL=modal-reflexionar5.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTips2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalTips2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTips2Page = /** @class */ (function () {
    function ModalTips2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalTips2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalTips2Page');
    };
    ModalTips2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-tips2',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips2/modal-tips2.html"*/'<!--\n  Generated template for the ModalTips2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalTips2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips2/modal-tips2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalTips2Page);
    return ModalTips2Page;
}());

//# sourceMappingURL=modal-tips2.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTips3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalTips3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTips3Page = /** @class */ (function () {
    function ModalTips3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalTips3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalTips3Page');
    };
    ModalTips3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-tips3',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips3/modal-tips3.html"*/'<!--\n  Generated template for the ModalTips3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalTips3</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips3/modal-tips3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalTips3Page);
    return ModalTips3Page;
}());

//# sourceMappingURL=modal-tips3.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTips5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalTips5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTips5Page = /** @class */ (function () {
    function ModalTips5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalTips5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalTips5Page');
    };
    ModalTips5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-tips5',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips5/modal-tips5.html"*/'<!--\n  Generated template for the ModalTips5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalTips5</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips5/modal-tips5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalTips5Page);
    return ModalTips5Page;
}());

//# sourceMappingURL=modal-tips5.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalTips4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ModalTips4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalTips4Page = /** @class */ (function () {
    function ModalTips4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModalTips4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalTips4Page');
    };
    ModalTips4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-tips4',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips4/modal-tips4.html"*/'<!--\n  Generated template for the ModalTips4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>modalTips4</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/modal-tips4/modal-tips4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ModalTips4Page);
    return ModalTips4Page;
}());

//# sourceMappingURL=modal-tips4.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoSaludPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResultadoSaludPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadoSaludPage = /** @class */ (function () {
    function ResultadoSaludPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResultadoSaludPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadoSaludPage');
    };
    ResultadoSaludPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultado-salud',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/resultado-salud/resultado-salud.html"*/'<!--\n  Generated template for the ResultadoSaludPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>resultadoSalud</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/resultado-salud/resultado-salud.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResultadoSaludPage);
    return ResultadoSaludPage;
}());

//# sourceMappingURL=resultado-salud.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(278);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_test_descansoadecuado_test_descansoadecuado__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_test_serfeliz_test_serfeliz__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_test_biencomer_test_biencomer__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_test_desayunarmas_test_desayunarmas__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_test_autocontrol_test_autocontrol__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_test_actividadfisica_test_actividadfisica__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_test_actitudpositiva_test_actitudpositiva__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_instrucciones_instrucciones__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modal_tips1_modal_tips1__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modal_reflexionar1_modal_reflexionar1__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_tooltips__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_slide_slide__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_saludo_saludo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_registro_registro__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_bienvenida_bienvenida__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_evaluacion_imc_evaluacion_imc__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_modal_imc_modal_imc__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_resultado_imc_resultado_imc__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_perimetro_abdominal_perimetro_abdominal__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_test_test__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_test_agua_test_agua__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_rtestagua_rtestagua__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_introtestagua_introtestagua__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_menu_principal_menu_principal__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_menu_habitos_menu_habitos__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_habito1_habito1__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_resultado_salud_resultado_salud__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_salud_salud__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_compromisohbt1_compromisohbt1__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_compromiso_compromiso__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_agua_agua__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_actividadhbt1_actividadhbt1__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_in_app_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_screen_orientation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_actividadhbt2_actividadhbt2__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_actividadhbt3_actividadhbt3__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_actividadhbt4_actividadhbt4__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_actividadhbt5_actividadhbt5__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_compromisohbt2_compromisohbt2__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_compromisohbt3_compromisohbt3__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_compromisohbt4_compromisohbt4__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_compromisohbt5_compromisohbt5__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_habito2_habito2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_habito3_habito3__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_habito4_habito4__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_habito5_habito5__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_modal_reflexionar2_modal_reflexionar2__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_modal_reflexionar3_modal_reflexionar3__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_modal_reflexionar4_modal_reflexionar4__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_modal_reflexionar5_modal_reflexionar5__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_modal_tips2_modal_tips2__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_modal_tips3_modal_tips3__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_modal_tips4_modal_tips4__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_modal_tips5_modal_tips5__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_saludo_saludo__["a" /* SaludoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_bienvenida_bienvenida__["a" /* BienvenidaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_evaluacion_evaluacion__["a" /* EvaluacionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_evaluacion_imc_evaluacion_imc__["a" /* EvaluacionImcPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_imc_modal_imc__["a" /* ModalImcPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_resultado_imc_resultado_imc__["a" /* ResultadoImcPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_perimetro_abdominal_perimetro_abdominal__["a" /* PerimetroAbdominalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_test_agua_test_agua__["a" /* TestAguaPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_rtestagua_rtestagua__["a" /* RtestaguaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_introtestagua_introtestagua__["a" /* IntrotestaguaPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_menu_principal_menu_principal__["a" /* MenuPrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_menu_habitos_menu_habitos__["a" /* MenuHabitosPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_habito1_habito1__["a" /* Habito1Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_salud_salud__["a" /* SaludPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_resultado_salud_resultado_salud__["a" /* ResultadoSaludPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_compromisohbt1_compromisohbt1__["a" /* Compromisohbt1Page */],
                __WEBPACK_IMPORTED_MODULE_42__pages_compromiso_compromiso__["a" /* CompromisoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_agua_agua__["a" /* AguaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_reflexionar1_modal_reflexionar1__["a" /* ModalReflexionar1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_tips1_modal_tips1__["a" /* ModalTips1Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_test_actitudpositiva_test_actitudpositiva__["a" /* TestActitudpositivaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_test_actividadfisica_test_actividadfisica__["a" /* TestActividadfisicaPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_test_autocontrol_test_autocontrol__["a" /* TestAutocontrolPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_test_desayunarmas_test_desayunarmas__["a" /* TestDesayunarmasPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_test_biencomer_test_biencomer__["a" /* TestBiencomerPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_test_serfeliz_test_serfeliz__["a" /* TestSerfelizPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_test_descansoadecuado_test_descansoadecuado__["a" /* TestDescansoadecuadoPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */],
                __WEBPACK_IMPORTED_MODULE_49__pages_actividadhbt3_actividadhbt3__["a" /* Actividadhbt3Page */],
                __WEBPACK_IMPORTED_MODULE_50__pages_actividadhbt4_actividadhbt4__["a" /* Actividadhbt4Page */],
                __WEBPACK_IMPORTED_MODULE_51__pages_actividadhbt5_actividadhbt5__["a" /* Actividadhbt5Page */],
                __WEBPACK_IMPORTED_MODULE_52__pages_compromisohbt2_compromisohbt2__["a" /* Compromisohbt2Page */],
                __WEBPACK_IMPORTED_MODULE_53__pages_compromisohbt3_compromisohbt3__["a" /* Compromisohbt3Page */],
                __WEBPACK_IMPORTED_MODULE_54__pages_compromisohbt4_compromisohbt4__["a" /* Compromisohbt4Page */],
                __WEBPACK_IMPORTED_MODULE_55__pages_compromisohbt5_compromisohbt5__["a" /* Compromisohbt5Page */],
                __WEBPACK_IMPORTED_MODULE_56__pages_habito2_habito2__["a" /* Habito2Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_habito3_habito3__["a" /* Habito3Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_habito4_habito4__["a" /* Habito4Page */],
                __WEBPACK_IMPORTED_MODULE_59__pages_habito5_habito5__["a" /* Habito5Page */],
                __WEBPACK_IMPORTED_MODULE_60__pages_modal_reflexionar2_modal_reflexionar2__["a" /* ModalReflexionar2Page */],
                __WEBPACK_IMPORTED_MODULE_61__pages_modal_reflexionar3_modal_reflexionar3__["a" /* ModalReflexionar3Page */],
                __WEBPACK_IMPORTED_MODULE_62__pages_modal_reflexionar4_modal_reflexionar4__["a" /* ModalReflexionar4Page */],
                __WEBPACK_IMPORTED_MODULE_63__pages_modal_reflexionar5_modal_reflexionar5__["a" /* ModalReflexionar5Page */],
                __WEBPACK_IMPORTED_MODULE_64__pages_modal_tips2_modal_tips2__["a" /* ModalTips2Page */],
                __WEBPACK_IMPORTED_MODULE_65__pages_modal_tips3_modal_tips3__["a" /* ModalTips3Page */],
                __WEBPACK_IMPORTED_MODULE_66__pages_modal_tips4_modal_tips4__["a" /* ModalTips4Page */],
                __WEBPACK_IMPORTED_MODULE_67__pages_modal_tips5_modal_tips5__["a" /* ModalTips5Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/actividadhbt1/actividadhbt1.module#Actividadhbt1PageModule', name: 'Actividadhbt1Page', segment: 'actividadhbt1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/actividadhbt2/actividadhbt2.module#Actividadhbt2PageModule', name: 'Actividadhbt2Page', segment: 'actividadhbt2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/actividadhbt3/actividadhbt3.module#Actividadhbt3PageModule', name: 'Actividadhbt3Page', segment: 'actividadhbt3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/actividadhbt4/actividadhbt4.module#Actividadhbt4PageModule', name: 'Actividadhbt4Page', segment: 'actividadhbt4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/actividadhbt5/actividadhbt5.module#Actividadhbt5PageModule', name: 'Actividadhbt5Page', segment: 'actividadhbt5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agua/agua.module#AguaPageModule', name: 'AguaPage', segment: 'agua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bienvenida/bienvenida.module#BienvenidaPageModule', name: 'BienvenidaPage', segment: 'bienvenida', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compromisohbt2/compromisohbt2.module#Compromisohbt2PageModule', name: 'Compromisohbt2Page', segment: 'compromisohbt2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compromiso/compromiso.module#CompromisoPageModule', name: 'CompromisoPage', segment: 'compromiso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compromisohbt3/compromisohbt3.module#Compromisohbt3PageModule', name: 'Compromisohbt3Page', segment: 'compromisohbt3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compromisohbt4/compromisohbt4.module#Compromisohbt4PageModule', name: 'Compromisohbt4Page', segment: 'compromisohbt4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compromisohbt1/compromisohbt1.module#Compromisohbt1PageModule', name: 'Compromisohbt1Page', segment: 'compromisohbt1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compromisohbt5/compromisohbt5.module#Compromisohbt5PageModule', name: 'Compromisohbt5Page', segment: 'compromisohbt5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evaluacion-imc/evaluacion-imc.module#EvaluacionImcPageModule', name: 'EvaluacionImcPage', segment: 'evaluacion-imc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/evaluacion/evaluacion.module#EvaluacionPageModule', name: 'EvaluacionPage', segment: 'evaluacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/habito1/habito1.module#Habito1PageModule', name: 'Habito1Page', segment: 'habito1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/habito2/habito2.module#Habito2PageModule', name: 'Habito2Page', segment: 'habito2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/habito3/habito3.module#Habito3PageModule', name: 'Habito3Page', segment: 'habito3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/habito4/habito4.module#Habito4PageModule', name: 'Habito4Page', segment: 'habito4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/instrucciones/instrucciones.module#InstruccionesPageModule', name: 'InstruccionesPage', segment: 'instrucciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/habito5/habito5.module#Habito5PageModule', name: 'Habito5Page', segment: 'habito5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-habitos/menu-habitos.module#MenuHabitosPageModule', name: 'MenuHabitosPage', segment: 'menu-habitos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/introtestagua/introtestagua.module#IntrotestaguaPageModule', name: 'IntrotestaguaPage', segment: 'introtestagua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-principal/menu-principal.module#MenuPrincipalPageModule', name: 'MenuPrincipalPage', segment: 'menu-principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-imc/modal-imc.module#ModalImcPageModule', name: 'ModalImcPage', segment: 'modal-imc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reflexionar1/modal-reflexionar1.module#ModalReflexionar1PageModule', name: 'ModalReflexionar1Page', segment: 'modal-reflexionar1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reflexionar2/modal-reflexionar2.module#ModalReflexionar2PageModule', name: 'ModalReflexionar2Page', segment: 'modal-reflexionar2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reflexionar4/modal-reflexionar4.module#ModalReflexionar4PageModule', name: 'ModalReflexionar4Page', segment: 'modal-reflexionar4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reflexionar3/modal-reflexionar3.module#ModalReflexionar3PageModule', name: 'ModalReflexionar3Page', segment: 'modal-reflexionar3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reflexionar5/modal-reflexionar5.module#ModalReflexionar5PageModule', name: 'ModalReflexionar5Page', segment: 'modal-reflexionar5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-tips1/modal-tips1.module#ModalTips1PageModule', name: 'ModalTips1Page', segment: 'modal-tips1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-tips2/modal-tips2.module#ModalTips2PageModule', name: 'ModalTips2Page', segment: 'modal-tips2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-tips3/modal-tips3.module#ModalTips3PageModule', name: 'ModalTips3Page', segment: 'modal-tips3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-tips5/modal-tips5.module#ModalTips5PageModule', name: 'ModalTips5Page', segment: 'modal-tips5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-tips4/modal-tips4.module#ModalTips4PageModule', name: 'ModalTips4Page', segment: 'modal-tips4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perimetro-abdominal/perimetro-abdominal.module#PerimetroAbdominalPageModule', name: 'PerimetroAbdominalPage', segment: 'perimetro-abdominal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultado-salud/resultado-salud.module#ResultadoSaludPageModule', name: 'ResultadoSaludPage', segment: 'resultado-salud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rtestagua/rtestagua.module#RtestaguaPageModule', name: 'RtestaguaPage', segment: 'rtestagua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saludo/saludo.module#SaludoPageModule', name: 'SaludoPage', segment: 'saludo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salud/salud.module#SaludPageModule', name: 'SaludPage', segment: 'salud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-agua/test-agua.module#TestAguaPageModule', name: 'TestAguaPage', segment: 'test-agua', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-actitudpositiva/test-actitudpositiva.module#TestActitudpositivaPageModule', name: 'TestActitudpositivaPage', segment: 'test-actitudpositiva', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-actividadfisica/test-actividadfisica.module#TestActividadfisicaPageModule', name: 'TestActividadfisicaPage', segment: 'test-actividadfisica', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-autocontrol/test-autocontrol.module#TestAutocontrolPageModule', name: 'TestAutocontrolPage', segment: 'test-autocontrol', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-biencomer/test-biencomer.module#TestBiencomerPageModule', name: 'TestBiencomerPage', segment: 'test-biencomer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-desayunarmas/test-desayunarmas.module#TestDesayunarmasPageModule', name: 'TestDesayunarmasPage', segment: 'test-desayunarmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-descansoadecuado/test-descansoadecuado.module#TestDescansoadecuadoPageModule', name: 'TestDescansoadecuadoPage', segment: 'test-descansoadecuado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-serfeliz/test-serfeliz.module#TestSerfelizPageModule', name: 'TestSerfelizPage', segment: 'test-serfeliz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultado-imc/resultado-imc.module#ResultadoImcPageModule', name: 'ResultadoImcPage', segment: 'resultado-imc', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ionic_tooltips__["a" /* TooltipsModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__["b" /* NoopAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_slide_slide__["a" /* SlidePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_saludo_saludo__["a" /* SaludoPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_bienvenida_bienvenida__["a" /* BienvenidaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_evaluacion_evaluacion__["a" /* EvaluacionPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_evaluacion_imc_evaluacion_imc__["a" /* EvaluacionImcPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_modal_imc_modal_imc__["a" /* ModalImcPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_resultado_imc_resultado_imc__["a" /* ResultadoImcPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_perimetro_abdominal_perimetro_abdominal__["a" /* PerimetroAbdominalPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_test_agua_test_agua__["a" /* TestAguaPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_rtestagua_rtestagua__["a" /* RtestaguaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_introtestagua_introtestagua__["a" /* IntrotestaguaPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_menu_principal_menu_principal__["a" /* MenuPrincipalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_menu_habitos_menu_habitos__["a" /* MenuHabitosPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_habito1_habito1__["a" /* Habito1Page */],
                __WEBPACK_IMPORTED_MODULE_39__pages_salud_salud__["a" /* SaludPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_resultado_salud_resultado_salud__["a" /* ResultadoSaludPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_compromisohbt1_compromisohbt1__["a" /* Compromisohbt1Page */],
                __WEBPACK_IMPORTED_MODULE_42__pages_compromiso_compromiso__["a" /* CompromisoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_agua_agua__["a" /* AguaPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_modal_reflexionar1_modal_reflexionar1__["a" /* ModalReflexionar1Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modal_tips1_modal_tips1__["a" /* ModalTips1Page */],
                __WEBPACK_IMPORTED_MODULE_7__pages_instrucciones_instrucciones__["a" /* InstruccionesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_test_actitudpositiva_test_actitudpositiva__["a" /* TestActitudpositivaPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_test_actividadfisica_test_actividadfisica__["a" /* TestActividadfisicaPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_test_autocontrol_test_autocontrol__["a" /* TestAutocontrolPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_test_desayunarmas_test_desayunarmas__["a" /* TestDesayunarmasPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_test_biencomer_test_biencomer__["a" /* TestBiencomerPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_test_serfeliz_test_serfeliz__["a" /* TestSerfelizPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_test_descansoadecuado_test_descansoadecuado__["a" /* TestDescansoadecuadoPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_actividadhbt2_actividadhbt2__["a" /* Actividadhbt2Page */],
                __WEBPACK_IMPORTED_MODULE_49__pages_actividadhbt3_actividadhbt3__["a" /* Actividadhbt3Page */],
                __WEBPACK_IMPORTED_MODULE_50__pages_actividadhbt4_actividadhbt4__["a" /* Actividadhbt4Page */],
                __WEBPACK_IMPORTED_MODULE_51__pages_actividadhbt5_actividadhbt5__["a" /* Actividadhbt5Page */],
                __WEBPACK_IMPORTED_MODULE_52__pages_compromisohbt2_compromisohbt2__["a" /* Compromisohbt2Page */],
                __WEBPACK_IMPORTED_MODULE_53__pages_compromisohbt3_compromisohbt3__["a" /* Compromisohbt3Page */],
                __WEBPACK_IMPORTED_MODULE_54__pages_compromisohbt4_compromisohbt4__["a" /* Compromisohbt4Page */],
                __WEBPACK_IMPORTED_MODULE_55__pages_compromisohbt5_compromisohbt5__["a" /* Compromisohbt5Page */],
                __WEBPACK_IMPORTED_MODULE_56__pages_habito2_habito2__["a" /* Habito2Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_habito3_habito3__["a" /* Habito3Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_habito4_habito4__["a" /* Habito4Page */],
                __WEBPACK_IMPORTED_MODULE_59__pages_habito5_habito5__["a" /* Habito5Page */],
                __WEBPACK_IMPORTED_MODULE_60__pages_modal_reflexionar2_modal_reflexionar2__["a" /* ModalReflexionar2Page */],
                __WEBPACK_IMPORTED_MODULE_61__pages_modal_reflexionar3_modal_reflexionar3__["a" /* ModalReflexionar3Page */],
                __WEBPACK_IMPORTED_MODULE_62__pages_modal_reflexionar4_modal_reflexionar4__["a" /* ModalReflexionar4Page */],
                __WEBPACK_IMPORTED_MODULE_63__pages_modal_reflexionar5_modal_reflexionar5__["a" /* ModalReflexionar5Page */],
                __WEBPACK_IMPORTED_MODULE_64__pages_modal_tips2_modal_tips2__["a" /* ModalTips2Page */],
                __WEBPACK_IMPORTED_MODULE_65__pages_modal_tips3_modal_tips3__["a" /* ModalTips3Page */],
                __WEBPACK_IMPORTED_MODULE_66__pages_modal_tips4_modal_tips4__["a" /* ModalTips4Page */],
                __WEBPACK_IMPORTED_MODULE_67__pages_modal_tips5_modal_tips5__["a" /* ModalTips5Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_22__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_habitos_menu_habitos__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MenuPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPrincipalPage = /** @class */ (function () {
    function MenuPrincipalPage(navCtrl, platform, loadingCtrl, restProvider, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.restProvider = restProvider;
        this.screenOrientation = screenOrientation;
        this.userData = { "id": "", "registro": "consultaAct" };
        this.screenOrientation.unlock();
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary' || _this.screenOrientation.type == 'portrait-secondary') {
                _this.fondo = './assets/imgs/fmenuprincipal.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary' || _this.screenOrientation.type == 'landscape-secondary') {
                _this.fondo = './assets/imgs/fmenuprincipalh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    }
    MenuPrincipalPage.prototype.ionViewDidLoad = function (screenOrientation) {
        var _this = this;
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/fmenuprincipal.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/fmenuprincipalh.jpg';
        }
        console.log(this.screenOrientation.type);
        console.log('ionViewDidLoad MenuPrincipalPage');
        this.userData.id = window.localStorage.getItem("id");
        this.restProvider.acepto(this.userData).then(function (result) {
            _this.data = result;
            window.localStorage.setItem("actividad", _this.data.actividad);
        }, function (err) {
            console.log(err);
        });
    };
    MenuPrincipalPage.prototype.goToEvaluacion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__evaluacion_evaluacion__["a" /* EvaluacionPage */]);
    };
    MenuPrincipalPage.prototype.cerrarsesion = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        window.localStorage.removeItem('token');
    };
    MenuPrincipalPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    MenuPrincipalPage.prototype.goToHabitos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__menu_habitos_menu_habitos__["a" /* MenuHabitosPage */]);
    };
    MenuPrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-principal',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/menu-principal/menu-principal.html"*/'<!--\n  Generated template for the MenuPrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content id="page-menu-principal"  [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n  <div class="logosmenu">  \n    <img id="img8hs" src="./assets/imgs/logohabitos.png">\n    <img id="imgqvs" src="./assets/imgs/logo.png"> \n   </div>\n\n   <div class="logosmenu" style="margin-top:30%">  \n    <input id="logo1" src="./assets/imgs/iconoinstrucciones.png" type="image">\n    <input id="logo2" src="./assets/imgs/iconohabitos.png" type="image" (click)="goToHabitos()">\n   </div>\n\n   <div class="logosmenu" style="margin-top:-8%">  \n    <input id="logo1" src="./assets/imgs/iconoevaluacion.png" type="image" (click)="goToEvaluacion()">\n    <input id="logo2" src="./assets/imgs/iconocomunidad.png" type="image">\n   </div>\n\n\n   <input id="CS" style="margin-top:-15%" src="./assets/imgs/iconocerrarsesion.png" type="image" (click)="cerrarsesion()">\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/menu-principal/menu-principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MenuPrincipalPage);
    return MenuPrincipalPage;
}());

//# sourceMappingURL=menu-principal.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_slide_slide__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_principal_menu_principal__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, loadingCtrl, storage) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_slide_slide__["a" /* SlidePage */];
        this.presentLoading();
        platform.ready().then(function () {
            if (window.localStorage.getItem("token") != null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_principal_menu_principal__["a" /* MenuPrincipalPage */];
                _this.loader.dismiss();
            }
            else {
                _this.storage.get('slideshow').then(function (result) {
                    if (result) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_slide_slide__["a" /* SlidePage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_slide_slide__["a" /* SlidePage */];
                        _this.storage.set('slideshow', true);
                    }
                    _this.loader.dismiss();
                });
            }
        });
    }
    MyApp.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Autenticando..."
        });
        this.loader.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntrotestaguaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_agua_test_agua__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IntrotestaguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntrotestaguaPage = /** @class */ (function () {
    function IntrotestaguaPage(navCtrl, loadingCtrl, platform, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary') {
                _this.fondo = './assets/imgs/fportadatestagua.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary') {
                _this.fondo = './assets/imgs/fportadatestaguah.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
        this.goToTestAgua1();
    }
    IntrotestaguaPage.prototype.goToTestAgua1 = function () {
        var _this = this;
        window.setTimeout(function () { return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_agua_test_agua__["a" /* TestAguaPage */]); }, 5000);
    };
    IntrotestaguaPage.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/fportadatestagua.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/fportadatestaguah.jpg';
        }
        console.log('ionViewDidLoad IntrotestaguaPage');
    };
    IntrotestaguaPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    IntrotestaguaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-introtestagua',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/introtestagua/introtestagua.html"*/'<!--\n  Generated template for the IntrotestaguaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content id="page-introtestagua" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n  <h1 id="encabezadoportada">EVALUACIÓN DE MI <BR> ESTILO DE VIDA</h1><br><br>\n    <img id="beberaguanatural" src =\'./assets/imgs/BEBERAGUANATURALLATERAL1.png\'>\n    <p id="txtportadabeberaguanatural">Te invitamos a responder con sinceridad las siguientes preguntas. Te permitirá conocer tus hábitos y conductas cotidianas y saber si tienes un estilo de vida saludable. <br><br>No hay respuestas correctas o incorrectas, estas serán confidenciales y la opinión que expreses será muy valiosaen la recolección de la información.</p>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/introtestagua/introtestagua.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], IntrotestaguaPage);
    return IntrotestaguaPage;
}());

//# sourceMappingURL=introtestagua.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saludo_saludo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_registro__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, restprovider, loadingCtrl, toastCtrl, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.screenOrientation = screenOrientation;
        this.userData = { "password": "", "correo": "" };
        this.screenOrientation.onChange().subscribe(function () {
            console.log(_this.screenOrientation.type);
        });
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader();
        this.restprovider.login(this.userData).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            console.log(_this.data.nombre);
            window.localStorage.setItem('id', _this.data.id);
            window.localStorage.setItem('nombre', _this.data.nombre);
            window.localStorage.setItem('sexo', _this.data.sexo);
            window.localStorage.setItem('correo', _this.data.correo);
            window.localStorage.setItem('password', _this.data.password);
            if (localStorage.getItem('correo') == _this.userData.correo && localStorage.getItem('password') == _this.userData.password) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__saludo_saludo__["a" /* SaludoPage */]);
                window.localStorage.setItem('token', _this.data.token);
            }
            else {
                _this.presentToast('Error: Correo/Usuario incorrectos');
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    LoginPage.prototype.goRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_registro__["a" /* RegistroPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Autenticando...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n  Generado por Erick Barahona en el depto. Desarrollo financiero de la Universidad de Navojoa\n  para mayor informacion contacto: 1140118@unav.edu.mx\n\n  \n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n<ion-content id="page-login">\n <div id="contenedor-credenciales">\n  <p id="texto" style="font-size:1.6em"><strong>UNA AVENTURA<br>HACIA LA VIDA REAL</strong><br></p>\n  <p id="texto2" style="font-size:1em">RENUEVA EL DISEÑO DE TU RUTINA<br>\n  DIARIA DE FORMA SALUDABLE</p>\n  \n  <div id="credenciales">\n    <form id="formulario" action="/#">\n      <p style="color:#870f53; font-size:1.1em"><strong>¡Continúa la Aventura!</strong></p>\n\n      <input type="email" class="txt"  [(ngModel)]="userData.correo" name = "mail" placeholder=\'&#xf003;   CORREO\'>\n      <br>\n      <br>\n      <input type="password" class="txt"  [(ngModel)]="userData.password" name ="pass"placeholder=\'&#xf023;   CONTRASEÑA\'>\n      <br><br>\n\n      <button id="btnacceder" (click)="doLogin()">"ACCEDER"</button>\n    </form> \n    \n  </div>\n  \n  <button class="btn" style="background-color:#5d9632" (click)="goRegistro()">"REGISTRARME"</button> \n  <button class="btn" style="background-color:#e60991">"OLVIDÉ MI CONTRASEÑA"</button> \n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actividadhbt1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_tips1_modal_tips1__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_reflexionar1_modal_reflexionar1__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compromisohbt1_compromisohbt1__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the Actividadhbt1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Actividadhbt1Page = /** @class */ (function () {
    function Actividadhbt1Page(navCtrl, Modal, params, toastCtrl, iap, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Modal = Modal;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.iap = iap;
        this.screenOrientation = screenOrientation;
        this.actividad = [];
        this.links = [];
        this.userConsulta = { "id": "", "id_habito": "1", "registro": "consultaActividad" }; //datos de envio a la api
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary' || _this.screenOrientation.type == 'portrait-secondary') {
                _this.fondo = './assets/imgs/habito1/factividadhbt.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary' || _this.screenOrientation.type == 'landscape-secondary') {
                _this.fondo = './assets/imgs/habito1/factividadhbth.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
        //asignar variables
        this.userConsulta.id = window.localStorage.getItem("id"); //optener id de usuario
        this.auxdia = parseInt(params.get('auxdia'));
        this.dia = this.auxdia;
        //validar estado del boton
        if (this.dia == parseInt(window.localStorage.getItem("actividad"))) {
            this.state = false;
        }
        else {
            this.state = true;
        }
        //ACTIVIDADES
        this.actividad = [{ act: "Bebe dos vasos de agua natural de 250 ml c/u al levantarte y hasta 30 minutos antes de desayunar." },
            { act: "Bebe un vaso de agua natural de 250 ml dos horas después del desayuno y un vaso de agua natural de 250 ml dos horas después de la comida del mediodía." },
            { act: "Bebe dos vasos de agua natural de 250 ml c/u media hora antes de la comida del mediodía." },
            { act: "Bebe dos vasos de agua natural de 250 ml c/u 30 minutos antes de la cena." },
            { act: "Bebe un vaso de 250ml de agua natural dos horas antes de dormir." },
            { act: "Bebe Agua Natural mientras realizas ejercicio físico." },
            { act: "No reemplaces el agua natural por refresco o jugos comerciales envasados." }
        ];
        //links saber mas
        this.links = [{ link: "http://quierovivirsano.org/2016/02/25/beber-agua-en-ayunas" },
            { link: "http://quierovivirsano.org/2016/02/25/no-esperes-bebe-agua-ya" },
            { link: "http://quierovivirsano.org/2016/02/25/agua-antes-de-las-comidas" },
            { link: "http://quierovivirsano.org/2016/02/25/beber-agua-ayuda-a-perder-peso" },
            { link: "http://quierovivirsano.org/2016/02/25/un-vaso-de-agua-antes-de-dormir" },
            { link: "http://quierovivirsano.org/2016/02/25/la-hidratacion-durante-el-ejercicio" },
            { link: "http://quierovivirsano.org/2016/04/07/agua-pura-o-bebidas-azucarada" }
        ];
    }
    Actividadhbt1Page.prototype.ionViewWillEnter = function () {
    };
    Actividadhbt1Page.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/habito1/factividadhbt.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/habito1/factividadhbth.jpg';
        }
    };
    Actividadhbt1Page.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Actividadhbt1Page.prototype.openModal = function () {
        var compromisoOpciones = {
            //mostrar fondo model
            showBackdrop: true
        };
        var compromiso = this.Modal.create(__WEBPACK_IMPORTED_MODULE_5__compromisohbt1_compromisohbt1__["a" /* Compromisohbt1Page */]); //PRESENTAR MODAL
        compromiso.present();
    };
    //Modal Tips
    Actividadhbt1Page.prototype.ModalTips = function () {
        var datos = { dia: this.dia };
        var TipsOpciones = {
            //mostrar fondo model
            showBackdrop: true
        };
        var Tip = this.Modal.create(__WEBPACK_IMPORTED_MODULE_1__modal_tips1_modal_tips1__["a" /* ModalTips1Page */], { day: datos }); //PRESENTAR MODAL y envio datos de actividad
        Tip.present();
    };
    //Modal para rlexionar
    Actividadhbt1Page.prototype.ModalReflexionar = function () {
        var datos = { dia: this.dia };
        var reflexionarOpciones = {
            //mostrar fondo model
            showBackdrop: true
        };
        var reflexionar = this.Modal.create(__WEBPACK_IMPORTED_MODULE_2__modal_reflexionar1_modal_reflexionar1__["a" /* ModalReflexionar1Page */], { day: datos }); //PRESENTAR MODAL y envio datos de actividad
        reflexionar.present();
    };
    //abrir reflexionar
    Actividadhbt1Page.prototype.goToReflexionar = function () {
        this.ModalReflexionar();
    };
    //abrir tips
    Actividadhbt1Page.prototype.goToTips = function () {
        this.ModalTips();
    };
    //abrir compromiso
    Actividadhbt1Page.prototype.goToAdelante = function () {
        this.openModal();
    };
    //abrir saber mas
    Actividadhbt1Page.prototype.goToSaberMas = function () {
        this.iap.create(this.links[this.dia].link, "_blank");
    };
    Actividadhbt1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-actividadhbt1',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt1/actividadhbt1.html"*/'<!--\n  Generated template for the Actividadhbt1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color=\'primary\'>\n    <ion-title>Actividad Diaria</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content id="page-actividadhbt1" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n  <div class="logosmenuactividad">  \n    <img id="imgqvsactividad" src="./assets/imgs/logo.png"> \n    <img id="img8hsactividad" src="./assets/imgs/logohabitos.png">\n    \n   </div>\n   <img id="imgbeberagua" src="./assets/imgs/habito1/beberaguanatural.png">\n   <h3 id="NoTeEsperes"><strong>¡NO TE ESPERES A TENER SER!</strong></h3>\n  \n   <h1 id="dia">DÍA {{dia+1}}</h1><br>\n   <h6 id="txtactividad" > {{actividad[dia].act}}</h6>\n   <div id="opcioneshbt1">\n      <img id="personahbt1" src="./assets/imgs/habito1/persona{{dia+1}}.png">\n  <div id="menuhbt">\n    <input type="image" id="opchabito1" src="./assets/imgs/parareflexionar.png" (click)="goToReflexionar()"><br>\n    <input type="image" id="opchabito1" src="./assets/imgs/tips.png" (click)="goToTips()"><br>\n    <input type="image" id="opchabito1" src="./assets/imgs/sabermas.png" (click)="goToSaberMas()">\n  </div>\n  </div>\n  \n   \n \n</ion-content>\n<ion-footer id="feet" >\n      \n    <button ion-button full color="primary" (click)="goToAdelante()" [hidden]="state" >¡Adelante!</button>\n   \n  </ion-footer>'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/actividadhbt1/actividadhbt1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], Actividadhbt1Page);
    return Actividadhbt1Page;
}());

//# sourceMappingURL=actividadhbt1.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Habito1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__introtestagua_introtestagua__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Habito1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Habito1Page = /** @class */ (function () {
    function Habito1Page(navCtrl, platform, restprovider, loadingCtrl, toastCtrl, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.restprovider = restprovider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.screenOrientation = screenOrientation;
        this.userData = { "id": "", "id_habito": "1", "registro": "actualizafecha" };
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == 'portrait-primary' || _this.screenOrientation.type == 'portrait-secondary') {
                _this.fondo = './assets/imgs/habito1/fmenuhabito.jpg';
            }
            else if (_this.screenOrientation.type == 'landscape-primary' || _this.screenOrientation.type == 'landscape-secondary') {
                _this.fondo = './assets/imgs/habito1/fmenuhabitoh.jpg';
            }
            console.log(_this.screenOrientation.type);
        });
    }
    Habito1Page.prototype.ionViewDidLoad = function (screenOrientation) {
        if (this.screenOrientation.type == 'portrait-primary') {
            this.fondo = './assets/imgs/habito1/fmenuhabito.jpg';
        }
        else if (this.screenOrientation.type == 'landscape-primary') {
            this.fondo = './assets/imgs/habito1/fmenuhabitoh.jpg';
        }
        console.log('ionViewDidLoad Habito1Page');
    };
    //consulta status del usuario si es nuevo o si ya ha entrado  y actualiza la fecha de entrada a la aplicacion y muestra el estado para lanzar tooltip, muestra toast si ya ha realizado el usuario del dia de hoy
    Habito1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.userData.id = window.localStorage.getItem("id");
        this.restprovider.registrotestagua(this.userData).then(function (result) {
            _this.data = result;
            window.localStorage.setItem("actividad", _this.data.actividad);
            _this.dia = _this.data.actividad;
            console.log(window.localStorage.getItem("actividad"));
            if (_this.data.consulta == '¡Ya haz realizado la actividad del día de hoy!') {
                _this.estado = false;
                _this.presentToast(_this.data.consulta);
            }
            else if (_this.data.consulta == 'nuevo') {
                _this.estado = true;
                console.log(_this.data.consulta);
                window.sessionStorage.setItem("consulta", _this.data.consulta);
            }
            else {
                _this.estado = false;
            }
        }, function (err) {
            _this.presentToast(err);
        });
    };
    Habito1Page.prototype.ionViewWillLeave = function () {
        this.estado = false;
    };
    Habito1Page.prototype.ionViewWillenter = function (platform) {
        var _this = this;
        this.estado = false;
        this.presentLoading();
        platform.ready().then(function () {
            _this.loader.dismiss();
        });
    };
    Habito1Page.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Cargando...'
        });
        this.loader.present();
    };
    Habito1Page.prototype.goToTest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__introtestagua_introtestagua__["a" /* IntrotestaguaPage */]);
    };
    Habito1Page.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Habito1Page.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Guardando...'
        });
        this.loading.present();
    };
    //asignar actividades a los botones actividades
    Habito1Page.prototype.goToActividad1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 0 });
    };
    Habito1Page.prototype.goToActividad2 = function () {
        if (this.dia >= 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 1 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito1Page.prototype.goToActividad3 = function () {
        if (this.dia >= 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 2 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito1Page.prototype.goToActividad4 = function () {
        if (this.dia >= 3) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 3, "consulta": this.data.consulta });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito1Page.prototype.goToActividad5 = function () {
        if (this.dia >= 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 4 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito1Page.prototype.goToActividad6 = function () {
        if (this.dia >= 5) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 5 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito1Page.prototype.goToActividad7 = function () {
        if (this.dia >= 6) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__actividadhbt1_actividadhbt1__["a" /* Actividadhbt1Page */], { 'auxdia': 6 });
        }
        else {
            this.presentToast("Todavia no puedes acceder a esta actividad");
        }
    };
    Habito1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-habito1',template:/*ion-inline-start:"/Users/erick/ionicApps/AppQVS/src/pages/habito1/habito1.html"*/'<!--\n  Generated template for the Habito1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color=\'primary\'>\n    <ion-title>Beber Agua Natural</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <!--fondo de pantalla, icono test y titulo del habito-->\n\n<ion-content id="page-habito1" [ngStyle]="{\'background-image\': \'url(\' + fondo + \')\'}">\n    <input src="./assets/imgs/tablatest.png" id="tablatest"  type="image" (click)="goToTest()"tooltip="¡Sino has realizado tu test es hora! ¡Adelante!" [active]="estado" duration=3000 arrow positionV=\'bottom\'>\n \n  <h5 id="textomenu1">ACTIVIDADES DIARIAS\n    <br>\n    <strong>BEBER AGUA NATURAL</strong>\n  </h5>\n\n  <!--Iconos de los dias del menu del habito-->\n\n  <div id="tablaactividad" style="margin-top:-5%" (click)="goToActividad1()" [class.button-disabled]="true">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 01 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" style="margin-top:-5%" (click)="goToActividad2()">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 02 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" (click)="goToActividad3()">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 03 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" (click)="goToActividad4()">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 04 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad"(click)="goToActividad5()">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 05 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad"(click)="goToActividad6()">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 06 de 7</strong>\n    </h6>\n  </div>\n  <div id="tablaactividad" style="margin-left:37.5%" (click)="goToActividad7()">\n    <img id="rectangulo" src="./assets/imgs/habito1/rectangulo.png">\n    <img id="bote" src="./assets/imgs/habito1/icono.png">\n    <h6 id="dias">\n      <strong>Día 07 de 7</strong>\n    </h6>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/erick/ionicApps/AppQVS/src/pages/habito1/habito1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], Habito1Page);
    return Habito1Page;
}());

//# sourceMappingURL=habito1.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map