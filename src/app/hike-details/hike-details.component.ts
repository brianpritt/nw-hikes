import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MapServiceService } from '../map-service.service';

import { FirebaseObjectObservable } from 'angularfire2';

import { TrailService } from '../trail.service';
import { MemberService } from '../member.service';
import { Trail } from '../trail.model';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css'],
  providers: [ MapServiceService]
})
export class HikeDetailsComponent implements OnInit {
  trailId: string;
  trailToDisplay: Trail;
  x: number;
  y: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private trailService: TrailService,
    private mapService: MapServiceService,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.trailId = urlParameters['id'];
    });
    this.trailService.getTrailById(this.trailId).subscribe(data => {
      this.trailToDisplay = data;
      this.x = this.trailToDisplay.long;
      this.y = this.trailToDisplay.lat;
      this.mapService.initializeMap(this.x,this.y,13);
      this.trailService.sendTrailObject(data);
    });

  }

}
