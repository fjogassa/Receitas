import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceitasPage } from './../receitas/receitas';
import { ListaComprasPage } from './../lista-compras/lista-compras';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  listaComprasPage = ListaComprasPage;
  receitasPage = ReceitasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

}
