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
    alert("UP11444");
  }
  
   ff2(){
    alert("Down");
  }

}
