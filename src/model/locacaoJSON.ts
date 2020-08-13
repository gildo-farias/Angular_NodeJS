import { Cliente } from 'src/model/cliente';
import { Livro } from './livro';
import { Locacao } from './locacao';

export class LocacaoJSON {    
    cliente:Cliente;
    livros:Livro[];
    locacao:Locacao;    
}
