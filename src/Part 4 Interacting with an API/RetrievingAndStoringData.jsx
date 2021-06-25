import React from 'react';
import $ from 'jquery';

class RetrievingAndStoringData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {},
    }
  }

  componentDidMount() {
    // console.log('Mounted')
    // fill me in
  }

  getData = (randomNumber = 1) => {
    // fill  me in
    // for this example, you can call this url https://jsonplaceholder.typicode.com/todos/1
    // once the data is received, set the 'todo' state to be the result of the call
    // copy and paste into your browser and you will get an object
  }

  onClickShuffleGetData = () => {
    const randomNumber = Math.floor(Math.random() * 200);
    // fill me in
  }

  render () {
    // uncomment below and see what kind of properties are passed down
    // console.log(this.props);
    var iconStyle;
    if (this.state.todo.completed) {
      iconStyle = 'completed-status-icon'
    } else {
      iconStyle = 'incomplete-status-icon'
    }
    return (
      <div>
        <button onClick={this.onClickShuffleGetData}>Shuffle</button>
        <div className="todo">
          To-do:
          <span className={iconStyle}></span>
          <article>{this.state.todo.title}</article>
        </div>
      </div>
    )
  }
}

export default RetrievingAndStoringData;