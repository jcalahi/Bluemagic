import React from 'react';

const EmotionListItem = (props) => {
    var barStyle = {
        width: props.width
    };
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-danger" style={ barStyle }>
                Anger
            </div>
        </div>
    );
};

export default EmotionListItem;