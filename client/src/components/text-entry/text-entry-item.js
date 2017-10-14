import React, { Component } from 'react';
import EmotionList from '../emotion/emotion-list';

class TextEntryItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr onClick={() => this.props.onTargetClick(this.props.target)}>
                <td>{ this.props.target }</td>
                <td>
                    <EmotionList />
                </td>
            </tr>
        );
    }
}

export default TextEntryItem;