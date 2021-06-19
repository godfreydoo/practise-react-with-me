import React from 'react';
import ReactDOM from 'react-dom';
import PassingSingleProp from './Part 1/1_passing_props.jsx';

const App = () => {
  return (
    <div>
      <div> Let's start </div>
      <PassingProps name="Morty"/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));