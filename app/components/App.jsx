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
    render() {
        return (
            <div className="content">
                <Notes items={ items } />
            </div>
        );
    }

}
