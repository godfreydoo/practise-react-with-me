import React from 'react';

class UpdatingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      counter: 0
    }
  }

  handleOnChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleDecrement() {
    this.setState({counter: this.state.counter - 1})
  }

  handleIncrement = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render () {
    // console.log(this.state.text)
    // console.log(this.state.counter)
    return (
      <>
        <div>
          <label> Updating text
            <input type="input" onChange={this.handleOnChange}/>
          </label>
        </div>
        <div>Counter: {this.state.counter}</div>
        <button type="button" onClick={() => this.handleDecrement()}> - </button>
        <button type="button" onClick={this.handleIncrement}> + </button>
      </>
    )
  }
}

export default UpdatingState;

/*
Note:


*/

