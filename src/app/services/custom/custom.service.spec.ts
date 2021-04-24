import { TestBed } from '@angular/core/testing';

import { CustomService } from './custom.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomService = TestBed.get(CustomService);
    expect(service).toBeTruthy();
  });
});