import React from 'react';

const EmotionListItem = (props) => {
    var legend = {
        anger: 'progress-bar-danger',
        disgust: 'progress-bar-warning',
        fear: 'progress-bar-info',
        sadness: 'progress-bar-primary',
        joy: 'progress-bar-success'
    };
    var barStyle = {
        width: props.width
    };
    
    return (
        <div className="progress">
            <div className={`progress-bar ${legend[props.emoType]}`} style={ barStyle }>
                { props.emoType }
            </div>
        </div>
    );
};

export default EmotionListItem;