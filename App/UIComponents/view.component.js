import React, { Component } from 'react';
import { View } from 'react-native';
import { Stylify } from '../Utils/dimensionHandler.utils';

class UIView extends Component {
    render() {
        return (
            <View
                {...this.props}
                style={Stylify(this.props.style)}
            />
        )
    }
}

export default UIView;