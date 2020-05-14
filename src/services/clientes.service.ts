import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Endereco } from './../model/endereco';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/cliente';

@Injectable()
export class ClientesService {  

  constructor(private _http: HttpClient) { }

  private readonly API: string = `${environment.API}clientes`;  
  list(){
    return this._http.get<Cliente[]>(this.API);
  }

  // *********  CRUD  *********
  create(valores){
    return this._http.post(this.API, valores).pipe(take(1));
  }
  read(id){
    return this._http.get<Cliente>(`${this.API}/${id}`);
  }
  update(id, valores){
    return this._http.put(`${this.API}/${id}`, valores).pipe(take(1));
  }  
  delete(id){
    return this._http.delete(`${this.API}/${id}`).pipe(take(1));
  }



  setCliente(cpf: String, nome: String, snome: String, email: String, telefone: String, foto: String,endereco: Endereco):Cliente{        
    let cliente: Cliente;    
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
