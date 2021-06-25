# Passing Properties

Tasks
- [ ] Under `./__tests__/part-2.test.js`, remove the `x` from the test suite on ln 13
- [ ] Pass down the properties for each component

Goal
* Pass down and use properties in a functional stateless component, to a class component, and finally with destructuring


## Properties
Components can receive "props" (which stands for properties). You can think of a component as a literal JavaScript function, and "props" as its parameters or inputs.

React has this strict rule: **"All React components must act like pure functions with respect to their props"**.


### Note
* Properties are read-only and should not be mutated.
* Keep a consistent import and export strategy.
* Class components can also pass down properties to other class components (being referenced with the `this` keyword)

## Links
[Components and Props](https://reactjs.org/docs/components-and-props.html)