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
        <p>
          <label> Updating text
            <input type="input" onChange={this.handleOnChange}/>
          </label>
        </p>

        <p>
          <button type="button" onClick={() => this.handleDecrement()}> - </button>
          Counter: {this.state.counter}
          <button type="button" onClick={this.handleIncrement}> + </button>
        </p>

      </>
    )
  }
}

export default UpdatingState;

/*
Note:


*/

