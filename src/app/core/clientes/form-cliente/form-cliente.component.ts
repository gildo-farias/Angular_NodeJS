import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidateForm } from '../../erros/validate-form';
import { Endereco } from 'src/model/endereco';


@Component({
  selector: 'clientes-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  @Input('clienteAlterar') cliente: Cliente = new Cliente;  
  validateForm: ValidateForm;
  formCliente: FormGroup;
  cepErro: boolean;

  constructor(
    private _clientesService: ClientesService,
    private _formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {    
    this.validateForm = new ValidateForm();
    this.iniciarForm();
  }

  onSubmit() {    
    if(this.formCliente.valid){
      // this.http.post('https://httpbin.org/post', JSON.stringify(this.formCliente.value)).subscribe(data => {
      //   console.log(data);
      // });
    }else{
      this.validateForm.validarCampos(this.formCliente);
    }
  }

  consultarCEP() {
    let cep: string = this.formCliente.get('endereco.cep').value;
    //Verifica se campo cep possui valor informado.
    if (cep != null) {
      //Nova variável "cep" somente com dígitos.
      cep = cep.replace(/\D/g, '');
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`).subscribe(data => {
          if (!("erro" in data)) {
            this.preencherEndereco(data);
          } else {
            this.cepErro = true;
            this.formCliente.get('endereco').reset();
            document.getElementById('cep').focus();
            document.getElementById('cep').blur();
            document.getElementById('cep').focus();
          }
        });
      } else {
        this.cepErro = false;
        this.formCliente.get('endereco').reset();
        document.getElementById('cep').focus();
        document.getElementById('cep').blur();
        document.getElementById('cep').focus();
      }
    }////cep vazio    
  }///consultarCEP()

  iniciarForm() {    
    if (this.cliente.id == null) {      
      this.formCliente = this._formBuilder.group({
        cpf: [null, Validators.required],
        foto: [null, Validators.required],
        nome: [null, Validators.required],
        snome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        telefone: [null, Validators.required],
        debito: [0],
        status: [true],
        endereco: this._formBuilder.group({
          cep: [null, Validators.required],
          logradouro: [null, Validators.required],
          numero: [null, [Validators.required, Validators.nullValidator]],
          complemento: [null],
          bairro: [null, Validators.required],
          cidade: [null, Validators.required],
          uf: [null, Validators.required],
        })
      });
    } else {      
      this.formCliente = this._formBuilder.group({
        cpf: [this.cliente.cpf, Validators.required],
        foto: [null],
        nome: [this.cliente.nome, Validators.required],
        snome: [this.cliente.snome, Validators.required],
        email: [this.cliente.email, [Validators.required, Validators.email]],
        telefone: [this.cliente.telefone, Validators.required],
        debito: [this.cliente.debito],
        status: [this.cliente.status],
        endereco: this._formBuilder.group({
          cep: [this.cliente.endereco.cep, Validators.required],
          logradouro: [this.cliente.endereco.logradouro, Validators.required],
          numero: [this.cliente.endereco.numero, [Validators.required, Validators.nullValidator]],
          complemento: [this.cliente.endereco.complemento],
          bairro: [this.cliente.endereco.bairro, Validators.required],
          cidade: [this.cliente.endereco.cidade, Validators.required],
          uf: [this.cliente.endereco.uf, Validators.required],
        })
      });
    }
  }

  preencherEndereco(data) {
    this.formCliente.patchValue({
      endereco: {
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf
      }
    });
  }

  salvarCliente() {
    let data;
    this.cliente = new Cliente;
    let endereco: Endereco = new Endereco;
    endereco.cep = data.cep;
    endereco.logradouro = data.logradouro;
    endereco.numero = data.numero;
    endereco.complemento = data.complemento;
    endereco.bairro = data.bairro;
    endereco.cidade = data.cidade;
    endereco.uf = data.uf;
    this.cliente = this._clientesService.setCliente(data.cpf, data.nome, data.snome, data.email, data.telefone, data.foto, endereco);
  }

}
