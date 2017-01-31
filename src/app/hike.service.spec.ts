/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HikeService } from './hike.service';

describe('HikeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HikeService]
    });
  });

  it('should ...', inject([HikeService], (service: HikeService) => {
    expect(service).toBeTruthy();
  }));
});
