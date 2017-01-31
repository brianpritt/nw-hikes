import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MessageBoardComponent } from './message-board/message-board.component';

import { ProfileComponent } from './profile/profile.component';
import { HikesListComponent } from './hikes-list/hikes-list.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';

import { OtherComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';


const appRoutes = [
<<<<<<< HEAD
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:'message-board',component: MessageBoardComponent},
  {path: 'profile',component: ProfileComponent},
=======
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path:'message-board',component: MessageBoardComponent},
  { path: 'profile', component: ProfileComponent},
>>>>>>> cc136783f8eab19c4592700966f39a622b163a8c
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: OtherComponent, canActivate: [AuthGuard] },
  { path: 'hikes-list', component: HikesListComponent },
  { path: 'trails/:id', component: HikeDetailsComponent }

 ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
