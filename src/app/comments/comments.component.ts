import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from '../comments.service';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  routeId;
  todisplay;
  allComments;
  routeComments = [];

  constructor(private memberService: MemberService,private route: ActivatedRoute,
  private location: Location, private commentsService: CommentsService) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.routeId = urlParameters['id'];
    });
    this.todisplay = this.commentsService.getComments().subscribe(data=>{this.todisplay = data;

    });

  }
  newComment(){
    // var newComment: Comment = new Comment()
  }
}
