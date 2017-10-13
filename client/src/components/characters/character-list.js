import React from 'react';
import CharacterListItem from './character-list-item';

const CharacterList = ({ characters }) => {
    var list = [];

    for (var x in characters) {
        list.push(<CharacterListItem key={x} name={x} entries={characters[x]} />);
    }

    return (
        <ul className="list-group col-md-4">
            {list}
        </ul>
    );
};

export default CharacterList;