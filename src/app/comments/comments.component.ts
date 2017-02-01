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
  allComments;
  routeComments: any = [];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.routeId = urlParameters['id'];
    });
    this.todisplay = this.commentsService.getComments().subscribe(data=>{this.todisplay = data; console.log(this.todisplay);

    for(var i = 0; i<this.todisplay.length; i++){
      console.log(this.todisplay[i].hikeId);
      console.log(this.routeId);
      if(this.todisplay[i].hikeId == this.routeId){
        this.routeComments.push(this.todisplay[i])
      }
      console.log(this.routeComments)
    }});

  }
whatisroutecomments(){
  console.log(this.routeComments[0].body);
}
// newComment(comment:string){
//   var newComment: Comment = new Comment()
// }
}