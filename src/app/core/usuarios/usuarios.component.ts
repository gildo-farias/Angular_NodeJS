import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/usuario.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Array<Usuario>;
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this._usuarioService.getUsuarios();    
  }

}
