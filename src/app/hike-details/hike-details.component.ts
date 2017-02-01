import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MapServiceService } from '../map-service.service';

import { FirebaseObjectObservable } from 'angularfire2';

import { TrailService } from '../trail.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css'],
  providers: [TrailService, MapServiceService]
})
export class HikeDetailsComponent implements OnInit {
  trailId: string;
  trailToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trailService: TrailService,
    private mapService: MapServiceService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.trailId = urlParameters['id'];
    });
    this.trailService.getTrailById(this.trailId).subscribe(data => {
      this.trailToDisplay = data;
      console.log(this.trailToDisplay.trailhead_location)
    });
    this.mapService.initializeMap();

  }

}
