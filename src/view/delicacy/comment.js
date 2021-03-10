import React from 'react';
import { StyleSheet, View, FlatList, TextInput } from 'react-native';
import Tag from '../../component/tag';

const CSS = StyleSheet.create({
    score: {
        display: flex,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    ml15: {
        marginLeft: 15
    }
})

export default function comment () {
    return (
        <View>
            <FlatList
                data={[{id: 1, title: "口味", score: 4}]}
                renderItem={(item)=>{
                    <View style={ CSS.score }>
                        <View style={ CSS.ml15 }>{ item.title }</View>
                        <View></View>
                    </View>
                }}
                keyExtractor={ item => item.id }
            >
            </FlatList>
            <TextInput></TextInput>
            <Tag color="#fff"></Tag>
        </View>
    )
}