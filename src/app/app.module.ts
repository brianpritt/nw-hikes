import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseKeyConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AuthGuard } from './auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import 'rxjs/add/operator/map'

import { MessageBoardComponent } from './message-board/message-board.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
<<<<<<< HEAD

=======
>>>>>>> cc136783f8eab19c4592700966f39a622b163a8c
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { OtherComponent } from './members/members.component';
import { HikesListComponent } from './hikes-list/hikes-list.component';


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
    MapDisplayComponent,
    MessageBoardComponent,
    HikeDetailsComponent,
<<<<<<< HEAD

=======
>>>>>>> cc136783f8eab19c4592700966f39a622b163a8c
    ProfileComponent,
    SignupComponent,
    EmailComponent,
    OtherComponent,
    HikesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
