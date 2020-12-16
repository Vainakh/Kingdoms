import './App.css';
import React, { Component } from 'react';

const newArray = new Array(99).fill("");
newArray.unshift("true");

const newArrayTwo = new Array(100).fill("")

class App extends Component {
  state = {
   stateOne: true,
   stateTwo: false,
   board: [...newArray],
   boardTwo: [...newArrayTwo]
  }
  
  onClickHandler = (event, index) => {
    console.log(this.state.board)
    let array = [...this.state.boardTwo];
    let arrayTwo = new Array(this.state.board.length).fill("");
    if (this.state.board[index] && !this.state.boardTwo[index]) {
      array[index] = "true";
      this.setState({ boardTwo: array });
    } else if (this.state.board[index] && this.state.boardTwo[index]) {
      array[index] = "";
      this.setState({ boardTwo: array });
    } else if (!this.state.board[index] && !this.state.boardTwo[index] && this.state.boardTwo.some(el => el)) {
      arrayTwo[index] = true;
      this.setState({ board: arrayTwo, boardTwo: [...newArrayTwo]});
    }
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="Container">
        {this.state.board.map((el, index) => {
          return (
            <div key={index} className="Cell" onClick={(event) => this.onClickHandler(event, index)}>
              { this.state.board[index] && this.state.boardTwo[index] && <div className="Highlighted"></div>} 
              { this.state.board[index] && <div>Piece</div>}
              { index + 1}
            </div>
            )}
          )};
        </div>
      </div>
    );
  }
}

export default App;
