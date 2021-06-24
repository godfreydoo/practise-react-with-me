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
    // console.log('Component mounted')
    this.getData();
  }

  getData = (randomNumber = 1) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({todo: data})
      })
      .catch(err => {
        console.error(err);
      })

    // $.ajax({
    //   method: 'GET',
    //   url: `https://jsonplaceholder.typicode.com/todos/${randomNumber}`,
    //   success: (data) => {
    //     console.log(data);
    //     this.setState({todo: data})
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // })
      // .done(data => {
      //   this.setState({todo: data})
      // })
      // .fail(err => {
      //   console.error(err);
      // })
  }

  onClickShuffleGetData = () => {
    const randomNumber = Math.floor(Math.random() * 200);
    this.getData(randomNumber);
  }

  render () {
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

export default RetrievingAndStoringData