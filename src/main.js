import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app.jsx';


class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));
