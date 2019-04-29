import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class UIScrollView extends Component {
    render() {
        return (
            <ScrollView
                {...this.props}
            />
        )
    }
}

export default UIScrollView;