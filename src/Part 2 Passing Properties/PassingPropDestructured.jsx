import React from 'react';

const PassingPropDestructured = ({name, age}) => {
  // console.log(name, age);
  return (
    <article>My name is {name} and I am {age} years old.</article>
  )
}

export default PassingPropDestructured;