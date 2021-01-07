import React from 'react'
import { StatusBar, TextInput, FlatList, Text, View, Button, Image, ImageBackground } from 'react-native'
import baseCss from '../static/css/bese';

export default class order extends React.Component{
    constructor (prop) {
        super(prop),
        state = {
            orderOpt: ['全部', '待付款', '待出行', '处理中', '待评价']
        }
    }
    renderOrder () {
        return this.state.orderOpt.map(data => {
            return (<Text title={data}/>)
        })
    }
    card () {
        return (
            <View style = { baseCss.card }>
                <View>
                    <View>预订时间<View>2020-09-09</View></View>
                    <View>交易完成</View>
                </View>
                <View>
                    <View><Image></Image></View>
                    <View>
                        <View>亚龙湾xxx</View>
                        <View>出行时间</View>
                    </View>
                    <View>
                        <View>￥ <View>140</View></View>
                        <View>
                            <View>删除</View>
                            <View>查看详情</View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render () {
        return (
            <View>
                <View>
                    <View>
                        <View></View>
                        <TextInput></TextInput>
                    </View>
                    <View>
                        <FlatList 
                            data = { orderOpt }
                            renderItem={ renderOrder }
                            keyExtractor={item => item.id}>
                        </FlatList>
                    </View>
                </View>
                <View style = { orderCss.content }>

                </View>
            </View>
        )
    }
}