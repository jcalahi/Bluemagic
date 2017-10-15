import React from 'react';
import TextEntryItem from './text-entry-item';

const TextEntryList = ({ textEntry, onTargetClick }) => {
    var entries = textEntry.map((text, idx) => {
        return <TextEntryItem 
                    key={ idx } 
                    target={ text } 
                    onTargetClick={ onTargetClick } />;
    });
    return (
        <table className="table-hover col-md-8">
            <thead>
                <tr>
                    <th>Target Text / Line ID and number</th>
                </tr>
            </thead>
            <tbody className="table-fixed">
                { entries }
            </tbody>
        </table>
    );
};

export default TextEntryList;