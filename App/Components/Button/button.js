import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableHighlight, Text } from '../../UIComponents';

const Button = ({ buttonContent }) => (
    <TouchableHighlight
        underlayColor={'transparent'}
        onPress={this.onConfirm}
        style={[roundButtonStyle.buttonStyle, this.props.ButtonStyle]}
    >
        <Text style={[roundButtonStyle.buttonTextStyle, this.props.ButtonTextStyle]}>
            {buttonContent}
        </Text>
    </TouchableHighlight>
)

const roundButtonStyle = StyleSheet.create({
    buttonStyle: {
        width: '80%',
        marginHorizontal: '3%'
    },
    buttonTextStyle: {
        fontSize: 20
    }
});

export default Button;
