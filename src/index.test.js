import {getHello} from './index';

test('It get Hello string', () => {
  const basket = ['lotion'];
  expect(getHello()).toBe('Hello');
});
