import React from 'react';
import { StyleSheet } from 'react-native';
import { Tag, View, FlatList } from '../../UIComponents';

const HotelTags = ({ tags, newLine = false, containerStyle }) => (
    <View style={[styles.tagsContainer, containerStyle]} >
        <FlatList
            horizontal={!newLine}
            data={tags}
            renderItem={({ item }) => <Tag label={item} />}
        />
    </View>
)

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        height: 45
    },
})

export default HotelTags;
