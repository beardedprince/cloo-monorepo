import { TestBed } from '@angular/core/testing';

import { ClooperCommonService } from './clooper-common.service';

describe('ClooperCommonService', () => {
  let service: ClooperCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClooperCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
