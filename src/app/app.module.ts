import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HTTP } from '@ionic-native/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TestDescansoadecuadoPage } from './../pages/test-descansoadecuado/test-descansoadecuado';
import { TestSerfelizPage } from './../pages/test-serfeliz/test-serfeliz';
import { TestBiencomerPage } from './../pages/test-biencomer/test-biencomer';
import { TestDesayunarmasPage } from './../pages/test-desayunarmas/test-desayunarmas';
import { TestAutocontrolPage } from './../pages/test-autocontrol/test-autocontrol';
import { TestActividadfisicaPage } from './../pages/test-actividadfisica/test-actividadfisica';
import { TestActitudpositivaPage } from './../pages/test-actitudpositiva/test-actitudpositiva';
import { InstruccionesPage } from './../pages/instrucciones/instrucciones';
import { ModalTips1Page } from './../pages/modal-tips1/modal-tips1';
import { ModalReflexionar1Page } from './../pages/modal-reflexionar1/modal-reflexionar1';
import { IonicStorageModule } from '@ionic/storage';
import {TooltipsModule} from 'ionic-tooltips'
import { HttpModule, Http } from '@angular/http';
import { SlidePage } from '../pages/slide/slide';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import {RestProvider } from '../providers/rest/rest';
import {SaludoPage } from '../pages/saludo/saludo';
import {RegistroPage} from '../pages/registro/registro';
import {BienvenidaPage} from '../pages/bienvenida/bienvenida';
import {EvaluacionPage} from '../pages/evaluacion/evaluacion'
import { EvaluacionImcPage } from '../pages/evaluacion-imc/evaluacion-imc';
import { ModalImcPage } from '../pages/modal-imc/modal-imc';
import { ResultadoImcPage } from '../pages/resultado-imc/resultado-imc';
import { PerimetroAbdominalPage } from '../pages/perimetro-abdominal/perimetro-abdominal';
import { TestPage } from '../pages/test/test';
import { TestAguaPage } from '../pages/test-agua/test-agua';
import { RtestaguaPage } from '../pages/rtestagua/rtestagua';
import { IntrotestaguaPage } from '../pages/introtestagua/introtestagua';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { MenuHabitosPage } from '../pages/menu-habitos/menu-habitos';
import { Habito1Page } from '../pages/habito1/habito1';
import { ResultadoSaludPage } from '../pages/resultado-salud/resultado-salud';
import { SaludPage } from '../pages/salud/salud';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Compromisohbt1Page } from '../pages/compromisohbt1/compromisohbt1';
import { CompromisoPage } from '../pages/compromiso/compromiso';
import { AguaPage } from '../pages/agua/agua';
import { Actividadhbt1Page } from '../pages/actividadhbt1/actividadhbt1';
import { Habito2Page } from '../pages/habito2/habito2';
import { Habito3Page } from '../pages/habito3/habito3';
import { Habito4Page } from '../pages/habito4/habito4';
import { Habito5Page } from '../pages/habito5/habito5';
import { Habito6Page } from '../pages/habito6/habito6';
import { Habito7Page } from '../pages/habito7/habito7';
import { Habito8Page } from '../pages/habito8/habito8'; 
import { RsaludPage } from '../pages/rsalud/rsalud';
import { BrMaskerModule } from 'brmasker-ionic-3';
//import { FCM } from '@ionic-native/fcm';
import {OneSignal} from '@ionic-native/onesignal';
import { RecuperarPassPage } from '../pages/recuperar-pass/recuperar-pass';
import { Deeplinks } from '@ionic-native/deeplinks'
import { PasswordPage } from '../pages/password/password';
import { InfoPage } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SlidePage,
    SaludoPage,
    RegistroPage,
    BienvenidaPage,
    EvaluacionPage,
    EvaluacionImcPage,
    ModalImcPage,
    ResultadoImcPage,
    PerimetroAbdominalPage,
    TestPage,
    TestAguaPage,
    RtestaguaPage,
    IntrotestaguaPage,
    MenuPrincipalPage,
    MenuHabitosPage,
    Habito1Page,
    SaludPage,
    ResultadoSaludPage,
    Compromisohbt1Page,
    CompromisoPage,
    AguaPage,
    Actividadhbt1Page,
    ModalReflexionar1Page,
    ModalTips1Page,
    InstruccionesPage, 
    TestActitudpositivaPage,
    TestActividadfisicaPage,
    TestAutocontrolPage,
    TestDesayunarmasPage,
    TestBiencomerPage,
    TestSerfelizPage,
    TestDescansoadecuadoPage,
    Habito2Page,
    Habito3Page,
    Habito4Page,
    Habito5Page,
    Habito6Page,
    Habito7Page,
    Habito8Page,
    RsaludPage,
    RecuperarPassPage,
    PasswordPage,
    InfoPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TooltipsModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SlidePage,
    SaludoPage,
    RegistroPage,
    BienvenidaPage,
    EvaluacionPage,
    EvaluacionImcPage,
    ModalImcPage,
    ResultadoImcPage,
    PerimetroAbdominalPage,
    TestPage,
    TestAguaPage,
    RtestaguaPage,
    IntrotestaguaPage,
    MenuPrincipalPage,
    MenuHabitosPage,
    Habito1Page,
    SaludPage,
    ResultadoSaludPage,
    Compromisohbt1Page,
    CompromisoPage,
    AguaPage,
    Actividadhbt1Page,
    ModalReflexionar1Page,
    ModalTips1Page,
    InstruccionesPage, 
    TestActitudpositivaPage,
    TestActividadfisicaPage,
    TestAutocontrolPage,
    TestDesayunarmasPage,
    TestBiencomerPage,
    TestSerfelizPage,
    TestDescansoadecuadoPage,
    Habito2Page,
    Habito3Page,
    Habito4Page,
    Habito5Page,
    Habito6Page,
    Habito7Page,
    Habito8Page,
    RsaludPage,
    RecuperarPassPage, 
    PasswordPage,
    InfoPage
  ],
  providers: [
    HTTP,
    Deeplinks,
    OneSignal,
    RestProvider,
    ScreenOrientation,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
