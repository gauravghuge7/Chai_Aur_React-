import './grid.css';
import isWinner from '../../helpers/helper.js'
import { Icon } from "../Icon/Icon";
import { useState } from "react";
import { Card } from "../Card/Card";

function Grid({numberOfCards}) {

    const [board, setBoard] = useState(Array(numberOfCards).fill(""));

    const [turn, setTurn] = useState(true);

    const [winner, setWinner] = useState(null);


    function play(index) {
        if(turn == true) {
            board[index] = 'O';
        }
        else {
            board[index] = 'X';
        }

        const win = isWinner(board, turn ? 'O' : 'X');

        if(win) {
            setWinner(win);
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }

    return(

        <div className="grid-wrapper">
            {    
                winner && (
                    <>
                        <h1 className="turn-highlight"> winner is {winner}</h1>
                        <button className="reset" onClick={reset}> Reset game :</button>
                    </>
                )
            }       



            <h2 className="turn-highlight">Current turn -- {(turn) ? 'O' : 'X'} </h2>
            <div className="grid">

                {board.map((idx, el) => <Card gameEnd={winner ? true : false } onPlay={play} player={el} index={idx} /> )}  
                
                
            

            </div>
        </div>
    );
}

export {
    Grid
}