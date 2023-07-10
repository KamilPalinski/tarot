import { from } from 'theme';

describe('from function', () => {
  it('returns proper media query', () => {
    expect(from('1200px')).toStrictEqual('@media screen and (min-width:1200px)');
  });
});
