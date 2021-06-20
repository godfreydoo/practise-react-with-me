import React from 'react';


const initialState = {
  name: '',
  age: '',
  hobby: '',
}

class UpdatingStateForForms extends React.Component {
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
    return (
      <>
        <form onSubmit={this.submitForm}>
          <label> Name:
            <input type="input" name="name" value={this.state.name} onChange={this.handleForm}/>
          </label>
          <label> Age:
            <input type="input" name="age" value={this.state.age} onChange={this.handleForm}/>
          </label>
          <label> Hobby:
            <input type="input" name="hobby" value={this.state.hobby} onChange={this.handleForm}/>
          </label>
          <div>
            <button type="submit" > Submit Form </button>
          </div>
        </form>
      </>
    )
  }
}

export default UpdatingStateForForms;

/*
Note:


*/