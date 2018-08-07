import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MyApp } from './app.component';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { HomePage } from '../pages/home/home';
import { DownloadsPageModule } from '../pages/downloads/downloads.module';
import { MenuPage } from '../pages/menu/menu';
import { ContactPageModule } from '../pages/contact/contact.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';
import { ApiProvider } from '../providers/api/api';
import { VrViewProvider } from '../providers/vr-view/vr-view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
  ],
  imports: [
    BrowserModule,
    DownloadsPageModule,
    ContactPageModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    VrViewProvider,
    FileTransfer,
    File
  ]
})
export class AppModule {}
