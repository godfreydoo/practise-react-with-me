import React from 'react';

export class UpdatingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      text: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({text: event.target.value})
  }

  handleIncrement = () => {
    this.setState({counter: this.state.counter + 1})
  }

  handleDecrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  render () {
    // console.log(this.state.text)
    // console.log(this.state.counter)
    return (
      <>
        <div>
          <label> Updating text
            <input type="input" onChange={this.handleOnChange.bind(this)}/>
          </label>
        </div>
        <div>Counter: {this.state.counter}</div>
        <button type="button" onClick={this.handleDecrement.bind(this)}> - </button>
        <button type="button" onClick={this.handleIncrement.bind(this)}> + </button>
      </>
    )
  }
}

/*
Note:


*/

const initialState = {
  name: '',
  age: '',
  hobby: '',
}

export class UpdatingStateForForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      hobby: '',
    }
  }

  handleForm = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState(initialState);
  }

  render () {
    // console.log(this.state)
    return (
      <>
        <form onSubmit={(event) => this.submitForm(event)}>
          <label> Name:
            <input type="input" name="name" value={this.state.name} onChange={this.handleForm}/>
          </label>
          <label> Age:
            <input type="input" name="Age" value={this.state.age} onChange={this.handleForm}/>
          </label>
          <label> Hobby:
            <input type="input" name="Hobby" value={this.state.hobby} onChange={this.handleForm}/>
          </label>
          <div>
            <button type="submit" > Submit Form </button>
          </div>
        </form>
      </>
    )
  }
}

/*
Note:


*/
