import React from 'react'
import { StatusBar, TextInput, FlatList, Text, View } from 'react-native'

export default class search extends React.Component{
    constructor (prop) {
        super(prop)
    }
    srarchTag () {
        return (<View></View>)
    }
    recommendTag () {
        return (<View></View>)
    }
    render () {
        return (
            <View>
                <View>
                    <View></View>
                    <TextInput/>
                    <View>搜索</View>
                </View>
                <View>
                    <View><View>历史搜索</View><View>删除</View></View>
                    <View>
                        { srarchTag() }
                    </View>
                </View>
                <View>
                    <View>搜索推荐</View>
                    <View>
                        { recommendTag() }
                    </View>
                </View>
            </View>
        )
    }
}