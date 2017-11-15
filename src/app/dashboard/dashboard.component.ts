import { Component,OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import { NavService } from '../nav/nav.service';
import { DataService } from '../data.service';

import {Dashboard} from './dashboard';

@Component({
    moduleId : module.id,
    selector : "DashboardService",
    templateUrl : "./dashboard.html"  
})
export class DashboardComponent implements OnInit{  
    dashboardContents : Dashboard[] ;
    loggedInUser : string ;
    canAdd : boolean = false ;
    constructor ( private dashboardService : DashboardService ,
                  private navService: NavService,
                  private dataService: DataService){};
                     
    ngOnInit() : void{
        
        this.getContent();         
    }
    
    getContent(){
        
       // this.dashboardContents = this.dashboardService.getDashboardContentService();
        this.loggedInUser = sessionStorage.getItem("loggedInUser");
        if( this.loggedInUser  == "admin"){
            this.canAdd = true;
        }
        this.navService.show();
        return this.dataService.getDashboard().then(dashboardContents => this.dashboardContents = dashboardContents);
    //    var newItems = JSON.parse(localStorage.getItem("addMore"));
       
    //     for (let newItem of newItems) {
    //         this.dashboardContents.push(newItem);
    //     }
    //     var addedData = this.dashboardContents;
      //  sessionStorage.setItem("addedData", JSON.stringify(addedData));
       // this.dashboardContents.push(JSON.parse(sessionStorage.getItem("addMore")));
    }

    delete(index : number){
        this.dashboardContents.splice(index , 1 ); 
    }

    addToDashboard(){

    }

}