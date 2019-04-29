import React, { Component } from 'react';
import { Text } from 'react-native';

class UIText extends Component {
    render() {
        return (
            <Text
                {...this.props}
            />
        )
    }
}

export default UIText;