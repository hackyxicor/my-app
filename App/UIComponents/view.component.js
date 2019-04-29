import React, { Component } from 'react';
import { View } from 'react-native';

class UIView extends Component {
    render() {
        return (
            <View
                {...this.props}
            />
        )
    }
}

export default UIView;