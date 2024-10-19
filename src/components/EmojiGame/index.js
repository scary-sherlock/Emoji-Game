import React, { Component } from 'react';
import NavBar from '../NavBar';
import EmojiCard from '../EmojiCard';
import WinOrLoseCard from '../WinOrLoseCard';
import './index.css';

class EmojiGame extends Component {
    state = {
        clickedEmojis: [],
        isGameOver: false,
        isGameWon: false,
        score: 0,
        topScore: 0,
    };

    shuffleEmojis = () => {
        const { emojisList } = this.props;
        return emojisList.sort(() => Math.random() - 0.5);
    };

    onEmojiClick = id => {
        const { clickedEmojis, score, topScore } = this.state;
        if (clickedEmojis.includes(id)) {
            this.setState({ isGameOver: true, isGameWon: false });
        } else {
            const newClickedEmojis = [...clickedEmojis, id];
            const newScore = score + 1;
            const newTopScore = newScore > topScore ? newScore : topScore;
            if (newClickedEmojis.length === this.props.emojisList.length) {
                this.setState({
                    isGameOver: true,
                    isGameWon: true,
                    score: newScore,
                    topScore: newTopScore,
                });
            } else {
                this.setState({
                    clickedEmojis: newClickedEmojis,
                    score: newScore,
                    topScore: newTopScore,
                });
            }
        }
    };

    resetGame = () => {
        this.setState({
            clickedEmojis: [],
            isGameOver: false,
            isGameWon: false,
            score: 0,
        });
    };

    render() {
        const { isGameOver, isGameWon, score, topScore } = this.state;
        const shuffledEmojis = this.shuffleEmojis();

        return (
            <div className="emoji-game">
                <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
                <div className="game-container">
                    {isGameOver ? (
                        <WinOrLoseCard
                            isGameWon={isGameWon}
                            score={score}
                            onClickPlayAgain={this.resetGame}
                        />
                    ) : (
                        <ul className="emoji-list">
                            {shuffledEmojis.map(emoji => (
                                <EmojiCard
                                    key={emoji.id}
                                    emojiDetails={emoji}
                                    onEmojiClick={this.onEmojiClick}
                                />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

export default EmojiGame;
