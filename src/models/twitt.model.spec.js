const TwittModel = require('./twitt.model');

describe('twtitts crud test', () => {
  it('sum somethign', () => {
    const twitt = new TwittModel();

    expect(twitt.sum(1, 2)).toBe(3);
  });
});
