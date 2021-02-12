import React from 'react';
import {
  StyleSheet
} from 'react-native';

var baseCss = StyleSheet.create({
    iconSetting: {
        height: 50,
        width: 50
    },
    // tag: {
    //     height: 58,
    //     borderRadius: 30,
    //     backgroundColor: none,
    //     borderColor: '#ebebeb',
    //     borderWidth: 1
    // },
    tag1: {
        height: 30,
        borderRadius: 15,
        backgroundColor: '#cecece'
    },
    tag2: {
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ffffff'
    },
    card: {
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    card1: {
        borderRadius: 10
    },
    df: {
        display: 'flex'
    },
    dn: {
        display: 'none'
    },
    aic: {
        alignItems: 'center'
    },
    jcc: {
        justifyContent: 'center'
    }
    
})

module.exports = baseCss