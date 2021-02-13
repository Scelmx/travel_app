import React from 'react'
import { StatusBar, TextInput, FlatList, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native'
import baseCss from '../static/css/bese';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default class order extends React.Component{
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
            all_order: [
                { time: '2019-09-01', status: '交易完成', img: require('../static/images/order1.jpg'), title: '亚龙湾热带天堂森林公园', travel_time: '2020-1-1', money: 140 },
                { time: '2019-09-01', status: '交易完成', img: require('../static/images/order1.jpg'), title: '亚龙湾热带天堂森林公园', travel_time: '2020-1-1', money: 140 }
            ]
        }
    }
    renderOrder ({ item }) {
        return (<View style={{ paddingRight: 8, paddingLeft: 8 }}><Text>{item.title}</Text></View>)
    }
    render () {
        return (
            <View>
                <View>
                    <View style={{ backgroundColor: '#f68710', marginBottom: 10, paddingBottom: 10 }}>
                        <Input
                        placeholder='INPUT WITH ICON'
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='black'
                            />
                        }/>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 30, paddingLeft: 12, paddingRight: 20 }}>
                            <FlatList
                                data = { this.state.orderOpt }
                                renderItem={ this.renderOrder }
                                keyExtractor={ item => item.id }
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                            </FlatList>
                            <View style={{ paddingLeft: 10, borderLeftColor: '#fff', borderLeftWidth: 1 }}>
                                <Text style={{ color: '#fff' }} onPress={ () => {} }>筛选</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
                
                <View style={{ paddingRight: 20, paddingLeft: 20 }}>
                    {
                        this.state.all_order.map( data => {
                            return (
                                <View style={{ height: 160, backgroundColor: '#fff',marginBottom: 10, borderRadius: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                            <Text style={{ marginRight: 10, color: '#868686' }}>预定时间</Text>
                                            <Text style={{ color: '#868686' }}>{data.time}</Text>
                                        </View>
                                        <Text style={{ color: '#f68710', fontSize: 16 }}>{data.status}</Text>
                                    </View>
                                    <View style={{ marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <Image style={{ height: 70, width: 70, marginRight: 10 }} resizeMode="contain" source={ data.img } />
                                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 2, paddingTop: 2 }}>
                                            <Text style={{ fontSize: 16 }}>{ data.title }</Text>
                                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                                <Text style={{ marginRight: 10, color: '#868686' }}>预定时间</Text>
                                                <Text style={{ color: '#868686' }}>{ data.travel_time }</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ color: '#f68710', fontSize: 16, fontWeight: 'bold' }}>￥{data.money}</Text>
                                        <View style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ borderRadius: 20, height: 24, borderWidth: 2, paddingLeft: 10, paddingRight: 10, marginRight: 8,  borderColor: '#f68710' }}>
                                                <Text style={{ height: 20, textAlignVertical: 'center', color: '#f68710' }}>删除</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ borderRadius: 20, height: 24, borderWidth: 2, paddingLeft: 10, paddingRight: 10, borderColor: '#f68710' }}>
                                                <Text style={{ height: 20, textAlignVertical: 'center', color: '#f68710' }}>查看详情</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View>
                    <Text style={{ textAlign: 'center', marginTop: 20, color: '#868686', fontSize: 16 }}>暂无更多订单</Text>
                </View>
            </View>
        )
    }
}