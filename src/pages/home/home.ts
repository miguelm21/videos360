import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  swipe(event) {
	if(event.direction === 2) {
		/*console.log('a');*/
		this.navCtrl.setRoot(MenuPage);
	}
	if(event.direction === 4) {
		console.log('b');
	}
  }

}
