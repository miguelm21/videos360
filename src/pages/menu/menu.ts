import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DownloadsPage } from '../downloads/downloads';

import { MediaSampleModel } from '../../models/media-sample.model';
import { ApiProvider } from '../../providers/api/api';
import { VrViewProvider } from '../../providers/vr-view/vr-view';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  mediaSamples : Array<MediaSampleModel> = [];
  media1;
  media2;
  media3;
  errorMessage : string;
  isLoading: boolean;

  constructor(
    public navCtrl: NavController,
    public api: ApiProvider,
    public vrView: VrViewProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.loadMediaSamples();
  }

  swipe(event) {
  	if(event.direction === 2) {
  		/*console.log('a');*/
  		this.navCtrl.setRoot(DownloadsPage);
  	}
  	if(event.direction === 4) {
  		/*console.log('b');*/
  		this.navCtrl.setRoot(HomePage);
  	}
  }

  loadMediaSamples() {
    this.isLoading = true;

    this.mediaSamples = [
      /*{"name":"Playhouse","type":"VIDEO","inputType":"TYPE_MONO","inputFormat":"FORMAT_HLS","url":"https:\/\/bitmovin-a.akamaihd.net\/content\/playhouse-vr\/m3u8s\/105560.m3u8","isLocal":false,"previewUrl":"https:\/\/cordovavrview.tangodev.it\/resources\/playhouse_preview.jpg"},*/
      {"name":"Gorillas","type":"VIDEO","inputType":"TYPE_STEREO_OVER_UNDER","inputFormat":"FORMAT_DEFAULT","url":"assets\/media\/congo.mp4","isLocal":true,"previewUrl":"https:\/\/cordovavrview.tangodev.it\/resources\/gorilla_preview.jpg"},
      /*{"name":"Machu Pichu","type":"PHOTO","inputType":"TYPE_STEREO_OVER_UNDER","inputFormat":"","url":"https:\/\/storage.googleapis.com\/vrview\/examples\/pano\/andes_2048.jpg","isLocal":false,"previewUrl":"https:\/\/cordovavrview.tangodev.it\/resources\/machupichu_preview.jpg"},*/
      {"name":"Coral","type":"PHOTO","inputType":"TYPE_STEREO_OVER_UNDER","inputFormat":"","url":"assets\/media\/coral.jpg","isLocal":true,"previewUrl":"https:\/\/cordovavrview.tangodev.it\/resources\/coral_preview.jpg"}
    ];

    this.media1 = [{"name":"Mia","type":"VIDEO","inputType":"TYPE_STEREO_OVER_UNDER","inputFormat":"FORMAT_DEFAULT","url":"assets\/videos\/montaje1.mp4","isLocal":true,"previewUrl":"assets\/imgs\/black.jpg"}];
    this.media2 = [{"name":"Mia","type":"VIDEO","inputType":"TYPE_STEREO_OVER_UNDER","inputFormat":"FORMAT_DEFAULT","url":"assets\/videos\/montaje2.mp4","isLocal":true,"previewUrl":"assets\/imgs\/black.jpg"}];
    this.media3 = [{"name":"Mia","type":"VIDEO","inputType":"TYPE_STEREO_OVER_UNDER","inputFormat":"FORMAT_DEFAULT","url":"assets\/videos\/perspectivas.mp4","isLocal":true,"previewUrl":"assets\/imgs\/black.jpg"}];
    
  }

  onMediaSampleitemClick(mediaSampleElement) {
    this.vrView.playMediaSample(mediaSampleElement);
  }

}
