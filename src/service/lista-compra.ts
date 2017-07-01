import { Ingrediente } from './../module/ingrediente';

export class ListaComprasService {

    private itens: Ingrediente[] = [];
    
    incluiItem(nome: string, quantidade: number) {
        this.itens.push(new Ingrediente(nome, quantidade));
    }

    incluiItens(itens: Ingrediente[]) {
        this.itens.push(...itens);
    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

}