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
        text: 'Add CSS preprocessor',
        decoration: true
    }
];

export default class App extends Component {
    constructor( props ){
        super( props );

        this.addNote = this.addNote.bind( this );
        this.saveOnEnter = this.saveOnEnter.bind( this );

        this.state = {
            notes: items,
            addNote: false
        };
    }

    render() {
        const notes = this.state.notes;
        var buttonText = this.state.addNote ? 'Save Notes' : '+ Add New';

        return (
            <div className="content">
                <button className="add-note" onClick={ this.addNote }>{ buttonText }</button>
                { this.state.addNote ? <input type="text" placeholder="Press Enter to Save..." onKeyPress={ this.saveOnEnter } /> : null }
                <Notes items={ items } />
            </div>
        );
    }

    saveOnEnter( event ) {
        var notesList;

        if (event.key === "Enter" ) {

            notesList = this.state.notes;
            notesList.push({ id: this.state.notes.length + 1, text: event.target.value });

            this.setState({
                notes: notesList,
                addNote: this.state.addNote
            });

            event.target.value = '';

        }
    }

    addNote() {
        this.setState({ addNote: !this.state.addNote });
    }

}
