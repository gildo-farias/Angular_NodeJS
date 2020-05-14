import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { ClientesService } from 'src/services/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-cliente',
  templateUrl: './deletar-cliente.component.html',
  styleUrls: ['./deletar-cliente.component.scss']
})
export class DeletarClienteComponent implements OnInit {

  constructor(
    private _clientesService: ClientesService,
    private _route: ActivatedRoute,
    private _routes: Router) { }

  
  codigo:number;
  cliente:Cliente = new Cliente;
  inscricao:Subscription[] = new Array;

  ngOnInit(): void {         
    this.inscricao.push(this._route.params.subscribe((parametros:any)=>{
      this.codigo = parametros['cod'];            
    }));        
    this.inscricao.push(this._clientesService.read(this.codigo).subscribe(data => this.cliente = data));
  }   

  onDelete(){
    this._clientesService.delete(this.codigo).subscribe(
      success => console.log('deletado!'),
      error => console.error(error),
      () => console.log('request completada')
    )
    this.onClose();
  }

  onClose(){
    this._routes.navigate(['/clientes']);
  }

  ngOnDestroy() {        
    this.inscricao.forEach(element => {
      element.unsubscribe;      
    });;   
    this.cliente = null;        
  }


}
