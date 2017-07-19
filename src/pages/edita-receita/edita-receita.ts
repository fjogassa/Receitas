import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ReceitasService } from './../../service/receitas';
import { Receita } from './../../module/receita';
import { Ingrediente } from '../../module/ingrediente';

@Component({
  selector: 'page-edita-receita',
  templateUrl: 'edita-receita.html'
})

export class EditaReceitaPage {

  mode = 'Nova';
  niveisDificuldade = ['Fácil', 'Média', 'Difícil'];
  formReceita: FormGroup;
  receita: Receita;
  index: number;
  actionSheet;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController,
    private receitasService: ReceitasService) {

    this.mode = this.navParams.get('mode');

    if (this.mode == 'Altera') {
      this.receita = navParams.get('receita');
      this.index = navParams.get('index');
    }
    this.iniciaForm();
  }

  private iniciaForm() {

    let nome = null;
    let descricao = null;
    let dificuldade = 'Média';
    let ingredientes = [];

    if (this.mode == 'Altera') {
      nome = this.receita.nome;
      descricao = this.receita.descricao;
      dificuldade = this.receita.dificuldade;
      for (let ingrediente of this.receita.ingredientes) {
        ingredientes.push(new FormControl(ingrediente.nome, Validators.required));
      }
    }

    this.formReceita = new FormGroup({
      'nome': new FormControl(nome, Validators.required),
      'descricao': new FormControl(descricao, Validators.required),
      'dificuldade': new FormControl(dificuldade, Validators.required),
      'ingredientes': new FormArray(ingredientes)
    });
  }

  envia() {
    const value = this.formReceita.value;
    let ingredientes = [];
    if (value.ingredientes.length > 0) {
      ingredientes = value.ingredientes.map(nome => {
        return { nome: nome, quantidade: 1 };
      });
    }
    if (this.mode == 'Altera') {
      this.receitasService.alteraReceita(this.index, value.nome, value.descricao, value.dificuldade, ingredientes);
    } else {
      this.receitasService.adicionaReceita(value.nome, value.descricao, value.dificuldade, ingredientes);
    }
    this.formReceita.reset();
    this.navCtrl.popToRoot();
  }

  editaIngredientes() {

    this.actionSheet = this.actionSheetController.create({
      title: 'Escolha uma opção',
      buttons: [
        {
          text: 'Adiciona ingrediente',
          role: '',
          handler: () => {
            this.actionSheet.dismiss();
            this.criaAlertaNovoIngrediente().present();
            return false;
          }
        },
        {
          text: 'Remove todos ingredientes',
          role: 'destructive',
          handler: () => {
            const fArray: FormArray = <FormArray>this.formReceita.get('ingredientes');
            const len = fArray.length;
            if (len > 0) {
              for (let i = len - 1; i >= 0; i--) {
                fArray.removeAt(i);
              }
              this.mensagem('Todos ingrediente removidos');
            }
          }
        },
        {
          text: 'Cancela',
          role: 'cancel'
        }
      ]
    });
    this.actionSheet.present();
  }

  private criaAlertaNovoIngrediente() {

    return this.alertController.create({
      title: 'Adiciona Ingrediente',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome'
        }
      ],
      buttons: [
        {
          text: 'Cancela',
          role: 'cancel'
        },
        {
          text: 'Adiciona',
          handler: data => {
            if (data.nome.trim() == '' || data.nome == null) {
              this.mensagem('Entre com um valor válido!');
              return;
            }
            (<FormArray>this.formReceita.get('ingredientes'))
              .push(new FormControl(data.nome, Validators.required));
            this.mensagem('Ingrediente adicionado');
          }
        }
      ]
    });
  }

  private removeIngrediente(index: number) {
    
    this.actionSheet = this.actionSheetController.create({
      title: 'Deseja realmente remover o ingrediente?',
      buttons: [
        {
          text: 'Confirma',
          role: '',
          handler: () => {
            console.log(index);
            const fArray: FormArray = <FormArray>this.formReceita.get('ingredientes');
            const len = fArray.length;
            if (len > 0) {
              fArray.removeAt(index);
            }
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

  mensagem(valor: string) {
    const toast = this.toastController.create({
      message: valor,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}