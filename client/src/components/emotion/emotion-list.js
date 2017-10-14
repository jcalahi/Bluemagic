import React from 'react';
import EmotionListItem from './emotion-list-item';

const EmotionList = () => {
    return (
        <div>
            <EmotionListItem width={25} />
            <div className="progress">
                <div className="progress-bar progress-bar-warning">
                    Disgust
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-info">
                    Fear
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-success">
                    Joy
                </div>
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-primary">
                    Sadness
                </div>
            </div>
        </div>
    );
};

export default EmotionList;