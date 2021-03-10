import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const CSS = StyleSheet.create({
    topBg: {
        height: 220,
    },
    pd3p: {
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    prF6p: {
        position: 'relative',
        top: '-16%'
    },
    card: {
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    df: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bb: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    ptb15: {
        paddingTop: 5,
        paddingBottom: 5
    }
})

export default function AddInfo () {
    const [realName, setRealName] = useState('')
    const [IDcard, setIDcard] = useState('')
    const [phone, setPhone] = useState('')
    return (
        <View>
            <View style={CSS.topBg}>
                <LinearGradient colors={["#2A63BF","#57AFFF"]} style={{flex:1}}>

                </LinearGradient>
            </View>
            <View style={ [CSS.pd3p, CSS.prF6p]}>
                <View style={ CSS.card }>
                    <View style={ [CSS.df, CSS.bb, CSS.ptb15] }>
                        <Text>乘客类型</Text>
                    </View>
                    <View style={ [CSS.df, CSS.bb, CSS.ptb15] }>
                        <Text>姓名</Text>
                        <TextInput 
                            onChange={ (text) =>  setRealName(text)}
                            value={ realName }
                        ></TextInput>
                    </View>
                    <View style={ [CSS.df, CSS.bb, CSS.ptb15] }>
                        <Text>身份证</Text>
                        <TextInput 
                            onChange={ (text) =>  setIDcard(text)}
                            value={ IDcard }
                        ></TextInput>
                    </View>
                    <View style={ [CSS.df, CSS.bb, CSS.ptb15] }>
                        <Text>手机号</Text>
                        <TextInput 
                            onChange={ (text) =>  setPhone(text)}
                            value={ phone }
                        ></TextInput>
                    </View>
                    <View>
                        <Button title="确定" onPress={ () => {  } }/>
                    </View>
                </View>
            </View>
            
        </View>
    )
}