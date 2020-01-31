import { TestBed } from '@angular/core/testing';

import { PreLoadingService } from './pre-loading.service';

describe('PreLoadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreLoadingService = TestBed.get(PreLoadingService);
    expect(service).toBeTruthy();
  });
});
