import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        let text = 'Learning Webpack + React';
        return (
            <div>{ text }</div>
        );
    }
}
