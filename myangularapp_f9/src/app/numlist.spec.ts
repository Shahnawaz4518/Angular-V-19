import { TestBed } from '@angular/core/testing';

import { Numlist } from './numlist';

describe('Numlist', () => {
  let service: Numlist;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Numlist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
