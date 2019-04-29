import React, { Component } from 'react';
import { FlatList } from 'react-native';

class UIFlatList extends Component {
    render() {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                {...this.props}
            />
        )
    }
}

export default UIFlatList;