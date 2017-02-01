import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { TrailService } from '../trail.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-new-trail',
  templateUrl: './new-trail.component.html',
  styleUrls: ['./new-trail.component.css'],
  providers: [TrailService]
})
export class NewTrailComponent implements OnInit {

  constructor(private trailService: TrailService) { }

  ngOnInit() {
  }

  submitForm(name: string, intro: string, description: string, region: string,  difficulty: string, length: string, trailhead_location: string, picture: string) {
    if(name === "") {
      return alert("Please enter a name for the trail.");
    }
    if(intro === "") {
      return alert("Please enter a description teaser.");
    }
    if(description === "") {
      return alert("Please enter a description for the trail.");
    }
    if(region === "") {
      return alert("Please enter a region.");
    }
    if(difficulty === "") {
      return alert("Please enter a difficulty.");
    }
    if(length === "") {
      return alert("Please enter a length for the trail.");
    }
    if(trailhead_location === "") {
      return alert("Please enter a location for the trailhead.");
    }
    var newTrail: Trail = new Trail(name, intro, description, region,  difficulty, length, trailhead_location, picture);
    this.trailService.addTrail(newTrail);
  }

}
