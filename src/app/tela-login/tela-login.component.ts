import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {  

  @Output() logado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onLogin(user:HTMLInputElement, pass:HTMLInputElement){  
    
    if(user.value==="root" && pass.value==="123"){      
      this.logado.emit(true);
    } else{
      alert("USUARIO INVALIDO!");
    }
  }

}
