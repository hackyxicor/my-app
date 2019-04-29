import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TouchableOpacity from './touchableOpacity.component';
import Text from './text.component';
import { Secondary, OnPrimary } from '../Theme/colors';
import { normalize } from '../Utils/dimensionHandler.utils';

const Button = ({
    type = 'round',
    onPress = () => { },
    iconName,
    iconSize,
    iconColor,
    buttonContent,
    buttonStyle,
    buttonTextStyle,
    disabled
}) => {
    const styles = getButtonStyle(type);

    switch (type) {
        case 'icon-button':
            return (
                <TouchableOpacity
                    disabled={disabled}
                    onPress={onPress}
                    style={[styles.buttonStyle, buttonStyle]}
                >
                    <Ionicons name={iconName} size={iconSize} color={iconColor} />
                </TouchableOpacity>
            );

        default:
            return (
                <TouchableOpacity
                    onPress={onPress}
                    style={[styles.buttonStyle, buttonStyle]}
                >
                    <Text style={[styles.buttonTextStyle, buttonTextStyle]}>
                        {buttonContent}
                    </Text>
                </TouchableOpacity>
            );
    }
}

function getButtonStyle(type) {
    switch (type) {
        case 'round':
            return roundStyles;
        case 'bottom-stick':
            return bottomStickStyles;
        case 'icon-button':
            return iconButton;
        case 'wide':
            return wideButtonStyle;
        default:
            return roundStyles;
    }
}

const iconButton = StyleSheet.create({
    buttonStyle: {

    }
})

const roundStyles = StyleSheet.create({
    buttonStyle: {
        height: 48,
        borderRadius: 32,
        backgroundColor: Secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Secondary
    },
    buttonTextStyle: {
        fontSize: 20,
        color: OnPrimary,
        fontWeight: '500',
    }
});

const bottomStickStyles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        height: 55,
        backgroundColor: Secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Secondary,
        width: '95%',
        borderRadius: 3,
    },
    buttonTextStyle: {
        fontSize: 20,
        color: OnPrimary,
        fontWeight: '500',
    }
})

const wideButtonStyle = StyleSheet.create({
    buttonStyle: {
        height: 55,
        backgroundColor: Secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: Secondary,
        width: '95%',
        borderRadius: 3,
    },
    buttonTextStyle: {
        fontSize: 20,
        color: OnPrimary,
        fontWeight: '500',
    }
})

export default Button;
