
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
  constructor(private _systemService:SystemService) { }

  ngOnInit(): void {
    this.user = this._systemService.logger;
  }

}
