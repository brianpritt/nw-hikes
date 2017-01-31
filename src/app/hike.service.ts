import { Injectable } from '@angular/core';
import { Hike } from './hike.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class HikeService {
  hikes: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.hikes = angularFire.database.list('hikes');
  }

  getHikes() {
    return this.hikes;
  }

  getHikeById(hikeId: string) {
    return this.angularFire.database.object('/hikes/' + hikeId);
  }
}
