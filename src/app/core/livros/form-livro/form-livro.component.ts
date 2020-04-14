import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Livro } from 'src/model/livro';
import { LivrosService } from 'src/services/livros.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateForm } from '../../erros/validate-form';



@Component({
  selector: 'livros-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.scss']
})
export class FormLivroComponent implements OnInit {

  @Output() avisarAlteracao = new EventEmitter();
  formAlterado: boolean = false;  
  validateForm: ValidateForm;
  
  @Input('livroAlterar') livro: Livro = new Livro;
  formLivro: FormGroup;
  
  generos:String[];  
  constructor(    
    private _livroService: LivrosService,
    private _route: Router,
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }
  
  ngOnInit(): void {      
    this.validateForm = new ValidateForm();  
    this.generos = this._livroService.getGeneros();            
    this.iniciarForm(); 
  } 

  onSubmit(){   
    // console.log(this.formLivro);    
    this._http.post('https://httpbin.org/post', JSON.stringify(this.formLivro.value)).subscribe(data => {
      console.log(data);      
      this.formLivro.reset();      
      this._route.navigate(['/livros',this.livro.cod]);
    },(erro:any) => {            
      console.error(erro);      
    });
  }

  iniciarForm(){
    if(this.livro.cod == null){
      this.livro.locado = false;      
      this.formLivro = this._formBuilder.group({
        ISBN:   [null, [Validators.required]],
        genero: [null, [Validators.required]],
        titulo: [null, [Validators.required]],
        subTit: [null],
        autor:  [null, [Validators.required]],
        ano:    [null, [Validators.required]],
        imgCapa:[null, [Validators.required]]
      });      
    }else{
      this.formLivro = this._formBuilder.group({
        ISBN:   [this.livro.ISBN,   [Validators.required]],
        genero: [this.livro.genero, [Validators.required]],
        titulo: [this.livro.titulo, [Validators.required]],
        subTit: [this.livro.subTit, [Validators.required]],
        autor:  [this.livro.autor,  [Validators.required]],
        ano:    [this.livro.ano,    [Validators.required]],
        imgCapa:[null,              [Validators.required]]
      });
    }
  }//iniciarForm()

  onInput(){
    this.formAlterado = true;
    this.avisarAlteracao.emit(this.formAlterado);
  }

}
