import React from 'react';
import TextEntryItem from './text-entry-item';

const TextEntryList = ({ textEntry }) => {
    var entries = textEntry.map((text, idx) => {
        return <TextEntryItem key={ idx } target={ text }/>
    });
    return (
        <div>
            <table className="table-hover col-md-9">
                <thead>
                    <tr>
                        <th>Target Text</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody className="table-fixed">
                    { entries }
                </tbody>
            </table>
        </div>
    );
};

export default TextEntryList;