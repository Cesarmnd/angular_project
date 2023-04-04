import * as fromStudentState from '../reducers/student-state.reducer';
import { selectStudentStateState } from './student-state.selectors';

describe('StudentState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStudentStateState({
      [fromStudentState.studentStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
