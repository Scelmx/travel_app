import React from 'react';
import { StyleSheet, View, FlatList, Button,  Text, TouchableHighlight, Image } from 'react-native';
import ticketData from '../../../data/ticket'

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
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
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
        width: '100%',
        textAlign: 'center'
    },
    df: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default function TicketList ({navigation}) {
    const renderTicketList = ({item}) => {
        console.log(item)
        return (
            <TouchableHighlight style={ CSS.mb10 } onPress={ () => { navigation.push('TicketDetail', { data: item }) }}>
                <View style={ CSS.card }>
                    <View>
                        <Text>{item.startTime}</Text>
                        <Text>{item.start}</Text>
                    </View>
                    <View>
                        <Text style={ CSS.titleText }>{item.takeUpTime}</Text>
                        <View></View>
                        <View style={ CSS.df }>
                            <Text>{item.trainNumber}</Text>
                            <Image></Image>
                            <Text>{item.trainName}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>{item.endTime}</Text>
                        <Text>{item.end}</Text>
                    </View>
                    <View>
                        <Text>￥{item.price}</Text>
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
                        data={ticketData}
                        renderItem={renderTicketList}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>               
               
            </View>
        </View>
    )
}