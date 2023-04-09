import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StudentEffects } from './student-state.effects';
import { StudentService } from '../../services/student.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

describe('StudentStateEffects', () => {
  let actions$: Observable<any>;
  let effects: StudentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        SharedModule
      ],
      providers: [
        StudentEffects,
        StudentService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StudentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
