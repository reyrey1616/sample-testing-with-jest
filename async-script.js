const fetch = require('node-fetch');

const getPeoplePromise = (fetch) => {
  return fetch('https://swapi.dev/api/people')
    .then((response) => response.json())
    .then((data) => {
      const { count, results } = data;
      console.log(data);

      return {
        count,
        results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch('https://swapi.dev/api/people');
  const data = await getRequest.json();
  const { count, results } = data;
  console.log(data);
  return {
    count,
    results,
  };
};

getPeople(fetch);
