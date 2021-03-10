import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, TextInput, Image } from 'react-native';

const CSS = StyleSheet.create({
    searchInput: {
        width: '90%',
        height: 30,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#cfcfcf',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    radius: {
        borderRadius: 15,
    },
    searchIcon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    input: {
        flex: 1,
        fontSize: 14,
        padding: 0,
        margin: 0
    },
})

export default function SearchInput ({ isRadius, color, func }) {
    return (
        <View style={isRadius ? [CSS.searchInput, CSS.radius, color] : [CSS.searchInput, color] }>
            <TouchableWithoutFeedback style={ CSS.searchIcon } onPress={ func }>
                <Image style={ CSS.searchIcon } source={require('../static/icon/search.jpg')}/>
            </TouchableWithoutFeedback>
            <TextInput style={ CSS.input }/>
            <TouchableWithoutFeedback style={ CSS.searchIcon } onPress={ func }>
                <Image style={ CSS.searchIcon } source={require('../static/icon/search.jpg')}/>
            </TouchableWithoutFeedback>
        </View>
    )
}