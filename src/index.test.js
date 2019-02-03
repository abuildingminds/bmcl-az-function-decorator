import {getHello} from './index';

test('It get Hello string', () => {
  expect(getHello()).toBe('Hello');
});
