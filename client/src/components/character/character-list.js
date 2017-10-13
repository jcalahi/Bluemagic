import React from 'react';
import CharacterListItem from './character-list-item';

const CharacterList = ({ characters, onItemClick }) => {
    var list = [];

    for (var name in characters) {
        list.push(
            <CharacterListItem 
                key={ name } 
                name={ name } 
                entries={ characters[name] } 
                onItemClick={ onItemClick } 
            />
        );
    }
    return (
        <ul className="list-group col-md-3">
            { list }
        </ul>
    );
};

export default CharacterList;