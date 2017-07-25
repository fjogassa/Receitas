import { ListaComprasService } from './../../service/lista-compra';
import { Receita } from './../../module/receita';
import { ReceitasService } from './../../service/receitas';
import { EditaReceitaPage } from './../edita-receita/edita-receita';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {

  receita: Receita;
  index: number;
  actionSheet;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastController: ToastController,
    private listaComprasService: ListaComprasService,
    private receitasService: ReceitasService,
    private actionSheetController: ActionSheetController) {
  }

  ngOnInit(): void {
    this.receita = this.navParams.get('receita');
    this.index = this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, { mode: 'Altera', receita: this.receita, index: this.index })
  }

  removeReceita() {
    this.actionSheet = this.actionSheetController.create({
      title: 'Deseja realmente remover a receita?',
      buttons: [
        {
          text: 'Confirma',
          role: '',
          handler: () => {
            this.receitasService.removeReceita(this.index);            
            this.navCtrl.popToRoot();
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

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes); 
    this.mensagem('Ingredientes adicionados com sucesso.')
  }

  mensagem(valor: string) {
    const toast = this.toastController.create({
      message: valor,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

}
