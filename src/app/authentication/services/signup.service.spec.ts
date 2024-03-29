import { TestBed } from '@angular/core/testing';

import { SignupService } from './signup.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SignupService', () => {
  let service: SignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SignupService
      ]
    });
    service = TestBed.inject(SignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
