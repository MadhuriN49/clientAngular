import { Component,OnInit } from '@angular/core';
import {AddMoreService} from './addMore.service';
import { NavService } from '../nav/nav.service';  
import {Dashboard} from '../dashboard/dashboard';
import { DataService } from '../data.service';

@Component({
    moduleId : module.id,
    selector : "DataService",
    templateUrl : "./addMore.html"  
})

export class AddMoreComponent implements OnInit{
    constructor (private navService: NavService,
                 private dataService : DataService ){};
    newObj : any = {} ;
    ngOnInit(){
        this.navService.show();
    }

    addMore( newObj : Dashboard){
        console.log(this.newObj);
        this.newObj.datePosted = new Date().getDate() + " / "  + new Date().getMonth() + " / " + new Date().getFullYear() ;
        this.dataService.createAuthor( newObj ) ;
        
        //this.addMoreObjs.push(this.newObj);
       // localStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));
       // sessionStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));

       
    }
}