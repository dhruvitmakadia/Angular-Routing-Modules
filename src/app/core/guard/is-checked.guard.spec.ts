import { TestBed, async, inject } from '@angular/core/testing';

import { IsCheckedGuard } from './is-checked.guard';

describe('IsCheckedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsCheckedGuard]
    });
  });

  it('should ...', inject([IsCheckedGuard], (guard: IsCheckedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
