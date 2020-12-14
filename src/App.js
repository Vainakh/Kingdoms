import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
   stateOne: true,
   stateTwo: false,
   board: ['true', ''],
   boardTwo: ['', '']
  }

  onClickHandler = (event, index) => {
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
      this.setState({ board: arrayTwo, boardTwo: ["", ""]});
    }
  }

  render() {
    return (
     <div>
        {this.state.board.map((el, index) => {
          return (
            <div key={index} className="Cell" onClick={(event) => this.onClickHandler(event, index)}>
              { this.state.board[index] && this.state.boardTwo[index] && <div>Highlighted</div>} 
              { this.state.board[index] && <div>Piece</div>}
            </div>
          )}
        )};
     </div>
    );
  }
}

export default App;
