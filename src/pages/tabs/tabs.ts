import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { InstruccionesPage } from '../instrucciones/instrucciones';
import { EvaluacionPage } from '../evaluacion/evaluacion';
import { MenuHabitosPage } from '../menu-habitos/menu-habitos';
import { MenuPrincipalPage } from '../menu-principal/menu-principal';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //variables
  tab1Root = InstruccionesPage;
  tab2Root = MenuHabitosPage;
  tab3Root = EvaluacionPage;
  tab4Root = HomePage;
  tab5Root = MenuPrincipalPage;

  constructor(public navCtrl:NavController) {

  }
//fuerza al diseno a regresar a la pagina root de las pestanas
/**
 * Fuerza al diseno de la pestana a regresar al modulo root
 * @param $ev modulo accionado
 */
  tabChanged($ev){
          $ev.setRoot($ev.root);
  }
}
