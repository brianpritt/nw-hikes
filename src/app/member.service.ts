import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  private currentUser;

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
    console.log(this.currentUser)
  }
  getCurrentUser(){
    return this.currentUser;
  }
}
