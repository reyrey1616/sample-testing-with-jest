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
