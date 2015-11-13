import React, { Component } from 'react';
import Note from './Note.jsx';

export default class Notes extends Component {
    render() {
        const notes = this.props.items;

        return <ul className="notes">{ notes.map( this.renderNote ) }</ul>;
    }

    renderNote( note ) {
        var className = note.decoration ? "note animate" : "note";
        return (
            <li className={ className } key={`note${note.id}`}>
                <Note task={note.text} />
            </li>
        );
    }
}
