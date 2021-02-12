import React from 'react';
import { StatusBar, TextInput, FlatList, Text, View, Button, Image, ImageBackground } from 'react-native';
import baseCss from '../static/css/bese';
import iconSetting from '../static/images/setting.jpg';
import mineBg from '../static/images/mine_bg.jpg';
import mineHead from '../static/images/me_head.jpg';

export default class mine extends React.Component{
    constructor (prop) {
        super(prop),
        this.state = {
            orderOpt: [
                { id: 1, title: '待付款' },
                { id: 2, title: '待出行' },
                { id: 3, title: '处理中' },
                { id: 4, title: '待评价' },
                { id: 5, title: '待退款' }
            ],
            myOpt: [
                { id: 6, title: '收藏' },
                { id: 7, title: '历史' },
                { id: 8, title: '我的发布' },
                { id: 9, title: '关注' },
                { id: 10, title: '红包卡券' },
                { id: 11, title: '个性化' },
                { id: 12, title: '足迹记录' },
                { id: 13, title: '订单记录' }
            ]
        }
    }
    renderOrder = ({item}) => {
        return (
            <View>
                {/* <Image resizeMode="contain" source={item.icon}></Image> */}
                <Text style={{ textAlign: 'center' }}>{item.title}</Text>
            </View>
        )
    }
    render () {
        return (
            <View>
                <ImageBackground style={{ width: '100%', height: 300 }} source={mineBg}>
                {/* // 背景图 */}
                    <View style= {{ paddingLeft: 20, paddingRight: 20 }}>
                            <Image  resizeMode="contain" source={iconSetting} />
                            <View style={{ height: 230, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{ width: 50, height: 50,  borderRadius: 25, overflow: 'hidden' }}>
                                        <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={mineHead}/>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 20 }}>scelmx</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                            <View style={{ borderRadius: 20, width: 80 , overflow: 'hidden', marginRight: 5 }} >
                                                <Button height={ 20 } style={ baseCss.tag1 } title="我的权益"/>
                                            </View>
                                            <View style={{ borderRadius: 20, width: 50, overflow: 'hidden' }} >
                                                <Button style = { baseCss.tag2 } title="v7"/>
                                            </View>
                                        </View>
                                    </View>
                                    
                                </View>
                                <View style={{ alignSelf: 'flex-end', marginBottom: 10 }}><Text style={{ color: '#fff' }}>编辑个人资料></Text></View>
                            </View>
                            <View style = { baseCss.card }>
                            {/* // 订单卡片 */}
                            <View style={{ borderRadius: 20, height: 80, backgroundColor: '#fff' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#eee' }}>
                                    <Text style={{ fontWeight: 'bold' }}>我的订单</Text>
                                    <Text onPress={ () => {  } } style={{ color: '#868686' }}>查看全部订单></Text>
                                </View>
                                <FlatList
                                    style={{ width: '100%' }}
                                    data = { this.state.orderOpt }
                                    renderItem={ this.renderOrder }
                                    keyExtractor={item => item.id}
                                    numColumns={ 5 }
                                    columnWrapperStyle = {{display: 'flex', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}
                                >
                                </FlatList>
                            </View>
                        </View>
                        {/* // 会员卡片 */}
                        <View style = {{ overflow: 'hidden' }}>
                            <Image style = {{ width: '100%' }}  resizeMode="contain" source={require('../static/images/mine_banner.jpg')}></Image>
                        </View>
                        <View style = {{ borderRadius: 20, height: 160, backgroundColor: '#fff' }}>
                            {/* // 工具卡片 */}
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#eee' }}>
                                    <Text style={{ fontWeight: 'bold' }}>我的工具</Text>
                                    <Text onPress={ () => {  } } style={{ color: '#868686' }}>更多工具></Text>
                                </View>
                                <FlatList 
                                    data = { this.state.myOpt }
                                    renderItem={ this.renderOrder }
                                    keyExtractor={ item => item.id }
                                    numColumns={ 4 }
                                    columnWrapperStyle = {{display: 'flex', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}
                                >
                                </FlatList>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}