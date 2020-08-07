import { Cliente } from 'src/model/cliente';
import { Livro } from './livro';

export class Locacao {
    id:Number;
    cliente:Cliente;
    livros:Livro[];
    dataLoca:String;
    dataDevo:String;
    valor:Number;
    multa:Number;
    valorTotal:Number;
    status:Boolean;
}
