import React from 'react';

const CharacterListItem = (props) => {
    return (
        <li onClick={() => props.onItemClick(props.name)} className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <i className="glyphicon glyphicon-user"></i>
                </div>
                <div className="media-body">
                    {props.name}
                </div>
                <div className="media-right">
                    <span className="badge">{props.entries}</span>
                </div>
            </div>
        </li>
    );
}

export default CharacterListItem;