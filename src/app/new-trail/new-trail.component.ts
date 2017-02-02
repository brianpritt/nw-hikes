import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MapServiceService } from '../map-service.service';
import { TrailService } from '../trail.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-new-trail',
  templateUrl: './new-trail.component.html',
  styleUrls: ['./new-trail.component.css'],
  providers: [TrailService, MapServiceService]
})
export class NewTrailComponent implements OnInit {

  constructor(private trailService: TrailService, private mapService: MapServiceService) { }

  ngOnInit() {
  }

  submitForm(name: string, elevation: string, region: string, lat, long, intro: string, description: string, length: string, difficulty: string, picture: string) {
    if(name === "") {
      return alert("Please enter a name for the trail.");
    }
    if(elevation === "") {
      return alert("Please enter an elevation gain for the trail.");
    }
    if(region === "") {
      return alert("Please enter a region.");
    }
    if(lat === NaN || lat === "") {
      return alert("Please enter a latitude for the trailhead.");
    }
    if(long === NaN || long === "") {
      return alert("Please enter a longitude for the trailhead.");
    }
    if(intro === "") {
      return alert("Please enter a description teaser.");
    }
    if(description === "") {
      return alert("Please enter a description for the trail.");
    }
    if(length === "") {
      return alert("Please enter a length for the trail.");
    }
    if(difficulty === "") {
      return alert("Please enter a difficulty.");
    }
    var newTrail: Trail = new Trail(name, elevation, region, parseInt(lat), parseInt(long), intro, description, length, difficulty, picture);
    this.trailService.addTrail(newTrail);
  }
}
