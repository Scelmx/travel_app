import { transform } from '@babel/core'
import React from 'react'
import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import { create } from 'react-test-renderer'


const graphicCard = function(prop) {
    return <View style = { graphic_css.graphic_box }>
        <ImageBackground resizeMode = 'cover' style = { graphic_css.grap_bg } source = { prop.img_url } >
            <View style = { graphic_css.graphic_text_box } >
                <Text style = { graphic_css.graphic_text }>{ prop.text }</Text>
            </View>
        </ImageBackground>
    </View>
}
const graphic_css = StyleSheet.create({
    graphic_box: {
        height: '100%',
        width: '100%'
    },
    grap_bg: {
        height: '100%',
    },
    graphic_text_box: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    graphic_text: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#000'
    }
})
export default graphicCard