import { SystemService } from 'src/services/system.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{   
  session:boolean;   
  
  constructor(private _systemService:SystemService){ }
  ngOnInit(){
    this._systemService.logger$.subscribe(data => this.session = data);    
  }
  
}
