import { Receita } from './../module/receita';
import { Ingrediente } from './../module/ingrediente';

export class ReceitasService {

    private receitas: Receita[] = [];

    alteraReceita(index: number, nome: string, descricao: string, dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas[index] = new Receita(nome, descricao, dificuldade, ingredientes);
    }

    adicionaReceita(nome: string, descricao: string, dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas.push(new Receita(nome, descricao, dificuldade, ingredientes));
    }

    getReceitas() {
        return this.receitas.slice();
    }

    removeReceita(index: number) {
        this.receitas.splice(index, 1);
    }
}