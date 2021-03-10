import React from 'react';
import { StyleSheet, View, FlatList, Button,  Text, TouchableHighlight, Image } from 'react-native';
import { TabRouter } from 'react-navigation';
import hotelData from '../../../data/hotel'
import baseCss from '../../static/css/bese';

const CSS = StyleSheet.create({
    dateBtn: {
        marginTop: 10,
        marginBottom: 10,
        height: 40,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    w94p: {
        width: '94%',
        marginTop: 10,
        borderRadius: 5,
    },
    mb10: {
        marginBottom: 10
    },
    card: {
        // backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 10,
        width: '100%',
    },
    titleBar: {
        width: '100%',
        height: 60,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#fff',
        paddingTop: 8
    },
    titleText: {
        overflow: 'hidden',
        textAlign: 'center'
    },
    tal: {
        textAlign: 'left'
    },
    df: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    p2_5: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2
    },
    tagBg: {
        backgroundColor: '#ccc'
    },
    mt5: {
        marginTop: 5
    }
})

export default function TicketList ({navigation, route}) {
    const renderHotelList = ({item}) => {
        return (
            <TouchableHighlight onPress={ () => { navigation.push('HotelDetail', { date: route.params.date, data: item }) }}>
                <View style={ [CSS.card, baseCss.bb] }>
                    <View style={[{ width: 20 }]}>
                        <Image style={{ width: 20, height: 100 }} />
                    </View>
                    <View style={[baseCss.df, CSS.mt5, { flex: .8 }]}>
                        <View>
                            <View style={CSS.mt5}>
                                <Text style={ [CSS.titleText, CSS.tal, {  width: 180 }] }>{item.title}</Text>
                            </View>
                            <View style={[baseCss.df, CSS.mt5, {justifyContent: 'flex-start'}]}>
                                <Text style={ [CSS.p2_5, CSS.tagBg, { marginRight: 5}] }>{item.flag}</Text>
                                <Text>{item.score}</Text>
                            </View>
                            <View style={ CSS.mt5 }>
                                <Text style={{ width: 180 }} >位置{item.address}</Text>
                            </View>
                        </View>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <Text>￥{item.price}</Text>
                        </View>
                    </View>
                    
                </View>     
            </TouchableHighlight>
        )
    };
    return (
        <View>
            <View style={ CSS.dateBtn }>

            </View>
            
            <View style={ CSS.content }>
                <View style={ CSS.titleBar }><Text style={ CSS.titleText }>火车</Text><Text style={ CSS.titleText }>成都东-重庆西</Text></View>
                <View style={ CSS.w94p }>
                    <FlatList
                        data={hotelData}
                        renderItem={renderHotelList}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>               
               
            </View>
        </View>
    )
}