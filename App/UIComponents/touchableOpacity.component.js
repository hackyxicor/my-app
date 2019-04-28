import React, { Component } from 'react';
import { TouchableRipple } from 'react-native-paper';
import { Stylify } from '../Utils/dimensionHandler.utils';

class UITouchableOpacity extends Component {
    render() {
        return (
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, .32)"
                {...this.props}
                style={Stylify(this.props.style)}
            >
                {this.props.children}
            </TouchableRipple>
        )
    }
}

export default UITouchableOpacity;