import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Part 1 Importing and Exporting
import ShowPictureAndDesc from './Part 1 Importing and Exporting/ShowPictureAndDesc.jsx';

// Part 2 Passing Properties
import PassingProp from './Part 2 Passing Properties/PassingProp.jsx';
import PassingPropWithFunction from './Part 2 Passing Properties/PassingPropWithFunction.jsx';
import PassingPropDestructured from './Part 2 Passing Properties/PassingPropDestructured.jsx';

// Part 3 Updating State and Events
import UpdatingState from './Part 3 Updating State and Handling Events/UpdatingState.jsx';
import UpdatingStateForForms from './Part 3 Updating State and Handling Events/UpdatingStateForForms.jsx';

// Part 4 Retrieving and Storing Data with an API
import RetrievingAndStoringData from './Part 4 Interacting with an API/RetrievingAndStoringData.jsx';


const App = (props) => {

  function randomAge() {
    return Math.floor(Math.random() * 100);
  }

  function doSomethingWithFormData(data) {
    console.log(data);
    return data;
  }

  return (
    <div className="container">
      <section>
        <h2> Importing and Exporting </h2>
        <ShowPictureAndDesc />
      </section>

      <section>
        <h2> Passing Properties </h2>
        <PassingProp name="Bob" age="30" />
        <PassingPropDestructured name="Jane" age="25"/>
        <PassingPropWithFunction randomAge={randomAge}/>
      </section>

      <section>
        <h2> Updating State and Handling Events </h2>
        <UpdatingState />
        <UpdatingStateForForms doSomethingWithFormData={doSomethingWithFormData}/>
      </section>

      <section>
        <h2> Interacting with an API </h2>
        <RetrievingAndStoringData />
      </section>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));