import { Component, OnInit } from '@angular/core';
import { MemberService} from '../member.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    console.log(this.memberService.getCurrentUser());
    console.log(this.memberService.getMembers());
  }

}
