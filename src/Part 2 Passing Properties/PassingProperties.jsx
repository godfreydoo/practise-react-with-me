import React from 'react';

export function PassingSingleProp (props) {
  // console.log(props);
  return (
    <article>My name is {/* FILL ME IN */} and I am {/* FILL ME IN */} years old.</article>
  )
}


export const PassingSinglePropDestructured = ({name, age}) => {
  // console.log(name, age);
  return (
    <article>My name is {/* FILL ME IN */} and I am {/* FILL ME IN */} years old.</article>
  )
}


export class PassingSinglePropClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    // console.log(this.props);
    return (
      <article>My name is {/* FILL ME IN */} and I am {/* FILL ME IN */} years old.</article>
    )
  }
}

/*
Note:

"All React components must act like pure functions with respect to their props." In other words, properties are read-only.
  Link: https://reactjs.org/docs/components-and-props.html#props-are-read-only

"Class components should always call the base constructor with props.
  - class components can also pass down properties to other class components, which can be reference with "this.state.props...""
  Link: https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class

*/
