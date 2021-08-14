/**
 * useReducer
 * Demo2 - TODO APP
 */

import { useState, useReducer } from 'react';
import TODO from './component/TODO';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

function newTodo(name) {
  return { id: Date.now(), name, complete: false }
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete}
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos
  }
}

function Demo2() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');
  
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  }

  console.log(todos);
  
  return (
    <div style={{
      marginTop: '10px'
    }}>
      <h2>useReducer Demo: TODO</h2>
      <p>Enter Todo and press enter to add todo into list </p>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          value={ name }
          onChange={event => setName(event.target.value)}
        />
      </form>

      {todos.map(todo => {
       return <TODO key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  );
}

export default Demo2;
