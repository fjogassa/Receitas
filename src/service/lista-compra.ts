import { Ingrediente } from './../module/ingrediente';

export class ListaComprasService {

    private itens: Ingrediente[] = [];

    incluiItem(nome: string, quantidade: number) {
        this.itens.push(new Ingrediente(nome, quantidade));
    }

    incluiItens(itens: Ingrediente[]) {
        for (let ingrediente of itens) {
            console.log('IncluiItens > nome: ' + ingrediente.nome + ', quantidade: ' + ingrediente.quantidade);
            this.adicionaItem(ingrediente.nome, ingrediente.quantidade);
        }

        console.log(this.itens);
    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

    adicionaItem(nome: string, quantidade: number) {
        console.log('adicionaItem = nome: ' + nome + ', quantidade: ' + quantidade);
        if (this.itens.length > 0) {
            let indice = this.itens.findIndex(produto => produto.nome === nome);
            console.log('Indice: ' + indice);
            if (indice >= 0) {
                this.itens[indice].quantidade = this.itens[indice].quantidade + quantidade;
            } else {
                this.incluiItem(nome, quantidade);
            }
        } else {
            this.incluiItem(nome, quantidade);
        }

        console.log('Final do adicionaItem');
    }

}