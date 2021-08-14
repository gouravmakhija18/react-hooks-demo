/**
 * Custom hook: It is just like other react hooks which are function that accept user input and return some value.
 * Important: custom hook name always start with keyword `use`. e.g useLocalStorage, useCookie etc
 * 
 * Example: 
 * useFetch hook - Used to fetch some value from url similar as fetch JS api.
 */
import React from 'react';
import useFetch from './useFetch';

function Demo1() {
  const API_URL =  `https://dog.ceo/api/breeds/image/random`;
  const res = useFetch(API_URL, {}); // custom hook invocation

  if (!res.response) {
    return <div>Loading...</div>;
  }

  const { status, message } = res.response;

  return (
    <div className="App">
      <div>
        <h3>API Status: {status}</h3>
        <div>
          <img src={message} alt="Random Dog Image" />
        </div>
      </div>
    </div>
  );
}

export { Demo1 };