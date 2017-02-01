import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  private currentUser = null;

  constructor(private angularFire: AngularFire){
    this.members = angularFire.database.list('members');
  }
  getMembers(){
    return this.members;
  }
  addNewUser(newUser){
    this.members.push(newUser);
    this.setUser(newUser);
  }
  setUser(newUser){
    this.currentUser = newUser;
  }
  getCurrentUser(){

    return this.currentUser;
  }
  logOutUser(){
    this.currentUser = null;
  }
}
