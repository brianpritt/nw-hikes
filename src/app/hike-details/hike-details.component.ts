import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FirebaseObjectObservable } from 'angularfire2';

import { TrailService } from '../trail.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css'],
  providers: [TrailService]
})
export class HikeDetailsComponent implements OnInit {
  trailId: string;
  trailToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trailService: TrailService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.trailId = urlParameters['id'];
    });
    this.trailToDisplay = this.trailService.getTrailById(this.trailId);
  }

}
