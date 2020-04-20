import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('btnSalvar') btnSalvar: ElementRef;
  @ViewChild('btnResetar') btnResetar: ElementRef; 

  @Output() fecharModal = new EventEmitter();
  @Output() avisarAlteracao = new EventEmitter();
  validateForm: ValidateForm;

  @Input('livroAlterar') livro: Livro = new Livro;
  formLivro: FormGroup;

  generos: String[];
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

  carregando() {        
    (<HTMLButtonElement>this.btnResetar.nativeElement).disabled = true;        
    let btn = (<HTMLButtonElement>this.btnSalvar.nativeElement);
    btn.disabled = true;
    btn.style.cursor = 'progress';
    btn.title = 'SALVANDO...';    
  }

  onSubmit() {    
    console.log(this.formLivro.value);    
    if (this.formLivro.valid) {      
      this.carregando();
      this._http.post('https://httpbin.org/post', JSON.stringify(this.formLivro.value)).subscribe(data => {
        console.log(data);
        if (this.livro.id == null) {                    
          this.formLivro.reset(); 
          this.fecharModal.emit();
        } else {
          this._route.navigate(['/livros', this.livro.id]);
        }
      }, (erro: any) => {
        console.error(erro);
      });
    } else {
      this.validateForm.validarCampos(this.formLivro);
    }

  }

  iniciarForm() {
    if (this.livro.id == null) {
      this.livro.locado = false;
      this.formLivro = this._formBuilder.group({
        ISBN: [null, [Validators.required]],
        genero: [null, [Validators.required]],
        titulo: [null, [Validators.required]],
        subTit: [null],
        autor: [null, [Validators.required]],
        ano: [null, [Validators.required]],
        imgCapa: [null, [Validators.required]]
      });
    } else {
      this.formLivro = this._formBuilder.group({
        ISBN: [this.livro.ISBN, [Validators.required]],
        genero: [this.livro.genero, [Validators.required]],
        titulo: [this.livro.titulo, [Validators.required]],
        subTit: [this.livro.subTit, [Validators.required]],
        autor: [this.livro.autor, [Validators.required]],
        ano: [this.livro.ano, [Validators.required]],
        imgCapa: [null, [Validators.required]]
      });
    }
  }//iniciarForm()

  onInput() {
    this.avisarAlteracao.emit(true);
  }

}
