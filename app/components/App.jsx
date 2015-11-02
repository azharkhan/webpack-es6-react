import React, { Component } from 'react';
import Notes from './Notes.jsx';

var items = [
    {
        id: 1,
        text: 'Set up Webpack'
    },
    {
        id: 2,
        text: 'Add React hot-loading'
    },
    {
        id: 3,
        text: 'Add Babel for transpiling'
    },
    {
        id: 4,
        text: 'Add CSS preprocessor'
    },
    {
        id: 5,
        text: 'Learn some new tricks!'
    }
];

export default class App extends Component {
    constructor( props ){
        super( props );

        this.state = {
            notes: items
        };
    }

    render() {
        const notes = this.state.notes;

        return (
            <div className="content">
                <button className="add-note" onClick={ this.addNote }>+ Add New</button>
                <Notes items={ items } />
            </div>
        );
    }

    addNote() {
        alert( 'remind me to do something!' );
    }

}
