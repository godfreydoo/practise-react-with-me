import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Part 1 Importing and Exporting
import ShowPictureAndDesc from './Part 1 Importing and Exporting/ShowPictureAndDesc.jsx';

// Part 2 Passing Properties
import { PassingSingleProp, PassingSinglePropDestructured, PassingSinglePropClass } from './Part 2 Passing Properties/PassingProperties.jsx';

// Part 3 Updating State and Events
import UpdatingState from './Part 3 Updating State and Events/1-UpdatingState.jsx';
import UpdatingStateForForms from './Part 3 Updating State and Events/2-UpdatingStateForm.jsx';


const App = (props) => {

  return (
    <div>
      <h1> Let's start </h1>

      <section>
        <h2> Import and Exporting </h2>
        <ShowPictureAndDesc />
      </section>

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