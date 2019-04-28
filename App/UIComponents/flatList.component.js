import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Stylify } from '../Utils/dimensionHandler.utils';

class UIFlatList extends Component {
    render() {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                {...this.props}
                style={Stylify(this.props.style)}
                contentContainerStyle={Stylify(this.props.contentContainerStyle)}
            />
        )
    }
}

export default UIFlatList;