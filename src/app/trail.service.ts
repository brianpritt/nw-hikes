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

  updateTrail(updatedTrail) {
    var trailInFirebase = this.getTrailById(updatedTrail.$key);
    trailInFirebase.update({name: updatedTrail.name,
                            elevation: updatedTrail.elevation,
                            region: updatedTrail.region,
                            lat: updatedTrail.lat,
                            long: updatedTrail.long,
                            intro: updatedTrail.intro,
                            description: updatedTrail.description,
                            length: updatedTrail.length,
                            difficulty: updatedTrail.difficulty,
                            picture: updatedTrail.picture});
  }

  deleteTrail(trailToDelete) {
    var trailInFirebase = this.getTrailById(trailToDelete.$key);
    trailInFirebase.remove();
  }
}
