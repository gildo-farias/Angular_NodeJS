import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LivrosService } from 'src/services/livros.service';
import { Livro } from 'src/model/livro';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'livros-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.scss']
})
export class FormLivroComponent implements OnInit {

  @Output() avisarAlteracao = new EventEmitter();
  formAlterado: boolean = false;  
  
  @Input('livroAlterar') livro: Livro = new Livro;
  formLivro: FormGroup;
  
  generos: string[];  
  constructor(
    private _livroService: LivrosService,
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) { }
  
  ngOnInit(): void {
    this.generos = this._livroService.getGeneros();  
    this.iniciarForm(); 
  }

  onSubmit(){   
    console.log(this.formLivro);    
    this._http.post('https://httpbin.org/post', JSON.stringify(this.formLivro.value)).subscribe(data => {
      console.log(data);      
    },(erro:any) => {            
      console.log(erro);      
    });
  }

  iniciarForm(){
    if(this.livro.cod == null){
      this.formLivro = this._formBuilder.group({
        ISBN: [null],
        genero: [null],
        titulo: [null],
        subTit: [null],
        autor: [null],
        ano: [null],
        imgCapa: [null]
      });      
    }else{
      this.formLivro = this._formBuilder.group({
        ISBN: [this.livro.ISBN],
        genero: [this.livro.genero],
        titulo: [this.livro.titulo],
        subTit: [this.livro.subTit],
        autor: [this.livro.autor],
        ano: [this.livro.ano],
        imgCapa: [null]
      });
    }
  }//iniciarForm()

  onInput(){
    this.formAlterado = true;
    this.avisarAlteracao.emit(this.formAlterado);
  }

}
