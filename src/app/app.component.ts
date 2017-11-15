import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { NavService } from './nav/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor( private nav : NavService){
    
  }
   ngOnInit(){
     this.nav.show();
  }
}
