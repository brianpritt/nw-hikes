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
constructor(private memberService: MemberService) {}

  ngOnInit() {
    // $(document).ready(function(){
    //   $('.carousel').carousel();
    // });
  }
}
