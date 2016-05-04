import { expect } from '../test_helper';
import { FETCH_USERS } from '../../src/actions/types';
import { fetchUsers } from '../../src/actions';

describe('actions', () => {
  describe('fetchUsers', () => {
    it('has the correct type', () => {
      expect(fetchUsers().type).to.eql(FETCH_USERS);
    });
  });
});
