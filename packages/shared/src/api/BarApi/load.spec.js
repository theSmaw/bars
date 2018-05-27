import load from './load';

global.fetch = jest.fn().mockImplementationOnce(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      bars: ['bars']
    })
  })
);

describe('load', () =>

  it('Should load the bars', () =>
    load()
      .then(bars =>

        expect(bars)
          .toEqual({ bars: ['bars'] })
      )
  )
);
