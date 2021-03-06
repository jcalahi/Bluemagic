import React from 'react';
import CharacterListItem from './character-list-item';

const CharacterList = ({ characters, onItemClick }) => {
    let list = [];

    for (let name in characters) {
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
        <ul className="list-group col-md-4">
            { list }
        </ul>
    );
};

export default CharacterList;