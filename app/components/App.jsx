import React, { Component } from 'react';
import Note from './Note.jsx';

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
    }
];

export default class App extends Component {
    render() {
        let notes = items.map(function(item) {
            return(
                <li key={`note${item.id}`}>
                    <Note task={item.text} />
                </li>
            );
        });

        return (
            <div>
                <ul>{ notes }</ul>
            </div>
        );
    }
}
