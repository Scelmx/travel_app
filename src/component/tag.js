import React from 'react';
import { StyleSheet, Text } from 'react-native'

const CSS = StyleSheet.create({
    box: {
        borderRadius: 20,
        height: 24,
        borderWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 8,
        // borderColor: '#f68710'
    }
})

export default function Tag ({ color }) {
    return (
        <TouchableOpacity style={ [CSS.box,{ borderRadius: color }] }>
            <Text style={{ height: 20, textAlignVertical: 'center', color: color }}>删除</Text>
        </TouchableOpacity>
    )
}