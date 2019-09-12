import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: 'this is my amazing application'
    };
  }
  render(){
    return (
    <>
      <h2>{this.props.text}</h2>
      <h3>{this.state.words}</h3>
    </>
    )
  }

}

export default Message;
