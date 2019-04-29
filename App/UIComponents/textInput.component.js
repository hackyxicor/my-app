import React, { Component } from 'react';
import { TextInput } from 'react-native';

class UITextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props}
            />
        )
    }
}

export default UITextInput;