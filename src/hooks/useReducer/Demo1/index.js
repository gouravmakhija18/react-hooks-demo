/**
 * useReducer
 * Demo1 - Increment, Decrement counter
 */

import { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Demo1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function Increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function Decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  return (
    <div>
      <h2>useReducer Demo1 - Counter App </h2>
      <h3>Count is : {state.count}</h3>
      <button onClick={Increment}>Increment</button>
      {` `}
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default Demo1;
