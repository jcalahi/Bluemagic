import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CONSTANTS from './constants';
import Header from './components/header/header';
import CharacterList from './components/character/character-list';
import TextEntryList from './components/text-entry/text-entry-list';
import EmotionList from './components/emotion/emotion-list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            characterEntries: [],
            emotions: [],
            isLoading: null
        };

        this.onItemClick = this.onItemClick.bind(this);
        this.onTargetClick = this.onTargetClick.bind(this);
    }
    // get speaker names on page load
    componentWillMount() {
        const self = this;

        fetch(CONSTANTS.GET_CHARACTERS)
            .then((res) => {
                return res.json();
            }).then((response) => {
                self.setState({ 
                    characters: response.list
                });
            }
        );
    }
    render() {
        return (
            <div>
                <Header title="Play name: Henry IV" />
                <CharacterList 
                    characters={ this.state.characters } 
                    onItemClick={ this.onItemClick } />
                <EmotionList 
                    emotion={ this.state.emotions }
                    isLoading={ this.state.isLoading } />
                <TextEntryList 
                    textEntry={ this.state.characterEntries } 
                    onTargetClick={ this.onTargetClick } />
            </div>
        );
    }
    // handler when clicking speaker names
    onItemClick(selectedName) {
        const self = this;

        fetch(CONSTANTS.POST_CHAR_DATA, {
            method: 'POST',
            headers: {
                "CONTENT-TYPE": "application/json"
            },
            body: JSON.stringify({
                name: selectedName
            })
        }).then((res) => {
            return res.json();
        }).then((response) => {
            self.setState({
                characterEntries: response.entries
            });
        });
    }
    // handler when clicking target text
    onTargetClick(target) {
        const self = this;

        self.setState({ // reset state for spinner
            emotions: [],
            isLoading: true
        });
        
        fetch(CONSTANTS.POST_TARGET_TEXT, {
            method: 'POST',
            headers: {
                "CONTENT-TYPE": "application/json"
            },
            body: JSON.stringify({
                text: target
            })
        }).then((res) => {
            return res.json();
        }).then((response) => {
            console.info('debug', response); // debug purposes

            // do not change state if response is not valid
            if (typeof response !== 'object') {
                alert(response);
                self.setState({
                    isLoading: false
                });
                return;
            }

            if (response.emotion) {
                self.setState({
                    emotions: response.emotion.targets,
                    isLoading: false
                });
            } else {
                self.setState({
                    emotions: response.keywords,
                    isLoading: false
                });
            }
        });
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
);