# Updating State and Handling Events

Tasks
- [ ] Under `./__tests__/part-4.test.js`, remove the `x` from the test suite on ln 11 if you are using the fetch method (test is WIP for other methods)
- [ ] In RetrievingAndStoringData.jsx, complete the `componentDidMount()` method to call random data upon component render
- [ ] In RetrievingAndStoringData.jsx, complete the `getData()` function to call random data
- [ ] In RetrievingAndStoringData.jsx, complete the `onClickShuffleGetData()` event handler to get new data upon an onClick event


Goal
* Understand basic [lifecycle methods](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) in a class component
* Practice API interaction
* [JSON Placeholder](https://jsonplaceholder.typicode.com/) is a good place to practice HTTP methods without a database. Play around with the component and interact with the difference resources and routes


## Lifecycle Methods
The most common one used for class components is `componentDidMount()`. This method runs after the component output has been rendered, being a good place to put any function calls that we want to run upon render (component / page load).

## API Interaction
Key thing to know is how to send and process the response. [jQuery.ajax()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) method, [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and [axios](https://github.com/axios/axios) all do the same thing, but has its differences.

When access the data returned, be mindful of how to access the data and what data format is is returned as. The [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) method will come handy when using the fetch method.



## Links
- [Lifecycle Methods](RetrievingAndStoringData.jsx)