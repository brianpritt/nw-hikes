import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comments } from './comments.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CommentsService {
  comments: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire){
    this.comments = angularFire.database.list('comments');
  }
  getComments(){
    return this.comments;
  }
  addComment(comment){
    this.comments.push(comment);
  }
}
