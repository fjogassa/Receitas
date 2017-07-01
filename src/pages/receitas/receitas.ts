import { ReceitaPage } from './../receita/receita';
import { Receita } from './../../module/receita';
import { ReceitasService } from './../../service/receitas';
import { EditaReceitaPage } from './../edita-receita/edita-receita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas.html',
})
export class ReceitasPage {

  receitas: Receita[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private receitaService: ReceitasService) {
  }

  ionViewWillEnter() {
    this.receitas = this.receitaService.getReceitas();
  }

  novaReceita() {
    this.navCtrl.push(EditaReceitaPage, { mode: 'Nova' });
  }

  carregaReceita(receita: Receita, index: number) {
    this.navCtrl.push(ReceitaPage, { receita: receita, index: index });
  }

}
