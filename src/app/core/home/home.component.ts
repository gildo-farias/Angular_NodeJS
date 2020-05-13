
import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/services/system.service';
import { Usuario } from 'src/model/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user:Usuario;
  saudacao:string;
  constructor(private _systemService:SystemService) { }

  ngOnInit(): void {
    this.user = this._systemService.logger;
    let horaLocal = new Date().getHours();    
    if(horaLocal >= 0 && horaLocal < 12) this.saudacao = 'Bom Dia';
    else if(horaLocal >= 12 && horaLocal < 18) this.saudacao = 'Boa Tarde';
    else this.saudacao = 'Boa Noite';
    console.log(this.saudacao);
  }

}
