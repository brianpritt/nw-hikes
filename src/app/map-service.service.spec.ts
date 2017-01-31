/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapServiceService } from './map-service.service';

describe('MapServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapServiceService]
    });
  });

  it('should ...', inject([MapServiceService], (service: MapServiceService) => {
    expect(service).toBeTruthy();
  }));
});
