import React from 'react';


const initialState = {
  name: '',
  age: '',
  movie: '',
  language: '',
}

class UpdatingStateForForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      movie: '',
      language: '',
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
          <div>
            <label> Name:
              <input type="input" name="name" value={this.state.name} onChange={this.handleForm}/>
            </label>
          </div>

          <div>
            <label> Age:
              <input type="input" name="age" value={this.state.age} onChange={this.handleForm}/>
            </label>
          </div>

          <div>
            <label> Favorite Movie Genre:
              <select name="movie" value={this.state.movie} onChange={this.handleForm}>
                <option value="">None</option>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
                <option value="horror">Horror</option>
                <option value="comedy">Comedy</option>
              </select>
            </label>
          </div>

          <div>
          Favorite Programming Language:
            <div>
              <input type="radio" name="language" value="javascript" onChange={this.handleForm}/>
              <label>JavaScript</label>
            </div>
            <div>
              <input type="radio" name="language" value="python" onChange={this.handleForm}/>
              <label>Python</label>
            </div>
            <div>
              <input type="radio" name="language" value="go" onChange={this.handleForm}/>
              <label>Go</label>
            </div>
          </div>
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