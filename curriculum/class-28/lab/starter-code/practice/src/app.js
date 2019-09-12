import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {

  render() {
    return (
      <Message text='leave me alone, I want to eat my sushi' />
    );
  }
}

export default App;
