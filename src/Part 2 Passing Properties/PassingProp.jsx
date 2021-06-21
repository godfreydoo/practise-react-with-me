import React from 'react';

function PassingProp (props) {
  // console.log(props);
  return (
    <article>My name is {props.name} and I am {props.age} years old.</article>
  )
}

export default PassingProp;