import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaComprasPage } from './lista-compras';

@NgModule({
  declarations: [
    ListaComprasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaComprasPage),
  ],
  exports: [
    ListaComprasPage
  ]
})
export class ListaComprasPageModule {}
