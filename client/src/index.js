import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import API from './constants';
import Header from './components/header/header';
import CharacterList from './components/character/character-list';
import TextEntryList from './components/text-entry/text-entry-list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            characterEntries: []
        };

        this.onItemClick = this.onItemClick.bind(this);
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
            <div>
                <Header title="Play name: Henry IV" />
                <CharacterList characters={ this.state.characters } onItemClick={ this.onItemClick } />
                <TextEntryList textEntry={ this.state.characterEntries } />
            </div>
        );
    }
    onItemClick(selectedName) {
        var self = this;
        fetch(API.POST_CHAR_DATA, {
            method: 'POST',
            headers: {
                "CONTENT-TYPE": "application/json"
            },
            body: JSON.stringify({
                name: selectedName
            })
        }).then(function(res) {
            return res.json();
        }).then(function(response) {
            self.setState({
                characterEntries: response.entries
            });
        });
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);