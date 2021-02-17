import React, { useState, useEffect } from "react";
import Square from "./components/Square";
import Patterns from "./components/Patterns";
import "./App.css";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]); //pehle sari tiles blank hongi
  const [player, setPlayer] = useState("O"); //game starting player but yha x hai thoda sa bug hai ye
  const [result, setResult] = useState({ winner: "none", state: "none" }); //result ke liye
  //ye hrbaar board change hone pr winnig condition check karega aur tie match check karega
  useEffect(() => {
    checkWin(); //checking for winning
    checkIfTie(); //checking for a tie
    if (player == "X") {
      //changing the player turn
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    //agr result change hua to aler karengey aur game reset karengey
    if (result.state != "none") {
      alert(`Game Finished! Winning player is ${result.winner}`);
      resetGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    //kissi block pr click hoga to ye function uspe X,O put karega array me change krke
    console.log("square clicked is", square);
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }
        return val;
      })
    );
    //pehle yha player change kr rhe the mgr vo glt result derha tha ab jha checkwin call horha vha player change karengey.
  };

  const checkWin = () => {
    //ye thoda typical hai
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkIfTie = () => {
    //function to check for a tie
    let filled = true;
    board.map((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No one", state: "Tie" });
    }
  };

  const resetGame = () => {
    //function to reset the game
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
  };
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      <div className="board">
        <div className="row">
          <Square
            id="one"
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            id="two"
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            id="three"
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            id="four"
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            id="five"
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            id="six"
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            id="seven"
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            id="eight"
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            id="nine"
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
