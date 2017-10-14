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
            characterEntries: [],
            emotions: []
        };

        this.onItemClick = this.onItemClick.bind(this);
        this.onTargetClick = this.onTargetClick.bind(this);
    }
    // loads data on page load
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
                <TextEntryList textEntry={ this.state.characterEntries } onTargetClick={ this.onTargetClick } />
            </div>
        );
    }
    // handler when clicking speaker names
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
    // handler when clicking target text
    onTargetClick(target) {
        var self = this;
        
        fetch(API.POST_TARGET_TEXT, {
            method: 'POST',
            headers: {
                "CONTENT-TYPE": "application/json"
            },
            body: JSON.stringify({
                text: target
            })
        }).then(function(res) {
            return res.json();
        }).then(function(response) {
            self.setState({
                emotions: response.emotion
            });

            console.log(response);
        });
    }

}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);