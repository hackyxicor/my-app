import React from 'react';
import { StyleSheet } from 'react-native';
import { View, TouchableOpacity, Text } from '../../UIComponents';
import { Ionicons } from '@expo/vector-icons';
import gStyles from '../../Theme/styles';

const ListItem = ({ label, icon, onPress = () => { } }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
    >
        {
            icon ?
                <View>
                    <Ionicons name="md-close" size={32} color={OnPrimary} />
                </View>
                : null
        }
        <Text style={[gStyles.h3, gStyles.light, gStyles.primaryText]} >{label}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        height: 55,
        flexDirection: 'row',
        padding: 15
    }
})

export default ListItem;