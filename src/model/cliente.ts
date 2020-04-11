import { Endereco } from './endereco';
export class Cliente {
    cod: Number;
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
