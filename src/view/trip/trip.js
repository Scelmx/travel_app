import React from 'react'
import { View, Text, Button, ImageBackground, TouchableNativeFeedback } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { jump } from '../../util/http'

const tripList = [
    { id: 1, trip_img: require('../../static/images/trip1.jpg'), title: '我爱你' },
    { id: 2, trip_img: require('../../static/images/trip1.jpg'), title: '东丽' },
    { id: 3, trip_img: require('../../static/images/trip1.jpg'), title: '东丽爱你，笔芯' }
]

export default class trip extends React.Component{
    constructor (prop) {
        super(prop)
    }
    render () {
        return (
            <View style={{ height: '100%', backgroundColor: '#f6f8f8' }}>
                <View style={{ backgroundColor: '#f68710', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>行程</Text>
                </View>
                <View style={{ marginTop: 10, marginBottom: 10, borderRadius: 20, backgroundColor: '#fff', height: 160, display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center' }}>
                    <Text>主人，您还没有添加任何行程</Text>
                    <View style={{ fontSize: 30, width: '50%', marginTop: 20, borderRadius: 10, overflow: 'hidden' }}>
                        <Button color="#f69127" title="添加行程"/>
                    </View>
                </View>
                <View style={{ width: '100%', marginTop: 10, marginBottom: 10, borderRadius: 20, backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
                    <View style={{ height: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20, alignSelf: 'flex-start', marginBottom: 10 }}>
                        <View style={{ width: 6, backgroundColor: '#f69229', height: 20, marginRight: 5 }}></View>
                        <Text style={{ fontSize: 18 }}>精选行程</Text>
                    </View>
                    <FlatList
                        data={ tripList }
                        renderItem= { ({item}) => {
                            return (
                                <TouchableNativeFeedback onPress={ () => { jump(this.props.navigation, 'TripDetail') }}>
                                    <ImageBackground style={{ height: 130, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} resizeMode="contain" source={require('../../static/images/trip1.jpg')}>
                                        <View style={{ backgroundColor: 'rgba(8, 8, 8, .6)', width: '100%', height: '40%', }}>
                                            <Text style={{ color: '#fff', fontSize: 16, paddingRight: 5, paddingLeft: 5 }}>{item.title}</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableNativeFeedback>
                            )
                        } }
                        keyExtractor={ item=>item.id }
                        style={{ width: '100%' }}
                    >
                    </FlatList>
                </View>
            </View>
        )
    }
}