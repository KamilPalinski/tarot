import { to } from 'theme';

describe('to function ', () => {
  it('returns proper media query', () => {
    expect(to('1200px')).toStrictEqual('@media screen and (max-width:1200px)');
  });
});
