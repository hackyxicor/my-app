import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';

class UITouchableHighlight extends Component {
    render() {
        return (
            <TouchableHighlight
                {...this.props}
            >
                {this.props.children}
            </TouchableHighlight>
        )
    }
}

export default UITouchableHighlight;