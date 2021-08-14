import React from 'react';
import { ACTIONS } from '../index';

function TODO({ todo, dispatch }) {
  return (
    <div style={{
      marginTop: '10px'
    }}>
      <span
        style={{
          textDecoration: todo.complete ? 'line-through' : '',
        }}
      >
        {todo.name}
      </span> {` `}
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id} })}>
        Toggle
      </button>
      {` `}
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id} })}>Delete</button>
    </div>
  );
}

export default TODO;
