/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HackerNewsAPIService } from './hackernews-api.service';

describe('Service: HackernewsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HackerNewsAPIService ],
      imports: [ HttpModule ]
    });
  });

  it('should instantiate service', inject([HackerNewsAPIService], (service: HackerNewsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
