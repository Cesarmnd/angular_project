import * as fromStudentState from '../reducers/student-state.reducer';
import { selectStudentState } from './student-state.selectors';

describe('StudentState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentState({
      [fromStudentState.studentStateFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});
