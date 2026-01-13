import { TestBed } from '@angular/core/testing';

import { Othermessage } from './othermessage';

describe('Othermessage', () => {
  let service: Othermessage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Othermessage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
