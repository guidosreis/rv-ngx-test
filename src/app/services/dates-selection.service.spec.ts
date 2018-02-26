import { TestBed, inject } from '@angular/core/testing';

import { DatesSelectionService } from './dates-selection.service';

describe('DatesSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatesSelectionService]
    });
  });

  it('should be created', inject([DatesSelectionService], (service: DatesSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
