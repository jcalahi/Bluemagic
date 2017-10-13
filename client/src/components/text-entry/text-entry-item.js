import React, { Component } from 'react';

class TextEntryItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr onClick={() => console.log(this.props.target)}>
                <td>{ this.props.target }</td>
                <td>
                </td>
            </tr>
        );
    }
}

export default TextEntryItem;