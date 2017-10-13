import React, { Component } from 'react';

class CharacterListItem extends Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <li onClick={() => this.props.onItemClick(this.props.name)} className="list-group-item">
                <div className="media">
                    <div className="media-left">
                        <i className="glyphicon glyphicon-user"></i>
                    </div>
                    <div className="media-body">
                        {this.props.name}
                    </div>
                    <div className="media-right">
                        <span className="badge">{this.props.entries}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default CharacterListItem;