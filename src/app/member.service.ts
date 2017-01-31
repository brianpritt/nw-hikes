import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class MemberService {

  constructor(public af: AngularFire) {}
  memberOutput(){
    console.log("output")
    console.log(this.af)
    this.af.auth.subscribe(auth => {
      if(auth) {
        console.log("auth")
      }
    });
  }
}
