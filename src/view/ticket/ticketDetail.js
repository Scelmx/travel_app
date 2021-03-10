import React from 'react';
import { StyleSheet, View, FlatList, Button,  Text, TouchableHighlight, Image } from 'react-native';

const CSS = StyleSheet.create({
    body: {
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    bg: {
        backgroundColor: '#123123'
    },
    df: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    card: {
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    bt: {
        borderTopWidth: 1,
        borderTopColor: '#ccc'
    },
    ptb15: {
        paddingTop: 15,
        paddingBottom: 15
    },
    w60: {
        width: 60
    },
    w100: {
        width: 100
    },
    pd15: {
        padding: 15,
        paddingTop: 0,
        paddingBottom: 0
    },
    w92p: {
        paddingLeft: '6%',
        paddingRight: '6%'
    },  
    mainColor: {
        color: 'red'
    },
    h3: {
        fontSize: 30,
        color: '#fff'
    },
    fs12: {
        fontSize: 12
    },
    mtc: {
        color: '#fff'
    },
    mt5: {
        marginTop: 2
    },
    ptb30: {
        paddingBottom: 40,
        paddingTop: 30
    },
    tac: {
        textAlign: 'center'
    },
    mt20: {
        marginTop: 20
    }
})

export default function TicketDetail ({navigation, route}) {
    return (
        <View>
            <View>
                <View style={ [CSS.df, CSS.w92p, CSS.ptb30, CSS.bg] }>
                    <View>
                        <Text style={ [CSS.fs12, CSS.mtc] }>{ route.params.data.startDate }</Text>
                        <Text style={ CSS.h3 }>{route.params.data.startTime}</Text>
                        <Text style={ [CSS.mtc, CSS.mt5] }>{route.params.data.start}</Text>
                    </View>
                    <View>
                        <Text style={ [CSS.tac, CSS.mtc] }>{route.params.data.takeUpTime}</Text>
                        <View></View>
                        <View style={ CSS.df }>
                            <Text style={ CSS.mtc }>{route.params.data.trainNumber}</Text>
                            <Image></Image>
                            <Text style={ CSS.mtc }>{route.params.data.trainName}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={ [CSS.fs12, CSS.mtc] }>{ route.params.data.startDate }</Text>
                        <Text style={ CSS.h3 }>{route.params.data.endTime}</Text>
                        <Text style={ [CSS.mtc, CSS.mt5] }>{route.params.data.end}</Text>
                    </View>
                </View>
                <View style={ CSS.body }>
                    <View style={ [CSS.card, CSS.pd15, CSS.mt20] }>
                        { 
                            route.params.data.orderSeat.map((item, index) => {
                                return (
                                    <View style={ [CSS.df, CSS.ptb15,index != 0 ? CSS.bt : '']}>
                                        <View style={ CSS.w60 }><Text>{item.title}</Text></View>
                                        <Text style={ [CSS.w100, CSS.mainColor] }>￥{ item.price }</Text>
                                        <View><Button title="预约抢票" onPress={ () => { navigation.push('ticketInfo',{ data: route.params.data  }) }}/></View>
                                    </View>
                                )
                            })    
                        }
                    </View>
                </View>
                
            </View>
           
        </View>
    )
}