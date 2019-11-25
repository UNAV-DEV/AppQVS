import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BienvenidaPage } from '../bienvenida/bienvenida';
import { OneSignal } from '@ionic-native/onesignal';
/**
 * Modulo de registro, muestra el formulario de registro.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',


})


export class RegistroPage {
  //variables
  registro = {};
  private datos:FormGroup;
  data:any;
  mensaje:any;
  loading:any;
  token:string;
  /**
   * Obtiene el token del dispositivo para las notificacion push onesignal, y asignan las validaciones del formulario
   * @param navCtrl 
   * @param restprovider 
   * @param formBuilder libreria de formulario
   * @param loadingCtrl 
   * @param toastCtrl 
   * @param oneSignal libreria de notificaciones
   */
  constructor(public navCtrl: NavController, public restprovider:RestProvider, private formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, private toastCtrl: ToastController, private oneSignal:OneSignal) {

      
      
      
      this.oneSignal.getIds().then(res=>{
        this.token=res.userId;
        
      });

      this.datos = this.formBuilder.group({
        nombre:['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        edad: ['', Validators.required],
        sexo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        ciudad: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        pais: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        estado: ['',[Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        municipio: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        religion: ['', [Validators.required, Validators.pattern('[a-zA-Z áéíóú]*')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        empresa: [''],
        token: [''] 

      });
     
  }
  /**
   * @ignore
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    
  }

  /**
   * Envia los datos del registro al servidor mediante el archivo rest
   */
  signup(){
    this.oneSignal.getIds().then(res=>{
      this.token=res.userId;
    });
    this.datos.value.token=this.token;
  
    console.log('estos son los datos que se envian ' + this.datos.value.empresa);
    this.showLoader();
    this.restprovider.registro(this.datos.value).then((result)=>{ 
      this.loading.dismiss();
      this.data=result;
      window.localStorage.setItem('correo', this.data.correo);
      window.localStorage.setItem('password', this.data.password);
      window.localStorage.setItem('token',this.data.token);
      window.localStorage.setItem('nombre',this.data.nombre);
      window.localStorage.setItem('sexo', this.data.sexo);
      window.localStorage.setItem('id', this.data.id);
      this.mensaje=this.data.exito;
      console.log('este es el id' + window.localStorage.getItem('id'));
      if(this.mensaje=="Registro exitoso"){
        this.presentToast(this.mensaje);
        this.goToBienvenida();
        

      }else{
        this.presentToast(this.mensaje);
      }
      
    console.log(this.data);},
      (err) => {
        this.loading.dismiss();
        this.presentToast("error");
      
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
  }

  /**
   * Navega al modulo de bienvenida
   */
  goToBienvenida(){
    this.navCtrl.push(BienvenidaPage);
  }
/**
 * @ignore
 */
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

    this.loading.present();
  }

  /**
   * @ignore
   * @param msg mensaje que se presente en toast
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
