import React from 'react';

class PassingPropWithFunction extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    // console.log(this.props);
    return (
      <article>Random age: {this.props.randomAge()}</article>
    )
  }
}


export default PassingPropWithFunction;