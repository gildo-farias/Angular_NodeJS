import { Router } from '@angular/router';
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
    private _router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {    
    this.validateForm = new ValidateForm();
    this.iniciarForm();
  }

  onSubmit() {    
    if(this.formCliente.valid){
      if(this.cliente.id >= 0){
        this._clientesService.update(this.formCliente.value).subscribe(
          success => {
            console.log('alterado!');
            this.formCliente.reset();
            this._router.navigate(['/clientes']);
          },
          error => console.error(error),
          ()  => console.log('request completada')
        );
      }else{
        this._clientesService.create(this.formCliente.value).subscribe(
          success => {
            console.log('cadastrado!');
            this.formCliente.reset();
            this._router.navigate(['/clientes']);
          },
          error => console.error(error),
          ()  => console.log('request completada')
        );
      }
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
        foto: [null],
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
        id:[this.cliente.id],
        cpf: [this.cliente.cpf, Validators.required],
        foto: [this.cliente.foto],
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

}
