import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Livro } from 'src/model/livro';
import { LivrosService } from 'src/services/livros.service';
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
    private _router: Router,    
    private _formBuilder: FormBuilder,    
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
    if (this.formLivro.valid) {      
      this.carregando();
      if (this.livro.id >= 0) {        
        this._livroService.update(this.formLivro.value).subscribe(
          success => {
            console.log('alterado!');
            this.formLivro.reset();            
            this._router.navigateByUrl('/livros'+this.livro.id, { skipLocationChange: true }).then(() => {
              this._router.navigate(['/livros', this.livro.id]);
            }); 
          },
          error => console.error(error),
          ()  => console.log('request completada')
        );      
      //alterado livro  
      }else{
        this._livroService.create(this.formLivro.value).subscribe(          
          success => {
            console.log('sucesso');
            this.formLivro.reset();                       
            this._router.navigate(['/livros']);
            this.fecharModal.emit();
          },
          error => console.error(error),
          ()  => console.log('request completada')
        );        
      }// add livro novo
    } else {
      this.validateForm.validarCampos(this.formLivro);
    }

  }

  iniciarForm() {
    if (this.livro.id == null) {      
      this.formLivro = this._formBuilder.group({
        isbn: [null, [Validators.required]],
        genero: [null, [Validators.required]],
        titulo: [null, [Validators.required]],
        subTit: [null],
        autor: [null, [Validators.required]],
        ano: [null, [Validators.required]],
        capa: [null, [Validators.required]],
        locado: [false]
      });
    } else {
      this.formLivro = this._formBuilder.group({
        id:[this.livro.id],
        isbn: [this.livro.isbn, [Validators.required]],
        genero: [this.livro.genero, [Validators.required]],
        titulo: [this.livro.titulo, [Validators.required]],
        subTit: [this.livro.subTit],
        autor: [this.livro.autor, [Validators.required]],
        ano: [this.livro.ano, [Validators.required]],
        capa: [this.livro.capa, [Validators.required]],
        locado: [this.livro.locado]
      });
    }
  }//iniciarForm()

  onInput() {
    this.avisarAlteracao.emit(true);
  }

}
