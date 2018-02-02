import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './buttons.jsx';
import Operation from '../js/operation.js';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      prevValue: '',
      currValue: '',
      operation: null,
      clearValue: false,
      equation: ''
    };

    this.clickCallback = this.clickCallback.bind(this);
  }


  clickCallback(data) {
    this.setState(Operation(data, this.state));
  }

  render() {
    return (
      <div>
        <div className="logoBar" ><div className="solarPanel"></div></div>
        <div className="displayPanel" >{this.state.currValue}</div>
        <Buttons onClick={this.clickCallback} />
      </div>
    )
  }
}

export default App;
