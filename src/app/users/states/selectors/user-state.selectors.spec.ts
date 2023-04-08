import * as fromUserState from '../reducers/user-state.reducer';
import { selectUserStateState } from './user-state.selectors';

describe('UserState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserStateState({
      [fromUserState.userStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
