import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseKeyConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import 'rxjs/add/operator/map'


export const firebaseConfig = {
  apiKey: firebaseKeyConfig.apiKey,
  authDomain: firebaseKeyConfig.authDomain,
  databaseURL: firebaseKeyConfig.databaseURL,
  storageBucket: firebaseKeyConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
