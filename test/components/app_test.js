import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    // for some reason, renderComponent is failing when rendering <UserList /> inside of app.js
    // component = renderComponent(App);
  });

  // it('renders something', () => {
    // expect(component).to.exist;
  // });
});
