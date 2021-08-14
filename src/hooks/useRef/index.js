/**
 * useRef is similar as state only difference is that it doesn't re-update when its value get change.
 * it return an object having current property.
 * e.g. { current: <something> }
 * 
 * Immportant: each html element inside document have ref attribute.
 * usecase: 
 *  1) To get dom element reference
 *  2) To maintain previous value before update and avoid re-render
 */
import React, { useState, useEffect, useRef } from 'react'

//Demo 1 - Get Dom reference
function Demo1() {
  const [name, setName] = useState('');
  const inputRef = useRef();

  function focus(){
    inputRef.current.focus();
    // Important: Do not change input text value here it will not call render which will not update {name} inside div
  }

  return (
    <div>
      <h2>useRef Demo</h2>
      <input
        ref={inputRef}
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <div>Enter Text is {name}</div>
      <button
        onClick={focus}
      > Focus on Input Text</button>
    </div>
  )
}

// Demo 2 - Maintain previous value before re-render of component
function Demo2() {
  const [name, setName] = useState('');
  const previousName = useRef('');

  useEffect(() => {
    previousName.current = name;
  }, [name])

  return (
    <div>
      <h2>useRef Demo</h2>
      <input
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <p>Enter Name is {name} </p>
      <p>Previous Name is {previousName.current} </p>
    </div>
  )
}

export { Demo1, Demo2 }