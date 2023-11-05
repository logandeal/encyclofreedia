import React from "react";
import { IonIcon } from "@ionic/react";
import { useState, useRef } from 'react';
import { arrowUpCircleOutline, arrowDownCircleOutline, arrowUpCircle, arrowDownCircle } from 'ionicons/icons';
import './VoteButtons.css';

/* This was made with the assistance of ChatGPT, at 3am */
const VoteButtons: React.FC = () => {
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    const handleUpvote = () => {
        setUpvoted(!upvoted);
        setDownvoted(false);
    };
    const handleDownvote = () => {
        setDownvoted(!downvoted);
        setUpvoted(false);
    };

    return (
        <div>
            <IonIcon
                icon={upvoted ? arrowUpCircle : arrowUpCircleOutline}
                onClick={handleUpvote}
                className="ion-icons"
            />
            <IonIcon
                icon={downvoted ? arrowDownCircle : arrowDownCircleOutline}
                onClick={handleDownvote}
                className="ion-icons"
            />
        </div>
    );
};

export default VoteButtons;