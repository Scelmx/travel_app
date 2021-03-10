import React from 'react';
import { StyleSheet, View, FlatList, Button,  Text, TouchableHighlight, Image } from 'react-native';

const CSS = StyleSheet.create({
    body: {
        paddingRight: '2%',
        paddingLeft: '2%'
    },
    br1: { 
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
    },
    line: {
        height: 40,
        lineHeight: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pd10: {
        paddingLeft: 10,
        paddingRight: 10
    }
})

export default function Setting () {
    return (
        <View>
            <View style={ CSS.body }>
                <View style={{ borderRadius: 20, backgroundColor: '#fff' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#eee' }}>
                         <Text style={{ fontWeight: 'bold' }}>账户设置</Text>
                    </View> 
                    <FlatList 
                        data={[{ id: 1, name: '个人信息', desc: '头像，昵称'}, { id: 2, name: '账号安全', desc: '修改密码，绑定手机'}]}
                        renderItem={ ({item}) => {
                            return (
                                <TouchableHighlight onPress={ () => {  } }>
                                    <View style={ [CSS.line, CSS.pd10] }>
                                        <Text>{ item.name }</Text>
                                        <View>
                                            <Text>{ item.desc }</Text>
                                            <Image />
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )
                        } }
                        keyExtractor={ item => item.id }
                    >
                    </FlatList>            
                </View>
                <Button title="退出登录"/>
            </View>
        </View>
    )
}