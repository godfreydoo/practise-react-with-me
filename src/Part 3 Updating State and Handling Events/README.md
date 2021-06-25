# Updating State and Handling Events

Tasks
- [ ] Under `./__tests__/part-3.test.js`, remove the `x` from the test suite on ln 13 and 32
- [ ] In UpdatingState.jsx, add the appropriate function event handler and replace the `fillerFunctionDontUseMe` function
- [ ] In UpdatingState.jsx, set state correctly in each event handler
- [ ] In UpdatingStateForForms.jsx, set state correctly so that it's dynamic per entry
- [ ] In UpdatingStateForForms.jsx, invoke the passed down function to "do something with form data"


Goal
* Update local component state
* Handle basic events (event listening and triggering)


## Updating State
State is private and fully controlled by the component.

Functional components are stateless and cannot hold local states (without the use of Hooks).

A simple way is to use a Class component to hold state.

```javascript
class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: [],
      otherData: {}
    }
  }
  render() {
    return (
      <div>Hello World<div>
    )
  }
}
```

Reference state by using `this.state...`. To mutate state, use `this.setState( )`.


## Handling Events
There are lots of events you can use outlined [here](https://reactjs.org/docs/events.html).

Worth noting is the use of the `this` keyword in JSX callbacks. The below examples are taken from the [React documentaiton](https://reactjs.org/docs/handling-events.html).

```javascript
class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

Compared to...
```javascript
class LoggingButton extends React.Component {
  handleClick () {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

## Forms
React has a whole section on [forms](https://reactjs.org/docs/forms.html).

React recommends using controlled components to implement forms where form data is handled by the component and maintained in its own state.



### Note
**Using state correctly (from the below documentation)**
* do not modify state directly by calling `this.state.counter = 1`; you need to use `this.setState( )`
* state updates may be asynchronous; note the specific places to use `console.log( )` to help understand
* state updates are merged (shallow merge)


## Links
[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
[Converting a Function to a Class](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
[Adding Local State to a Class](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
[Using State Correctly](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)
[Handling Events](https://reactjs.org/docs/handling-events.html)
[Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)