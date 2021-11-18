import { TestBed } from '@angular/core/testing';

import { ClooperCoreService } from './clooper-core.service';

describe('ClooperCoreService', () => {
  let service: ClooperCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClooperCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
