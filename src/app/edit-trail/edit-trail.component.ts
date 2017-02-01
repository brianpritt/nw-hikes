import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { TrailService } from '../trail.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-edit-trail',
  templateUrl: './edit-trail.component.html',
  styleUrls: ['./edit-trail.component.css'],
  providers: [TrailService]
})
export class EditTrailComponent implements OnInit {
  @Input() selectedTrail;

  constructor(private trailService: TrailService) { }

  ngOnInit() {
  }

  updateTrail(trailToUpdate) {
    this.trailService.updateTrail(trailToUpdate);
  }

  deleteTrail(trailToDelete) {
    if(confirm("Are you sure you want to delete this trail?")) {
      this.trailService.deleteTrail(trailToDelete);
    }
  }

}
