import React from 'react';
import EmotionListItem from './emotion-list-item';

const EmotionList = ({ emotion }) => {
    var emotionScores = [];

    if (emotion.length > 0) {
        var emotionItems = emotion[0].emotion;

        for (var prop in emotionItems) {
            emotionScores.push(<EmotionListItem emoType={ prop } width={ emotionItems[prop] * 100 } key={ emotionItems[prop] }/>);    
        }
    }

    return (
        <div className="emotion">
            <h5>Score:</h5>
            { emotionScores }
        </div>
    );
};

export default EmotionList;