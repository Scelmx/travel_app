import React, { useState } from 'react';
import baseCss from '../../static/css/bese';
import showData from '../../../data/show';
import { 
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const CSS = StyleSheet.create({
    pr_15: {
        position: 'relative',
        top: -15
    },
    topCard: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    tab: {
        height: 52
    },
    TabControl: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TabControlItem: {
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h50: {
        height: 50
    }
})

export default function Show () {
    const [transfer, setTransfer] = useState('YanChu');
    const [list, setList] = useState();

    function TabChooseToggleFun (flag) {
        if (flag !== transfer) {
            if (flag === 'YaChu') {
                setList(showData.show1)
            } else {
                setList(showData.show2)
            }
            setTransfer(flag)
        }
    };
    function renderList ({item}) {
        if (transfer === 'YanChu') {
            return (
                <TouchableOpacity onPress={ () => { navigation.push('HotelDetail', { date: route.params.date, data: item }) }}>
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
                                    <Text style={ [CSS.p2_5, CSS.tagBg, { marginRight: 5}] }>{item.type}</Text>
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
                </TouchableOpacity>
            )
        } else {
            return (
                <View></View>
            )
        } 
    }
    return (
        <View>
            <View style={ CSS.h50 }>

            </View>
            <View style={ [CSS.pr_15, CSS.topCard] }>
                <View style={ CSS.tab }>
                    <View style={CSS.TabControl}>
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('YanChu')}>
                            <Text style={{
                                minWidth: 80,
                                textAlign: 'center', 
                                padding: 5, 
                                paddingLeft: 10, 
                                paddingRight: 10, 
                                borderRadius: 20, 
                                backgroundColor: transfer === 'YanChu' ? '#3399ff' : 'transparent', 
                                color: transfer === 'YanChu' ? '#fff' : '#000'}}>
                                演出
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('TeSe')}>
                            <Text style={{
                                minWidth: 80,
                                textAlign: 'center',
                                padding: 5,
                                paddingLeft: 10, 
                                paddingRight: 10, 
                                borderRadius: 20, 
                                backgroundColor: transfer === 'TeSe' ? '#3399ff' : 'transparent', 
                                color: transfer === 'TeSe' ? '#fff' : '#000'}}>
                                当地特色
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={list}
                        renderItem={(item) => {renderList(item)}}
                        keyExtractor={item = item.id}
                    >     
                    </FlatList>
                </View>
            </View>
        </View>
    )
}