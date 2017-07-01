import { ListaComprasService } from './../../service/lista-compra';
import { Ingrediente } from './../../module/ingrediente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms/forms";

@IonicPage()
@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html',
})
export class ListaComprasPage {

  listaItens: Ingrediente[];

  constructor(private listaComprasService: ListaComprasService) { }

  incluiItem(form: NgForm) {
    console.log(form);
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    form.reset();
    this.carregaItens();
  }

  ionViewWillEnter() {
    this.carregaItens();
  }

  carregaItens() {
    this.listaItens = this.listaComprasService.getItens();
  }

  removeItem(index: number) {
    this.listaComprasService.removeItem(index);
    this.carregaItens();
  }

}
