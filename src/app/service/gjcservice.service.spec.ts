import { TestBed } from '@angular/core/testing';

import { GjcserviceService } from './gjcservice.service';

describe('GjcserviceService', () => {
  let service: GjcserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GjcserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
