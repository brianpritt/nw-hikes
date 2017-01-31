import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { TrailService } from '../trail.service';
import { Trail } from '../trail.model';


@Component({
  selector: 'app-hikes-list',
  templateUrl: './hikes-list.component.html',
  styleUrls: ['./hikes-list.component.css'],
  providers: [TrailService]
})
export class HikesListComponent implements OnInit {
  trails: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private trailService: TrailService) { }

  ngOnInit() {
    this.trails = this.trailService.getTrails();
  }

  goToDetailPage(clickedTrail) {
    this.router.navigate(['trails', clickedTrail.$key]);
  }

}
