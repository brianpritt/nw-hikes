import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { AuthGuard } from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private auth: AuthGuard) { }
=======



  constructor(private memberService: MemberService) { }
>>>>>>> cc136783f8eab19c4592700966f39a622b163a8c
    callMemberService(){
        // console.log("output")
        // console.log(this.auth)
        // this.af.auth.subscribe(auth => {
        //   if(auth) {
        //     console.log(this.af.auth)
        //   } else {
        //     console.log("not")
        //   }
        // });
      }
  ngOnInit() {
  }

}
