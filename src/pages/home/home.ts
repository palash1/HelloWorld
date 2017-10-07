import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public color:string="green";
  constructor(public navCtrl: NavController) {

  }
  
  ff(){
    alert("KLLLLL");
  }

  ff1(){
    alert("Update");
  }
  
   ff2(){
  alert("Downd1wewe111");
  }

}
