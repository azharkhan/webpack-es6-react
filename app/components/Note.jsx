import React, { Component } from 'react';

export default class Note extends Component {
    render() {
        return (
            <span>{ this.props.task }</span>
        );
    }
}
