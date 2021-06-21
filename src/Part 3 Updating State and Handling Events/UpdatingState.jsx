import React from 'react';

class UpdatingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      quantity: 0,
    }
  }

  handleText = (event) => {
    this.setState({text: event.target.value})
  }

  handleQuantity = (event) => {
    this.setState({quantity: Number(event.target.value)})
  }

  handleDecrement() {
    if (this.state.quantity > 0) {
      this.setState({quantity: this.state.quantity - 1})
    }
  }

  handleIncrement = () => {
    this.setState({quantity: this.state.quantity + 1})
  }

  render () {
    // console.log(this.state.text)
    // console.log(this.state.quantity)
    return (
      <div>
        <div>
          <label>Updating text
            <input type="input" onChange={this.handleText}/>
          </label>
        </div>
        <br />
        <label>Quantity:
          <input type="number" min="0" value={this.state.quantity} onChange={this.handleQuantity}/>
        </label>
        <button aria-label="decrement counter" type="button" onClick={() => this.handleDecrement()}> - </button>
        <button aria-label="increment counter" type="button" onClick={this.handleIncrement}> + </button>
      </div>
    )
  }
}

export default UpdatingState;
