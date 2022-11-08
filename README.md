# React Hooks:
1. useState
2. useEffect
3. useMemo
4. useCallback
5. useRef
6. useContext
7. useReducer
8. custom react hook


## useState
It is used to maintain the component state object.

**Important Points:**
  1. Everytime when we update the state using useState hook, it render the component
  2.  We always define hooks at the top of component.
  3. Hooks always render in order and can not used conditionally.
  
  e.g. Below code will throw error

```js
if(true) {
  const [count, setCount] = useState(0); // throw Error
}
```

## useEffect
This hook is used whenever any effect happen in the component. 

e.g. if some variable change we used this hook.
It is the alternative for the class component lifecycle methods **componentDidMount, componentDidUpdate, componentWillUnmount**.

**Important:**
Everytime when changes happen in component it invoke useEffect hook. To restrict the useEffect invocation on every change 
we passed second arguments in useEffect function.

Second argument (e.g. [dependencies]) tells if value of that argument change only then useEffect hook will execute.

```js
Syntax
useEffect(fn, [dependencies])
```

#### There are three version of useEffect hooks

```js
// Version 1 - If the useEffect has no dependencies, then the callback function constantly executes whenever the component updates
useEffect(function(){
  // code here ...
})

// Version 2 - If the useEffect has dependencies it is equivalent of the componentDidUpdate
useEffect(function(){
  // code here ...
},[])

// or 
useEffect(function(){
  // code here ...
},[dependency])

// Version 3
useEffect(function(){
  // code here ...
  return () => {
    // it will run componentWillUnmount
  }
},[dependency])

```

## useMemo
This hook is used to optimize the performance by caching the function in memory which value doesn't change often.

**example:** 
```js
function power(x) => x*x; // always will give same result for input x.

Syntax: 
useMemo(function, [dependencies])
```
**where we can use useMemo hook?**
  1. Caching function which value doesn't change often, to enhance computitional power.
  2. To cache object reference.

**Important:** 
Be careful with Memory and performance overhead if you are using useMemo hook.


## useCallback
It return a memoized version of the callback function that only changes if any of its dependencies get change.
Same as useMemo hook, useCallback hook also takes callback function along with array of dependency as an second argument.

```js
Syntax: useCallback(callbackFunc, [dependecies Array]);
```

**useCallback vs useMemo**

```js
useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
```
useMemo is similar to useCallback, except it allows you to apply memoization to any value type (not just functions).
It does this by accepting a function which returns the value and then that function is only called when the value
needs to be retrieved (which typically will only happen once each time an
element in the dependencies array changes between renders).

Note: useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.

## useRef
useRef hook is similar as state only difference is that it doesn't re-update when its value get change.
it return an object having **current** property.

```js
e.g. { current: <something> }
```
**Immportant**: 
Each html element inside document have ref attribute.

**Where to use useRef hook?** 
  1. To get dom element reference
  2. To maintain previous value before update and avoid re-render.

## useContext
**useContext** hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.
It returns an object with 2 values: **{ Provider, Consumer }**

**How it work?**

Call useContext, pass in the context object you got from React.createContext, and out pops the value.
The only thing to watch out for is that you have to pass the whole context object to useContext – not just the Consumer!

## useReducer

useReducer hook is an another way to manage state and re-render a component whenever state changes.
It has similar pattern as redux.

useReducer hook take two arguments.
  1. reducer function
  2. Initial state as object which return an array which has two values **state** and **dispatch** function which is invoked to update state

**reducer function**
It takes two arguments **current state** and **action** which we pass in dispatch function


```js
import { useReducer } from 'react';
const ACTIONS = {
  // actions
};

function reducer(state, action) {
  // reducer function
}

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  return (
   <div>
   // something here
   </div>
  );
}
export default App;
```

## Custom Hook
**Custom hook** is like other react hooks which are like a function that accept user input and return some value.

**Important:**
Custom hook name always start with keyword `use`. 

e.g useLocalStorage, useCookie, useFetch etc





**Reference:**
[Official Documentation](https://reactjs.org/docs/hooks-intro.html)
