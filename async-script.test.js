// ASYNC TEST

const fetch = require('node-fetch');
const swapi = require('./async-script');

it('Calls swapi to get people', () => {
  expect.assertions(1); // Must have this line for async test
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
  });

  //   Must return the test to wait for the promise to be resolve
});

it('Calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it('Get people returns count and results', () => {
  // Mocking function
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(4);
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
