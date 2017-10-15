import React from 'react';

const TextEntryItem = ({ target, onTargetClick }) => {
    return (
        <tr onClick={ () => onTargetClick(target.textEntry) }>
            <td>{ target.textEntry }</td>
            <td>{ target.lineId }</td>
            <td>{ target.lineNumber }</td>
        </tr>
    );
}

export default TextEntryItem;