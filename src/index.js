import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(
      'I am  the constructor and  I will be the first to run. 1.yazı'
    );
    this.state = {
      firstName: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      'I am getDerivedStateFromProps and I will be the second to run. 2.yazı'
    );
    return null;
  }
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run. 3.yazı');
  }

  render() {
    console.log('I am render and I will be the third to run. 4.yazı');
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
      </div>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
