import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FirebaseObjectObservable } from 'angularfire2';

import { HikeService } from '../hike.service';
import { Hike } from '../hike.model';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css'],
  providers: [HikeService]
})
export class HikeDetailsComponent implements OnInit {
  hikeId: string;
  hikeToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hikeService: HikeService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.hikeId = urlParameters['id'];
    });
    this.hikeToDisplay = this.hikeService.getHikeById(this.hikeId);
  }

}
