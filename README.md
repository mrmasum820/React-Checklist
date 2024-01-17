### What is React?

Open source library for building user interfaces

Not a framework

Focus on UI

Rich ecosystem

### Why learn React?

Tell React what you want and React will build the actual UI

React will handle efficiently updating and rendering of the components

DOM updates are handles gracefully in React

Seamlessly integrate react into any of your applications.

Portion of our page or a complete page or even an entire application itself.

React Native for mobile applications.

### 1. Components

Components describe a part of the user interface

They are re-usable and can be nested inside other components

**Two type of components -**

1. Functional components(stateless)

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

1. Class components

   Class extending component class

   Render method returning HTML

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

| Functional                                    | Class                                   |
| --------------------------------------------- | --------------------------------------- |
| Simple functions                              | More feature rich                       |
| Use functional components as much as possible | Maintain their own private data - state |
| Absence of ‘this’ keyword                     | Complex UI logic                        |
| Solution without using state                  | Provide lifecycle hooks                 |
| Mainly responsible for the UI                 | Stateful / smart / container            |
| Stateless / Dumb / Presentational             |                                         |

### 2. JSX

JavaScript XML (JSX) is a extension to the JavaScript language syntax.

Write XML-like code for elements and components.

JSX tags have a tag name, attributes and children

JSX is not a necessity to write React applications

JSX makes your react code simpler and elegant

JSX ultimately transpiles to pure JavaScript which is understood by the browsers.

**JSX differences:**

Class → className

for → htmlFor

camelCase property naming convention

- onclick → onClick
- tabindex → tabIndex

### 3. Props

| props                             | state                                   |
| --------------------------------- | --------------------------------------- |
| props get passed to the component | state is managed within the component   |
| Function parameters               | Variables declared in the function body |
| props are immutable               | state can be changed                    |
| props → Functional components     | useState Hook → functional components   |
| this.props → Class components     | this.state → class components           |

### 4. State

### setState

Always make use of setState and never modify the state directly

Code has to be executed after the state has been updated. Place that code in the callback function which is the second argument to the setState method.

When we need to update state based on the previous state value, pass in a function as an argument instead of the regular object.

### 5. Event Handling

### 6. Conditional Rendering

### Lists and keys

A “key” is a special string attribute you need to include when creating lists of elements.

Keys give the elements a stable identity.

Keys help React identify which items have changed, are added, or are moved.

Help in efficient update of the user interface.

### Index as key

The items in your list do not have a unique key.

The list is a static list and will not change

The list will never be reordered or filtered

### Styling React Components

1. CSS Stylesheet
2. CSS Modules

### Lifecycle Methods

1. **Mounting** → When an instance of a component is being created and inserted into the DOM
   1. **constructor(props)**
      1. A special function that will get called whenever a new component is created
      2. Initializing state, Binding the event handlers
      3. Don’t cause side effects. Ex: HTTP requests
      4. super(props) Directly overwrite this.state.
   2. **static getDerivedStateFromProps(props, state)**
      1. When the state of the component depends on changes in props over time
      2. Set the state
      3. Do not cause side effects. Ex: HTTP requests.
   3. **render()**
      1. Only required method
      2. Read props & state and return JSX
      3. Do not change state or interact with DOM or make ajax calls.
      4. Children components lifecycle methods are also executed.
   4. **componentDidMount()**
      1. Invoked immediately after a component and all its children components have been rendered to the DOM
      2. Cause side effects. Ex: Interact with the DOM or perform any ajax calls to load data.
2. **Updating** → When a component is being re-rendered as a result of changes to either its props or state
   1. **static getDerivedStateFromProps()**
      1. When the state of the component depends on changes in props over time
      2. Set the state
      3. Do not cause side effects. Ex: HTTP requests.
   2. **shouldComponentUpdate(nextProps, nextState)**
      1. Dictates if the component should re-render or not
      2. Performance optimization
      3. Do not cause side effects. Ex: HTTP request, Calling the setState method
   3. **render()**
      1. Only required method
      2. Read props & state and return JSX
      3. Do not change state or interact with DOM or make ajax calls.
      4. Children components lifecycle methods are also executed.
   4. **getSnapshotBeforeUpdate(prevProps, prevState)**
      1. Called right before the changes from the virtual DOM are to be reflected in the DOM
      2. Capture some information from the DOM
      3. Method will either return null or return a value. Returned the value will be passed as the third parameter to the next method.
   5. **componentDidUpdate(prevProps, prevState, snapshot)**
      1. Called after the render is finished in the re-render cycles
      2. Cause side effects
3. **Unmounting** → When a component is being removed from the DOM
   1. **componentWillUnmount()**
      1. Method is invoked immediately before a component is unmounted and destroyed
      2. Cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
      3. Do not call the setState method.
4. **Error Handling** → When there is an error during rendering, in a lifecycle method, or in the constructor of any child component

   1. **static getDerivedStateFromError(error)**
   2. **componentDidCatch(error, info)**

   When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component.

### Pure component

A pure component implements shouldComponentUpdate with a shallow prop and state comparison.

**Shallow comparison**

1. **Primitive Types** → a (SC) b returns true if a and b have the same value and are of the same type, Ex: string ‘Masum’ string ‘Masum’ returns true
2. **Complex Types** → a (SC) b returns true if a and b reference the exact same object.

```jsx
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = a;

var ab = a === b; // false
var cd = a === c; // true
```

```jsx
var a = { x: 1, y: 2 };
var b = { x: 1, y: 2 };
var c = a;

var ab = a === b; // false
var bc = a === c; // true
```

| Regular component                                                                                           | Pure component                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| A regular component does not implement the shouldComponentUpdate method. It always returns true by default. | A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison. |

**Summary**

We can create a component by extending the PureComponent class

A pureComponent implements the shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component

If there is no difference, the component is not re-rendered(performance boost)

It is a good idea to ensure that all the children components are also pure to avoid unexpected behaviour.

Never mutate the state. Always return a new object that reflects the new state.

### Error Boundary

A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.

The static method getDerivedFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

**Summary:**

Error boundaries are React components that catch JavaScript error in their child component tree, log those errors and display a fall-back UI.

A class component becomes an Error boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.

The placement of the Error boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.

Provide a way to gracefully handle error in application code.

### Higher Order Components(HOC)

To share common functionality between components

**A pattern where a function takes a component as an argument and returns a new component.**

const newComponent = highterOrderComponent(originalComponent)

const enhancedComponent = higherOrderComponent(originalComponent)

### Render props

The term ‘render prop’ refers to a technique for sharing code between React components using a prop whose value is a function.

### Context

Context provide a way to pass data through the component tree without having to pass props down manually at every level.

### React and HTTP

Using axios

### React Hooks

Hooks are a new feature addition in React version 16.8 which allow us to use React features without having to write a class.

Ex: State of a component

Hooks don’t work inside classes

### Why Hooks?

Understand how this keyword works in JavaScript

To avoid the bind handlers in class components

Classes don’t minify very well and make hot reloading very unreliable

There is no particular way to reuse stateful component logic

HOC and render props patterns do address this problem

Makes the code harder to follow

There is need to share logic a better way

Create components for complex scenarios such as fetching and subscribing to events

Related code is not organized in one place

Ex: Data fetching → In componentDidMount and componentDidUpdate

Ex: Event Listeners → In componentDidMount and componentWilUnmount

Because of stateful logic → Cannot break components into smaller ones

### Key points

React version 16.8 or higher

Completely opt in

Hooks don’t contain any breaking changes and the release is 100% backwards-compatible.

Classes won’t be removed from React

Can’t use Hooks inside of a class component

Hooks don’t replace our existing knowledge of React concepts

Instead, Hooks provide a more direct API to the React concepts you already know.

**Summary:**

Hooks are new feature addition in React version 16.8

They allow us to use React features without having to write a class

Avoid the whole confusion with ‘this’ keyword

Allow us to reuse stateful logic

Organize the logic inside a component into reusable isolated units.

### 1. useState hook

The useState hook lets us add state to functional components.

In classes, the state is always an object.

With the useState hook, the state doesn’t have to be an object.

The useState hook returns an array with 2 elements.

The first element is the current value of the state, and the second element is a state setter function.

New state value depends on the previous state value. We can pass a function to the setter function.

When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.

### 2. useEffect hook

The effect hook lets us perform side effects in functional components.

It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

In class component we need to use:

```jsx
componentDidMount(){
	document.title = `Clicked ${this.state.count} times`
}

componentDidUpdate(prevProps, prevState){
	document.title = `Clicked ${this.state.count} times`
}

componentWillUnmount(){
	window.removeEventListener('mousemove', this.handlerFunction)
}
```

### 3. useContext Hook

Context provide a way to pass data through the component tree without having to pass props down manually at every level.

### 4. useReducer hook

This hook is used for state management in React

useReducer is related to reducer functions

useReducer(reducer, initialState)

**JavaScript vs useReducercomponent C**

| reducer in JavaScript                         | useReducer in React                                       |
| --------------------------------------------- | --------------------------------------------------------- |
| array.reduce(reducer, initialValue)           | useReducer(reducer, initialState)                         |
| singleValue = reducer(accumulator, itemValue) | newState = reducer(currentState, action)                  |
| reduce method returns a single value          | useReducer returns a pair of values. [newState, dispatch] |

### useReducer with useContext

useReducer → Local state management

share state between components - Global state management

useReducer + useContext

### useState vs useReducer

| Scenario                    | useState                | useReducer             |
| --------------------------- | ----------------------- | ---------------------- |
| Type of state               | Number, string, Boolean | object or array        |
| Number of state transitions | one or two              | too many               |
| Related state transition?   | no                      | yes                    |
| Business logic              | No business logic       | complex business logic |
| Local vs global             | Local                   | Global                 |

### 5. useCallback Hook

useCallback is a hook that will return a memorized version of the callback function that only changes if one of the dependencies has changed.

It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

### 6. useMemo Hook

### 7. useRef Hook

### 8. custom Hook

A custom hook is basically a JavaScript function whose name starts with ‘use’.

A custom hook can also call other Hooks if required.

This is use for share logic which is alternative to HOCs and Render Props.
