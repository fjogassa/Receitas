import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditaReceitaPage } from './edita-receita';

@NgModule({
  declarations: [
    EditaReceitaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditaReceitaPage),
  ],
  exports: [
    EditaReceitaPage
  ]
})
export class EditaReceitaPageModule {}
