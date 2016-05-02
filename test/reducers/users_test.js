import { expect } from '../test_helper';
import usersReducer from '../../src/reducers/users';
import { FETCH_USERS } from '../../src/actions/types';

describe('Users Reducer', () => {
  it ('handles action with unknown type', () => {
    expect( usersReducer(undefined, {}) ).to.eql([]);
  });

  it ('handles action of type FETCH_USERS', () => {
    const action = {
      type: FETCH_USERS,
      payload: [{ name: 'Sara' }]
    };
    expect( usersReducer([], action)).to.eql([{name: 'Sara'}]);
  });
});
