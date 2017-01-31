import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-other',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class OtherComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router, private memberService: MemberService) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });
  }
  logout() {
     this.af.auth.logout();
     this.memberService.logOutUser();
     console.log('logged out');
     this.router.navigateByUrl('/login-email');
  }


  ngOnInit() {
  }

}
