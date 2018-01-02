import sum from '../src/index';

describe('api teste', () => {
  it('add 1 + 1', () => { 
    expect(sum(1, 1)).toBe(2);
  });
});
