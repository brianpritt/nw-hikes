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

  addTrail(newTrail: Trail) {
    this.trails.push(newTrail);
  }

  updateTrail(localUpdatedTrail) {
    console.log(localUpdatedTrail.$key)
    var trailInFirebase = this.getTrailById(localUpdatedTrail.$key);
    console.log(trailInFirebase);
    trailInFirebase.update({name: localUpdatedTrail.name,
                            elevation_gain: localUpdatedTrail.elevation_gain,
                            region: localUpdatedTrail.region,
                            lat: localUpdatedTrail.lat,
                            long: localUpdatedTrail.long,
                            intro: localUpdatedTrail.intro,
                            description: localUpdatedTrail.description,
                            length: localUpdatedTrail.length,
                            difficulty: localUpdatedTrail.difficulty,
                            picture: localUpdatedTrail.picture});
  }

  deleteTrail(trailToDelete) {
    var trailInFirebase = this.getTrailById(trailToDelete.$key);
    trailInFirebase.remove();
  }
}
