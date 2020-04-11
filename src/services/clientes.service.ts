import { Endereco } from './../model/endereco';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/cliente';

@Injectable()
export class ClientesService {

  private c1: Cliente = {
    cod: 1,
    nome: 'lucas',
    snome: 'gomes',
    cpf: '58797849720',
    email : 'gomes_luke@gmail.com',
    telefone: '085988779944',
    foto: '********',
    debito: 45.50,
    status: true,
    endereco: null
  }

  constructor() { }

  getClientes(){
    return this.c1;
  }


}
