/**
 * useEffect - This hook is used whenever any effect happen in component. e.g. if some variable change we used this hook.
 * It is the alternative for the class component lifecycle methods componentDidMount, componentDidUpdate, componentWillUnmount.
 * 
 * Important:
 * Everytime when changes happen in component it invoke useEffect hook. To restrict the useEffect invocation on every change 
 * we passed second arguments in useEffect function.
 * Second argument (e.g. [dynamicValue] in Demo1) tells if value of that argument change only then useEffect function will execute.
 */

import React, { useState, useEffect } from 'react';
// Demo 1
function Demo1() {
  const [dynamicValue, setDynamicValue] = useState('Laptop');

  useEffect(() => {
    console.log('hook is conditionally rendering');
  }, [dynamicValue]);

  return (
    <div>
      <h2>Demo 1</h2>
      <button onClick={() => setDynamicValue('Laptop')}> Laptop </button>
      <button onClick={() => setDynamicValue('Mobile')}> Mobile </button>
      <button onClick={() => setDynamicValue('Internet')}> Internet </button>
      <p>You have selected <strong>{dynamicValue}</strong></p>
    </div>
  );
}

//Demo 2
function Demo2() {
  const [resourceType, setResourceType] = useState('users');
  const [jsonData, setJSONData] = useState([]);

  useEffect(() => {
    //source: https://jsonplaceholder.typicode.com/
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setJSONData(json));
  }, [resourceType]);

  return (
    <div>
      <h2>Demo 2 </h2>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('posts')}>posts</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      { jsonData.length && jsonData.map(item => <p>{JSON.stringify(item)}</p>)}
    </div>
  );
}

/**
 * Demo3: useEffect cleanup
 * Note: return funtion inside useEffect is known as cleanup function which always execute first whenever useEffect hooks invoke.
 */
function Demo3() {
  const [ width, setWidth ] = useState(window.innerWidth);
  
  function handleResize(){
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
  return (
    <div>
      <h2>Demo 3</h2>
      <div>Window width is { width }</div>
    </div>
  )
}

export { Demo1, Demo2, Demo3 };
