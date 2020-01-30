import React from 'react';
import Logo from '../../assets/images/logo.svg'
import './score-board.scss';

const ScoreBoard = ({score}) => {
    return(
        <div className="header">
            <div className="score-board">
                <img className="logo" src={Logo} alt="logo"/>
            <div className="score">
                <div className="text">SCORE</div>
                <div className="digit">{score}</div>
            </div>
            </div>
        </div>
    )
};

export default ScoreBoard;