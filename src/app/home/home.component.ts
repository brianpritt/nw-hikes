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

  constructor(private auth: AuthGuard) { }
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
