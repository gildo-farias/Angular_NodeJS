import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Endereco } from 'src/model/endereco';

@Component({
  selector: 'clientes-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.scss']
})
export class DetalheClienteComponent implements OnInit {

  constructor(        
    private _route: ActivatedRoute,
    private _routes: Router,
    private _clientesService: ClientesService
  ) { }
  @ViewChild('closeModal') closeModal: ElementRef;  

  codigo:number;
  cliente:Cliente = new Cliente;  
  inscricao:Subscription[] = new Array;

  ngOnInit(): void {         
    this.cliente.endereco = new Endereco;
    this.inscricao.push(this._route.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];            
    }));        
    this.inscricao.push(this._clientesService.read(this.codigo).subscribe(data => this.cliente = data));
  }   

  onEsc(){
    this.closeModal.nativeElement.click();
    this._routes.navigate(['/clientes']);
  }  

  ngOnDestroy() {        
    this.inscricao.forEach(element => {
      element.unsubscribe;      
    });;   
    // this.cliente = null;
    // // this.codigo=null;    
  }

}
