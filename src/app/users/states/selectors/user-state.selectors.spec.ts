import * as fromUserState from '../reducers/user-state.reducer';
import { selectUserState } from './user-state.selectors';

describe('UserState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserState({
      [fromUserState.userStateFeatureKey]: {}
    });

    // expect(result).toEqual({});
  });
});
