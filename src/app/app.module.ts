import { ReceitaPage } from './../pages/receita/receita';
import { ReceitasService } from './../service/receitas';
import { EditaReceitaPage } from './../pages/edita-receita/edita-receita';
import { ListaComprasService } from './../service/lista-compra';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';
import { ReceitasPage } from './../pages/receitas/receitas';
import { ListaComprasPage } from './../pages/lista-compras/lista-compras';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListaComprasPage,
    ReceitasPage,
    EditaReceitaPage,
    ReceitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ListaComprasPage,
    ReceitasPage,
    EditaReceitaPage,
    ReceitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitasService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
