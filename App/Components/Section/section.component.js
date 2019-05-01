import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../../UIComponents';
import gStyle from '../../Theme/styles';

const Section = ({ title, RenderContent, style = {} }) => (
    <View style={[styles.container, style]} >
        <View style={{ alignItems: 'flex-start' }} >
            <Text style={[gStyle.h5, gStyle.primaryText, gStyle.bold]} >{title}</Text>
        </View>
        <View style={{ marginTop: 10 }} >
            <RenderContent />
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
})

export default Section;
