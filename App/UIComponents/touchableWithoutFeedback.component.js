import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

class UITouchableWithoutFeedback extends Component {
    render() {
        return (
            <TouchableWithoutFeedback
                {...this.props}
            >
                {this.props.children}
            </TouchableWithoutFeedback>
        )
    }
}

export default UITouchableWithoutFeedback;