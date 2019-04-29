import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import View from './view.component';
import Text from './text.component';
import gStyle from '../Theme/styles';
import { Primary, OnPrimary } from '../Theme/colors';

const UITag = ({ label, tagStyle, textStyle }) => (
    <View
        style={[styles.container, tagStyle]}
    >
        <Text style={[styles.text, textStyle]} >{label}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Primary,
        margin: 2,
        minWidth: 70,
        height: 30,
    },
    text: {
        ...gStyle.h7,
        ...gStyle.light,
        color: Primary
    }
})
export default UITag;