import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public color:string="blue11";
  constructor(public navCtrl: NavController) {

  }

}
