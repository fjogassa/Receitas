import { ListaComprasService } from './../../service/lista-compra';
import { Ingrediente } from './../../module/ingrediente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { NgForm } from "@angular/forms/forms";

@IonicPage()
@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html',
})
export class ListaComprasPage {

  listaItens: Ingrediente[];
  actionSheet;

  constructor(private listaComprasService: ListaComprasService, private actionSheetController: ActionSheetController) {

  }

  incluiItem(form: NgForm) {
    console.log(form);
    this.listaComprasService.adicionaItem(form.value.nomeIngrediente, Number.parseInt(form.value.qtdeIngrediente));
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
    this.actionSheet = this.actionSheetController.create({
      title: 'Deseja realmente remover a lista de compra?',
      buttons: [
        {
          text: 'Confirma',
          role: '',
          handler: () => {
            this.listaComprasService.removeItem(index);
            this.carregaItens();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    this.actionSheet.present();

  }

}
