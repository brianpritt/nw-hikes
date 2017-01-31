import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { HikeService } from '../hike.service';
import { Hike } from '../hike.model';


@Component({
  selector: 'app-hikes-list',
  templateUrl: './hikes-list.component.html',
  styleUrls: ['./hikes-list.component.css'],
  providers: [HikeService]
})
export class HikesListComponent implements OnInit {
  hikes: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private hikeService: HikeService) { }

  ngOnInit() {
    this.hikes = this.hikeService.getHikes();
  }

  goToDetailPage(clickedHike) {
    this.router.navigate(['hikes', clickedHike.$key]);
  }

}
