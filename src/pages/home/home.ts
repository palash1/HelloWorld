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
<<<<<<< HEAD
    alert("Down");
=======
      alert("UP");
>>>>>>> f7e686bb41fd526731ae1ddcc8f3d83902a0f139
  }
  
   ff2(){

  }

}
