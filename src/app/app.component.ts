import { Component } from '@angular/core';

import { SystemService } from './../services/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  
  constructor(private _systemService: SystemService){ }
}
