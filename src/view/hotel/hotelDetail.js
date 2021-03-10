import React from 'react'
import baseCss from '../../static/css/bese';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableHighlight,
    Image,
    TouchableOpacity
} from 'react-native';

const CSS = StyleSheet.create({
    pr_62: {
        position: 'relative',
        top: -62
    },
    tagBg: {
        backgroundColor: '#ccc'
    },
    p2_5: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2
    },
    ptb10: {
        paddingTop: 10,
        paddingBottom: 10
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
    hw30: {
        height: 30,
        width: 30
    }
})

export default function HotelDetail ({navigation, route}) {
    const renderHotelList = ({item}) => {
        return (
            <TouchableHighlight onPress={ () => { navigation.push('HotelDetail', { data: item }) }}>
                <View style={ [CSS.card, baseCss.bb] }>
                    <View style={[{ width: 20 }]}>
                        <Image source={ item.images[0] } style={{ width: 20, height: 100 }} />
                    </View>
                    <View style={[baseCss.df, baseCss.mt5, { flex: .8, alignItems: "flex-start" }]}>
                        <View style={{  width: 155 }}>
                            <View style={baseCss.mt5}>
                                <Text style={ [CSS.titleText, CSS.tal, baseCss.fs16, {  width: 155 }] }>{item.title}</Text>
                            </View>
                            <View style={[baseCss.df, baseCss.mt5, {justifyContent: 'flex-start', width: 155, flexWrap: 'wrap' }]}>
                            {
                                item.tag.map(data => {
                                    return (
                                        <Text style={ [baseCss.fs12, baseCss.mr5, baseCss.textFuColor] }>{data}</Text>
                                    )
                                })
                            }
                            </View>
                        </View>
                        <View style={[baseCss.df, { alignSelf: 'flex-end', }]}>
                            <Text style={ baseCss.mr5 }>￥{item.price}</Text>
                            <TouchableOpacity style={ [CSS.hw30, CSS.tagBg, baseCss.df, baseCss.jcc] } onPress={ () => {navigation.navigate('HotelInfo', { date: route.params.date, data: item })}}>
                                <Text style={ baseCss.tac }>
                                    订
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>     
            </TouchableHighlight>
        )
    };
    return (
        <View style={ [baseCss.h100p] }>
            {/* 背景图 */}
            <View style={ [baseCss.w100p, baseCss.h220, CSS.tagBg] }>
        
            </View>
            <View style={ [baseCss.w100p, CSS.pr_62, baseCss.pd3p] }>
                <View style={ [baseCss.pd3p, CSS.ptb10, baseCss.card, baseCss.mainBg] }>
                    <View style={baseCss.bb}>
                        <View style={ [baseCss.df, baseCss.jcfs] }>
                            <Text style={[baseCss.fs20, baseCss.mr5]}>
                                { route.params.data.title }
                                <Text style={[CSS.p2_5, CSS.tagBg, baseCss.fs12]}>{ route.params.data.flag }</Text>
                            </Text>
                        </View>
                        <View style={ [baseCss.df, baseCss.jcfs, baseCss.mt5, baseCss.mb10] }>
                            {
                                route.params.data.tag.map(data => {
                                    return (
                                        <Text style={ [baseCss.fs12, baseCss.mr5, baseCss.textFuColor] }>{data}</Text>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View style={baseCss.bb}>
                        <View style={ [baseCss.df, baseCss.jcfs, baseCss.mt10, baseCss.mb10] }><Text>评分 <Text style={[baseCss.fs18, baseCss.bgDefaultColor, baseCss.textMainColor, CSS.p2_5]}>{ route.params.data.score }</Text></Text></View>
                    </View>
                    <View>
                        <View style={ [baseCss.df, baseCss.jcfs, baseCss.mt10, baseCss.mb5] }><Text>地址 { route.params.data.address }</Text></View>
                    </View>
                </View>
                <View style={ [baseCss.pd3p] }>
                    <View>
                        <FlatList
                            data={route.params.data.all}
                            renderItem={renderHotelList}
                            keyExtractor={item => item.id}
                        >
                        </FlatList>
                    </View>       
                </View>
                
            </View>
        </View>
    )
}