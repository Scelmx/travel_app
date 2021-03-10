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
        elevation: 4
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    icon_btn: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ccc'
    },  
    icon: {
        height: 40, 
        width: 50
    },
    icon_text: {
        textAlign: 'center',
        marginTop: 5
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
        overflow: 'hidden',
        elevation: 2
    },
    big_title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    big_desc: {
        fontSize: 10,
        marginTop: 5,
        color: '#a4a4a4',
        width: 80
    },
    big_img: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        borderRadius: 25,
        overflow: 'hidden'
    },
    yx_img: {
        height: 66,
        width: 66,
    },
    menu_tab: {
        borderRadius: 20,
        backgroundColor: '#fff',
        display: 'flex', 
        justifyContent: 'space-between',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: 15
    }
})

module.exports = homeCss