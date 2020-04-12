import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { Endereco } from 'src/model/endereco';


@Component({
  selector: 'clientes-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  @Input() cliente: Cliente = new Cliente;

  constructor(private _clientesService: ClientesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cliente = this._clientesService.getClientes();
    this.cliente.endereco = new Endereco;        
  }

  invalido(campo){
    return !campo.valid && campo.touched;
  }
  valido(campo){
    return campo.valid && campo.touched
  }
  validarCampo(campo){
    return {'is-invalid': this.invalido(campo), 'is-valid': this.valido(campo)}
  } 

  consultarCEP(cep, formCliente){        
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if(validacep.test(cep)) {        
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(data => {
          if (!("erro" in data)) {
            this.preencherEndereco(data, formCliente);
          }else{
            alert('CPF não encontrado');
          }
        });
      }///cep validado
    }////cep vazio    
  }///consultarCEP()

  preencherEndereco(data, formCliente){      
    formCliente.form.patchValue({
      endereco:{
        cep: data.cep,
        logradouro: data.logradouro,        
        complemento: data.complemento,      
        bairro: data.bairro,
        cidade: data.localidade,        
        uf: data.uf           
      }
    });
  }

  onSubmit(formCliente){
    console.log(this.cliente);
  }

}
