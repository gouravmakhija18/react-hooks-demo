/**
 * useCallback hook - It return a memoized version of the callback function
 * that only changes if one of the dependencies has changed.
 *
 * Same as useMemo hook, it takes callback function along with array of dependency as an arguments.
 * Syntax: useCallback(callbackFunc, [dependecies List]);
 *
 * useCallback vs useMemo
 * useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
 * useMemo is similar to useCallback except it allows you to apply memoization to any value type (not just functions).
 * It does this by accepting a function which returns the value and then that function is only called when the value
 * needs to be retrieved (which typically will only happen once each time an
 * element in the dependencies array changes between renders).
 */

import { useState, /* useMemo, */ useCallback } from 'react';

const Demo1 = () => {
  const [text, setText] = useState('Hello 1!');

  const ChildComponent = ({ text }) => {
    console.log('Component rendered....!');
    return <div> {text} </div>;
  };

  // ONLY renders again when the indicated value {text} changes
  const MemoizedComponent = useCallback(<ChildComponent text={text} />, [text]);
  // both are same
  // const MemoizedComponent = useMemo(() => <ChildComponent text={text} />, [text]);
  

  return (
    <div>
      <button onClick={() => setText('Hello 1!')}> Hello 1! </button>{' '}
      <button onClick={() => setText('Hello 2!')}> Hello 2! </button>{' '}
      <button onClick={() => setText('Hello 1!')}> Hello 1! </button>
      
      {MemoizedComponent}
    </div>
  );
};

export { Demo1 };
