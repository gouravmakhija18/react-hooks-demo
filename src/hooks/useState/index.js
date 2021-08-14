/**
 * useState Hook - used to maintain the component state object.
 * Important Points:
 * 1) Everytime when we update the state using useState hook, it render the component
 * 2) We always define hooks at the top of component.
 * 3) Hooks always render in order and can not used conditionally.
 * e.g. below code will throw error
 * if(true) {
 *    const [count, setCount] = useState(0);
 * }
 */
// Demo1
import React, { useState } from 'react';
function Demo1() {
  console.log('component 1 is rendering');
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount((previousCount) => previousCount + 1);
  }

  function DecrementCount() {
    setCount((previousCount) => previousCount - 1);
  }

  return (
    <div>
      <h2>when state is not an object</h2>
      <p> Count is {count} </p>
      <button onClick={IncrementCount}> Increment Count</button> &nbsp;
      <button onClick={DecrementCount}> Decrement Count </button>
    </div>
  );
}
// Demo2
function Demo2() {
  console.log('component 2 is rendering');
  const [state, setState] = useState({
    count: 0,
    theme: 'red',
  });

  function IncrementCount() {
    setState((previousState) => {
      return {
        // ...previousState is used because setState hook replace the complete object and If we don't grab previous object here then it will rewrite object and theme property will not be there in return object
        ...previousState,
        count: previousState.count + 1,
      };
    });
  }

  function DecrementCount() {
    setState((previousState) => {
      return {
        ...previousState,
        count: previousState.count - 1,
      };
    });
  }

  return (
    <div>
      <h2>when state is an object</h2>
      <p>
        Count is {state.count}, theme is {state.theme}{' '}
      </p>
      <button onClick={IncrementCount}> Increment Count</button> &nbsp;
      <button onClick={DecrementCount}> Decrement Count </button>
    </div>
  );
}

// Demo3
function Demo3() {
  console.log('component 3 is rendering');
  const [count, setCount] = useState(0);
  const [theme] = useState('red');

  function IncrementCount() {
    setCount((previousState) => previousState + 1);
  }

  function DecrementCount() {
    setCount((previousState) => previousState - 1);
  }

  return (
    <div>
      <h2>Multiple hooks</h2>
      <p>
        Count is {count}, theme is {theme}{' '}
      </p>
      <button onClick={IncrementCount}> Increment Count</button> &nbsp;
      <button onClick={DecrementCount}> Decrement Count </button>
    </div>
  );
}

export { Demo1, Demo2, Demo3 };
