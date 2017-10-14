import React from 'react';
import EmotionListItem from './emotion-list-item';

const EmotionList = ({ emotion }) => {
    if (emotion.length > 0) {
        var emotionScores = [];
        var emotionItems = emotion[0].emotion;

        for (var prop in emotionItems) {
            emotionScores.push(<EmotionListItem emoType={ prop } width={ emotionItems[prop] * 100 } key={ emotionItems[prop] }/>);    
        }
    }

    return (
        <div>
            <h5>Emotion Scores:</h5>
            { emotionScores }
        </div>
    );
};

export default EmotionList;