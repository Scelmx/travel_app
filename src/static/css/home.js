import React from 'react';
import {
  StyleSheet
} from 'react-native';

var homeCss = StyleSheet.create({
    home_page: {
        display: 'flex',
        backgroundColor: '#f2f2f2'
    },
    home_bg_box: {
        height: 200,
        overflow: 'hidden'
    },
    home_bg: {
        height: '90%',
        width: '100%'
    },
    top_bar: {
        paddingLeft: '4%',
        paddingRight: '4%',
        marginTop: 10,
    },
    search_box: {
        position: 'absolute',
        bottom: '-5%',
        left: '10%',
        width: '80%',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 2
    },
    search_input: {
        flex: 1,     
    },
    content: {
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    small_btn_list: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    big_btn_list: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    big_list_item: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 90,
        marginTop: '2%',
        width: '49%',
        paddingRight: '3%',
        paddingLeft: '3%',
        paddingTop: '2%',
        paddingBottom: '2%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    big_title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    big_desc: {
        color: '#a4a4a4',
    },
    big_img: {
        height: 66,
        width: 66,
        alignSelf: 'center',
        backgroundColor: '#000',
        borderRadius: 100,
        overflow: 'hidden'
    }
})

module.exports = homeCss