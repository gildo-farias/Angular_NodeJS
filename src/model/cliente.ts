import { Endereco } from './endereco';
export class Cliente {
    id: Number;
    nome: String;
    snome: String;
    cpf: String;
    email: String
    telefone: String;
    foto: String;
    debito: Number; 
    status: Boolean;  
    endereco: Endereco;
}
