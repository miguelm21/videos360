import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { MenuPage } from '../menu/menu';
import { ContactPage } from '../contact/contact';

declare var cordova: any;

/**
 * Generated class for the DownloadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloads',
  templateUrl: 'downloads.html',
})
export class DownloadsPage {

  storageDirectory: string = '';

  constructor(
    public navCtrl: NavController,
    private transfer: FileTransfer,
    private file: File,
    public platform: Platform,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadsPage');
  }

  swipe(event) {
  	if(event.direction === 2) {
  		/*console.log('a');*/
  		/*this.navCtrl.setRoot(ContactPage);*/
  	}
  	if(event.direction === 4) {
  		/*console.log('b');*/
  		this.navCtrl.setRoot(MenuPage);
  	}
  }

  download1() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const imageLocation = 'https://www.castlephotoapp.com/pdf2.pdf';

    window.open(imageLocation,'_system', 'location=yes');

    /*this.platform.ready().then(() => {

      fileTransfer.download(imageLocation, this.file.dataDirectory + 'pdf2.pdf')
      .then((entry) => {
        console.log(entry);
        alert('c');

      }, (error) => {
        console.log(error);
        alert('d');
      });

    });*/
  }

  download2() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const imageLocation = 'https://www.castlephotoapp.com/pdf1.pdf';

    window.open(imageLocation,'_system', 'location=yes');

    /*this.platform.ready().then(() => {

      fileTransfer.download(imageLocation, this.file.dataDirectory + 'pdf1.pdf')
      .then((entry) => {
        console.log(entry);
        alert('a');
      }, (error) => {
        console.log(error);
        alert('b');

      });

    });*/
  }

  openPage() {
    window.open("http://www.austral.edu.ar/cerebroypersona/es/",'_system', 'location=yes');
  }

  call() {
    var phone = '+54 11 68653969';
    var url = 'https://api.whatsapp.com/send?phone=' + phone;

    window.open(url, '_system', 'location=yes');
  }

}
