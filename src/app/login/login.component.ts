import { Component,OnInit, Input } from '@angular/core';
import {RouterModule, PreloadAllModules, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NavService } from '../nav/nav.service';
import { Login } from './login';

@Component({
    moduleId : module.id,
    selector : "LoginService",
    templateUrl : "./login.html" 
})
export class LoginComponent implements OnInit  {
    loggedInUser : number ;
    wrongUser : boolean= false ;
    wrongPwd : boolean= false ;
    constructor( private loginService : LoginService,
                 private navService:NavService,
                 private router : Router ){};

    ngOnInit(){
        this.navService.hide();
    }
    submit(user : string , password : string){
        if(  user != undefined &&  password != undefined ){
            // if( user != "admin" ){
            //     this.wrongUser = true ;
            //     return ;
            // }
            // if( password != "admin" ){
            //     this.wrongPwd = true ;
            //     return ;
            // }

            sessionStorage.setItem('loggedInUser', user);            
            var data = sessionStorage.getItem('loggedInUser');         
            this.router.navigateByUrl('dashboard'); 
           //this.loginService.checkUser(user  , password).then( () => this.loggedInUser );
        }
    }
}