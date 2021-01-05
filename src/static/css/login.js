import React from 'react';
import {
  StyleSheet
} from 'react-native';

var LoginCss = StyleSheet.create({
    login_page: {
        minHeight: '100%',
        display: 'flex',
        position: 'relative',
        zIndex: -1
    },
    login_page_bg: {
        height: '100%',
    },
    login_bg_pic: {
        height: '100%',
        width: '100%'
    },
    banner: {
        height: '100%',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
        minWidth: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        color: '#fff',
    },
    title_box: {

    },
    tab: {
        // marginTop: '50%',
        display: 'flex', 
    },
    hidden: {
        display: 'none'
    },  
    user_form: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    phone: {
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        lineHeight: 40,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    login: {
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(207, 118, 23, .6)',
        textAlign: "center",
        lineHeight: 40,
        color: '#fff'
    },
    transfer: {
        height: 40,
        lineHeight: 40,
        marginTop: 20,
        borderRadius: 20,
        textAlign: 'center',
        color: '#fff'
    }
});
    
module.exports = LoginCss;