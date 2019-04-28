import React, { Component } from 'react';
import { Text } from 'react-native';
import { Stylify } from '../Utils/dimensionHandler.utils';

class UIText extends Component {
    render() {
        return (
            <Text
                {...this.props}
                style={Stylify(this.props.style)}
            />
        )
    }
}

export default UIText;