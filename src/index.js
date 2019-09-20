import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { positions: [] };
  }

  setWinningPosition = (positions = []) => {
    this.setState({ positions });
  };

  render() {
    return (
      <div className="game">
          <Board />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
