import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import API from './constants';
import CharacterList from './components/characters/character-list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
        };
    }
    componentWillMount() {
        var self = this;

        fetch(API.GET_CHARACTERS).then(function(res) {
            return res.json();
        }).then(function(response) {
            self.setState({ 
                characters: response.list
            });
        });
    }
    render() {
        return (
            <CharacterList characters={this.state.characters} />
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);