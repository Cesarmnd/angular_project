import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentStateEffects } from './student-state.effects';

describe('StudentStateEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StudentStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
