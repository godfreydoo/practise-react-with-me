import React from 'react';

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
  }

  onClickShuffleData = () => {
    const randomNumber = Math.floor(Math.random() * 200);
    this.getData(randomNumber);
  }

  render () {
    var iconStyle;
    if (this.state.todo.completed) {
      iconStyle = {
        height: '0.5rem',
        width: '0.5rem',
        marginRight: '0.375rem',
        marginLeft: '0.375rem',
        background: 'rgb(34, 139, 34)',
        borderRadius: '50%'
      }
    } else {
      iconStyle = {
        height: '0.5rem',
        width: '0.5rem',
        marginRight: '0.375rem',
        marginLeft: '0.375rem',
        background: 'rgb(214, 61, 46)',
        borderRadius: '50%'
      }
    }
    return (
      <div>
        <button onClick={this.onClickShuffleData}>Shuffle</button>
        <div className="character">
          To-do:
          <span style={iconStyle}></span>
          <div>{this.state.todo.title}</div>
        </div>
      </div>
    )
  }
}

export default RetrievingAndStoringData