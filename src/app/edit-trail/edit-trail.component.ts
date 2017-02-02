import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TrailService } from '../trail.service';
import { MemberService } from '../member.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-edit-trail',
  templateUrl: './edit-trail.component.html',
  styleUrls: ['./edit-trail.component.css'],
  providers: []
})
export class EditTrailComponent implements OnInit {
  @Input() selectedTrail: Trail;
  // selectedTrail;
  // serviceTrail;
  constructor(private trailService: TrailService,
              private memberService: MemberService) { }

  ngOnInit() {
    // console.log(this.childSelectedTrail);
    // console.log(this.selectedTrail);
    //this.trailService.sendTrailObject(this.selectedTrail)
  }


  beginUpdateTrail(trailToUpdate) {
    console.log(trailToUpdate)
    this.trailService.updateTrail(trailToUpdate);
  }
  deleteTrail(trailToDelete) {
    if(confirm("Are you sure you want to delete this trail?")) {
      this.trailService.deleteTrail(trailToDelete);
    }
  }

}
