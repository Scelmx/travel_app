import React from 'react'
import baseCss from '../static/css/bese';
import { StatusBar, TextInput, FlatList, Text, View, Button, Image, ImageBackground } from 'react-native'

export default class me extends React.Component{
    constructor (prop) {
        super(prop),
        state = {
            orderOpt: ['待付款', '待出行', '处理中', '待评价', '待退款']
        }
    }
    renderOrder () {
        this.orderOpt.map(data => {
            return (<Text title={data.title} />)
        })
    }
    render () {
        return (
            <View style = { me-page }>
                // 背景图
                <View>
                    <ImageBackground source="">
                        <View style = { baseCss.iconSetting }></View>
                        <View>
                            <Image> </Image>
                            <View>
                                <View>scelmx</View>
                                <View><span style={ baseCss.tag1 }></span><span style = { baseCss.tag2 }></span></View>
                            </View>
                            <View>编辑个人资料</View>
                        </View>
                    </ImageBackground>
                </View>
                <View style = { baseCss.card }>
                    // 订单卡片
                    <View>
                        <View>我的订单</View>
                        <View>查看全部订单</View>
                    </View>
                    <View>
                        <FlatList 
                            data = { orderOpt }
                            renderItem={ renderOrder }
                            keyExtractor={item => item.id}>
                        </FlatList>
                    </View>
                </View>
                // 会员卡片
                <View style = { baseCss.card1 } ></View>
                <View style = { baseCss.card }>
                    // 工具卡片
                    <View>
                        <View>我的工具</View>
                        <View>更多工具</View>
                    </View>
                    <View>
                        <FlatList 
                            data = { orderOpt }
                            renderItem={ renderOrder }
                            keyExtractor={item => item.id}>
                        </FlatList>
                    </View>
                </View>
            </View>
        )
    }
}