import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from '../comments.service'

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  constructor(private memberService: MemberService,private route: ActivatedRoute,
  private location: Location, private commentsService: CommentsService) { }
  routeId;
  todisplay;
  getComments(){
    this.todisplay=this.commentsService.getComments().subscribe(data=>{this.todisplay = data; console.log(this.todisplay)});
  }
    // console.log(this.commentsService.getComments());
    // .subscribe(data=>{this.todisplay = data;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.routeId = urlParameters['id'];
    });
    console.log(this.routeId);
  }

}
