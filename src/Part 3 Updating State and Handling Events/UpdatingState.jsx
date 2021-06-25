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
    // fill me in
  }

  handleQuantity = (event) => {
    // fill me in
  }

  handleDecrement() {
    // console.log('this is:', this);
    if (this.state.quantity > 0) {
      // fill me in
    }
  }

  handleIncrement = () => {
    // console.log('this is:', this);
    // fill me in
  }

  fillerFunctionDontUseMe = () => {
    // replace me below with the above appropriate functions
  }

  render () {
    // console.log(this.state.text)
    // console.log(this.state.quantity)
    return (
      <div>
        <div>
          <label>Updating text
            <input type="input" onChange={this.fillerFunctionDontUseMe}/>
          </label>
        </div>
        <br />
        <label>Quantity:
          <input type="number" min="0" value={this.state.text} onChange={this.fillerFunctionDontUseMe}/>
        </label>
        <button aria-label="decrement counter" type="button" onClick={this.fillerFunctionDontUseMe}> - </button>
        <button aria-label="increment counter" type="button" onClick={this.fillerFunctionDontUseMe}> + </button>
      </div>
    )
  }
}

export default UpdatingState;
