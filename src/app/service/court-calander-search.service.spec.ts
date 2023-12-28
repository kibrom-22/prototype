import { TestBed } from '@angular/core/testing';

import { CourtCalanderSearchService } from './court-calander-search.service';

describe('CourtCalanderSearchService', () => {
  let service: CourtCalanderSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtCalanderSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
