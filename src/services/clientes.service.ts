import { Endereco } from './../model/endereco';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/cliente';

@Injectable()
export class ClientesService {

  private c1: Cliente = {
    cod: 1,
    nome: 'Gildo',
    snome: 'Farias',
    cpf: '58797849720',
    email : 'gildofarias3@gmail.com',
    telefone: '085985550906',
    foto: 'https://pbs.twimg.com/profile_images/963968059642925057/MDygrLvI.jpg',
    debito: 45.50,
    status: false,
    endereco: {
      cep: "60534-150",
      logradouro: "Rua Francisco Ramos",
      numero: 737,
      complemento: "Atras do center box",
      bairro: "Parque Genibaú",
      cidade: "Fortaleza",
      uf: "CE"      
    }
  }

  constructor() { }

  getClientes(){
    return this.c1;
  }

  setCliente(cod: Number, cpf: String, nome: String, snome: String, email: String, telefone: String, foto: String,endereco: Endereco):Cliente{        
    let cliente: Cliente;
    cliente.cod = cod;
    cliente.cpf = cpf;
    cliente.nome = nome;
    cliente.snome = snome;
    cliente.email = email;
    cliente.telefone = telefone;
    cliente.foto = foto;
    cliente.debito = 0;
    cliente.status = true;
    cliente.endereco = endereco;
    return cliente;
  }


}
