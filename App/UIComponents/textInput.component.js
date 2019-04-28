import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { PrimaryText } from '../Theme/colors';

import { Stylify } from '../Utils/dimensionHandler.utils';


class UITextInput extends Component {
    render() {
        return (
            <TextInput
                mode='flat'
                style={Stylify(styles.textInput)}
                {...this.props}
            />
        )
    }
}

const styles = {
    textInput: {
        backgroundColor: PrimaryText,
        width: 300,
        height: 50
    }
};

export default UITextInput;