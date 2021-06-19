import React from 'react';
import ReactDOM from 'react-dom';
import { PassingSingleProp, PassingSinglePropDestructured, PassingSinglePropClass } from './1_PassingProperties.jsx';
import { UpdatingState, UpdatingStateForForms } from './2_UpdatingState.jsx';


const App = (props) => {

  return (
    <div>
      <h1> Let's start </h1>

      <section>
        <h2> Passing Props </h2>
        <PassingSingleProp name="Bob" age="30" />
        <PassingSinglePropDestructured name="Billy" age="23"/>
        <PassingSinglePropClass name="Jane" age="25"/>
      </section>

      <section>
        <h2> Updating State </h2>
        <UpdatingState />
        <UpdatingStateForForms />
      </section>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));