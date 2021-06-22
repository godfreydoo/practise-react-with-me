import React from 'react';

class RetrievingAndStoringData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
    }
  }

  componentDidMount() {
    this.getCharacterData();
  }

  getCharacterData = (randomNumber = 329) => {
    fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({character: data})
      })
      .catch(err => {
        console.error(err);
      })
  }

  onClickShuffle = () => {
    const randomNumber = Math.floor(Math.random() * 671);
    this.getCharacterData(randomNumber);
  }

  render () {
    return (
      <div>
        <button onClick={this.onClickShuffle}>Shuffle</button>
        <div className="character">
          <img src={this.state.character.image} alt={this.state.character.image}/>
          <div className="characterCard">
            <section>
              <h3>{this.state.character.name}</h3>
              <div>{this.state.character.status}-{this.state.character.species}</div>
            </section>
            <section>
              <div>Last known location:</div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default RetrievingAndStoringData