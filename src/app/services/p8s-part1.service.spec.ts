import { TestBed } from '@angular/core/testing';

import { P8sPart1Service } from './p8s-part1.service';

describe('P8sPart1Service', () => {
  let service: P8sPart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P8sPart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
