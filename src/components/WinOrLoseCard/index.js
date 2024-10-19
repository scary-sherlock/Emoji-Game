import React from 'react';
import './index.css';

const WinOrLoseCard = ({ isGameWon, score, onClickPlayAgain }) => {
    const imageUrl = isGameWon
        ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';
    const resultText = isGameWon ? 'You Won' : 'You Lose';
    const scoreText = isGameWon ? 'Best Score' : 'Score';

    return (
        <div className="win-or-lose-card">
            <img src={imageUrl} alt={resultText} className="result-image" />
            <div className="result-details">
                <h1 className="result-text">{resultText}</h1>
                <p className="score-text">{scoreText}</p>
                <p className="score-value">{score}/12</p>
                <button type="button" className="play-again-button" onClick={onClickPlayAgain}>
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default WinOrLoseCard;
