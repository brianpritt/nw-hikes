import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { User } from './user.model'

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  member;
  currentUser;
  user: User;

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
  // setLoginUser(email){
  //   this.member = this.angularFire.database.list('members',{
  //     query: {
  //       orderByChild: 'userEmail',
  //       equalTo: email
  //     }
  //   });
  //   console.log(this.member);
  //   this.currentUser = this.member;
  // }



  getCurrentUser(){

    return this.currentUser;
  }
  logOutUser(){
    this.currentUser = null;
  }
  getMemberByEmail(user){
    console.log(user)
    // console.log(this.angularFire.database.object('users/' + user));
  }
}
