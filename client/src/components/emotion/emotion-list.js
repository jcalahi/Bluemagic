import React from 'react';
import EmotionListItem from './emotion-list-item';

const EmotionList = ({ emotion, isLoading }) => {
    let emotionScores = [];

    if (emotion.length > 0) {
        let emotionItems = emotion[0].emotion;

        for (let prop in emotionItems) {
            emotionScores.push(<EmotionListItem emoType={ prop } width={ emotionItems[prop] * 100 } key={ emotionItems[prop] }/>);    
        }
    }

    function showLoader(bool) {
        return bool === true ? 'show' : 'hide';
    }

    return (
        <div className="emotion">
            <h5>Score:</h5>
            <div className={`center-block loader ${showLoader(isLoading)}`}></div>
            { emotionScores }
        </div>
    );
};

export default EmotionList;