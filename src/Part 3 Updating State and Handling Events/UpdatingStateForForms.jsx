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
    let value = event.target.value;
    let field = event.target.name;

    if (field === 'age') {
      value = Number(value);
    }

    this.setState({[field]: value});
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.doSomethingWithFormData(this.state);
    this.setState(initialState);
  }

  render () {
    // console.log(this.state)
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div>
            <label> Name:
              <input type="input" name="name" value={this.state.name} onChange={this.handleForm}/>
            </label>
          </div>

          <div>
            <label> Age:
              <input type="number" name="age" min="0" max="150" value={this.state.age} onChange={this.handleForm}/>
            </label>
          </div>

          <div>
            <label> Favorite Movie Genre:
              <select name="movie" value={this.state.movie} onChange={this.handleForm}>
                <option value="">None</option>
                <option value="Action">Action</option>
                <option value="Romance">Romance</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
              </select>
            </label>
          </div>

          <div>
          Favorite Programming Language:
            <div>
              <label>
                <input type="radio" name="language" value="JavaScript" checked={this.state.language === 'JavaScript'} onChange={this.handleForm}/>
                JavaScript
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="language" value="Python" checked={this.state.language === 'Python'} onChange={this.handleForm}/>
                Python
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="language" value="Go" checked={this.state.language === 'Go'} onChange={this.handleForm}/>
                Go
              </label>
            </div>
          </div>
          <div>
            <button type="submit" > Submit Form </button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdatingStateForForms;