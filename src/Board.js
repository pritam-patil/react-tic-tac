import React from "react";
import Square from "./Square";
import { checkWinner } from "./helpers";

import "./styles.css";

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  positions: [],
  hasError: false
};

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getGameStatus = () => {
    const [winner] = checkWinner(this.state.squares);

    if (!!winner) {
      const parsed = this.removePrefix(winner);
      return `Winner is: ${parsed} !!`;
    } else {
      return "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
  };

  getPrefix = winner => {
    if (!!winner && winner[0] !== "D") {
      return "D" + winner;
    }

    return winner;
  };

  removePrefix = winner => {
    if (!!winner && winner[0] === "D") {
      return winner.replace("D", "");
    }

    return winner;
  };

  handleClick = i => {
    const { squares: stateSquares, xIsNext } = this.state;
    const [winner, positions] = checkWinner(stateSquares);

    const squares = stateSquares.slice();
    if (!!winner) {
      // for crossing winning positions on the board
      const [a, b, c] = positions;

      squares[a] = this.getPrefix(winner);
      squares[b] = this.getPrefix(winner);
      squares[c] = this.getPrefix(winner);

      this.setState({
        squares
      });

      return false; // No update
    }

    if (squares[i]) {
      return false; // No update
    }

    squares[i] = xIsNext ? "X" : "O";
    this.setState(prevState => ({
      squares,
      xIsNext: !prevState.xIsNext
    }));
  };

  renderSquare = i => {
    const { squares } = this.state;
    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  };

  resetBoard = () => {
    this.setState({
      ...initialState
    });
  };

  render() {
    const { renderSquare } = this;
    const status = this.getGameStatus();

    return (
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="board-reset__button" onClick={this.resetBoard}>
          Reset
        </button>
      </div>
    );
  }
}

export default Board;
