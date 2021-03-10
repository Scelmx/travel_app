import React from 'react';
import { StyleSheet, View, FlatList, TextInput, TouchableNativeFeedback, Image } from 'react-native';

const CSS = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    pd3p: {
        paddingLeft: '3%',
        paddingRight: '3%'
    }
})

const delicacy = {
    title: '马坊湾66号江湖菜',
    address: '杨公桥地铁1b出口',
    score: 4.5,
    business_hours: '11:00-12:00',
}

export default function delicacyDetail () {
    return (
        <View>
            <View style={CSS.pd3p}>
                <View style={CSS.card}>
                    <View>{ delicacy.title }</View>
                    <View>地址: { delicacy.address }</View>
                    <View>人气: { delicacy.score }</View>
                    <View>营业时间: { delicacy.business_hours }</View>
                    <View>
                        <View>
                            <TouchableNativeFeedback>
                                <Image></Image>
                            </TouchableNativeFeedback>    
                        </View>
                        <View>
                            <Button>现在预定</Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}