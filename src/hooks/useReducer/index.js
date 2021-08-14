/**
 * useReducer hook: It is another way to manage state and re-render a component whenever state changes.
 * It has similar pattern as redux.
 * 
 * useReducer hook take two arguments - 1. reducer function, 2. Initial state as object and 
 * return an array which has two values state and dispatch function which is invoked to update state
 * 
 * reducer function - It takes two arguments current state and action which we pass in dispatch function
 * 
 * -------------------------------------
 *            Template:
 * -------------------------------------
 * import { useReducer } from 'react';
 * const ACTIONS = {
 *   // actions
 * };
 * 
 * function reducer(state, action) {
 *   // reducer function
 * }
 * 
 * function App() {
 *   const [state, dispatch] = useReducer(reducer, []);
 *   return (
 *    <div>
 *    // something here
 *    </div>
 *   );
 * }
 * export default App;
 */


import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
export { Demo1, Demo2 };