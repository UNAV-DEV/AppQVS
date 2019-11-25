
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HTTP, HTTPResponse } from '@ionic-native/http'
import 'rxjs/add/operator/map';

/** 
 * Archivos rest que envia POST al servidor de qvs y recibe las respuestas
*/
  

let apiUrl = 'http://qvs.unav.edu.mx/ws/';
@Injectable()
export class RestProvider {


  constructor(public http: Http,public httpPlugin: HTTP ) {
    console.log('Hello RestProvider Provider');
  }



/**
 * Suscripcion de usuario a oneSignal
 * @param credentials datos que se envian al servidor
 */
oneSignalSuscribe(credentials){
  //registrar dispositivo en Onesignal, 
  return new Promise((resolve, reject) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('https://onesignal.com/api/v1/players', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
});

}



//coneccion login al WS
/**
 * Coneccion login al Web service
 * @param credentials credenciale de inicion de sesion
 */
  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'login.php', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
//coneccion de registro al WS
/**
 * Coneccion con el web servide para el registro de un usuario
 * @param credentials datos del usuario
 */
  registro(credentials) {
    return new Promise((resolve, reject) => {
        let headers2 = new Headers();
        headers2.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'registro.php', JSON.stringify(credentials), {headers: headers2})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
//coneccion registro test agua al WS
/**
 * 
 * @ignore
 */
  registrotestagua(credentials) {
    return new Promise((resolve, reject) => {
        let headers3 = new Headers();
        headers3.append('Content-Type', 'application/json');
        this.http.post(apiUrl+'registraresultados.php', JSON.stringify(credentials), {headers: headers3})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
//coneccion al WS
/**
 * Peticion al web servide con los datos de respectiva peticion
 * @param credentials datos para el web service
 */
acepto(credentials) {
  return new Promise((resolve, reject) => {
      let headers3 = new Headers();
      headers3.append('Content-Type', 'application/json');
      this.http.post(apiUrl+'registraresultados.php', JSON.stringify(credentials), {headers: headers3})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
  });
}

recover(credentials) {
  return new Promise((resolve, reject) => {
      let headers3 = new Headers();
      headers3.append('Content-Type', 'application/json');
      this.http.post(apiUrl+'phpmailer/sendMail.php', JSON.stringify(credentials), {headers: headers3})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
  });
}
/**
 * 
 * @ignore
 */
reg(credentials) {
  return new Promise((resolve, reject) => {
      let headers3 = new Headers();
      headers3.append('Content-Type', 'application/json');
      this.httpPlugin.setHeader( "" , "content-type", "application/json");
      this.httpPlugin.get(apiUrl+'registro.php', JSON.stringify(credentials),headers3)
  .then(data => {
    resolve(data.data.json());
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {
    reject(error.error);
    console.log("error2");
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });
  });
}





}
