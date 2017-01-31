import { Injectable } from '@angular/core';
import { Trail } from './trail.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TrailService {
  trails: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.trails = angularFire.database.list('trails');
  }

  getTrails() {
    return this.trails;
  }

  getTrailById(trailId: string) {
    return this.angularFire.database.object('/trails/' + trailId);
  }
}
