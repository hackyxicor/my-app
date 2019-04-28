import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Stylify } from '../Utils/dimensionHandler.utils';

class UIScrollView extends Component {
    render() {
        return (
            <ScrollView
                {...this.props}
                style={Stylify(this.props.style)}
                contentContainerStyle={Stylify(this.props.contentContainerStyle)}
                indicatorStyle={Stylify(this.props.indicatorStyle)}
            />
        )
    }
}

export default UIScrollView;