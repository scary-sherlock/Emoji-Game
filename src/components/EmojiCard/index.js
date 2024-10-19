import React from 'react';
import './index.css';

const EmojiCard = ({ emojiDetails, onEmojiClick }) => {
    const { id, emojiName, emojiUrl } = emojiDetails;

    const handleClick = () => {
        onEmojiClick(id);
    };

    return (
        <li className="emoji-card" onClick={handleClick}>
            <img src={emojiUrl} alt={emojiName} className="emoji" />
        </li>
    );
};

export default EmojiCard;
