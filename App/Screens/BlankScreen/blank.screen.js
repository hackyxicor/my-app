import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../../UIComponents';

class BlankScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container} >

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BlankScreen;