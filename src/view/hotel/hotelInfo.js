import React, { useState } from 'react';
import baseCss from '../../static/css/bese';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Image
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CSS = StyleSheet.create({
    pr: {
        height: '100%',
        position: 'relative'
    },
    pab: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
    },
    topCard: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden'
    },
    bg: {
        backgroundColor: '#999'
    },
    pr_30: {
        position: 'relative',
        top: -30
    },
    h100: {
        height: 100
    },
    mlr8: {
        marginLeft: 8,
        marginRight: 8
    },
    pr8: {
        paddingRight: 8
    },
    br1: {
        borderRightWidth: 1,
        borderRightColor: '#ccc'
    },
    fs14: {
        fontSize: 14
    },
    f1: {
        flex: 1
    },
    w80: {
        width: 80
    },
    w30: {
        width: 30
    },
    h60: {
        height: 60
    }
})

export default function HotelInfo ({ navigation, route }) {
    const [num, setFuNumber] = useState('1')
    return (
        <View style={CSS.pr}>
            {/* 背景banner */}
            <View style={ CSS.h100 }></View>
            <View style={ [CSS.topCard, CSS.pr_30, CSS.bg] }>
                <View style={[baseCss.mainBg, baseCss.pd3p, baseCss.pb10, baseCss.pt10]}>
                    <View style={[baseCss.df, baseCss.jcfs, baseCss.mt10 ]}>
                        <Text style={baseCss.fs16}>{route.params.date[0]}</Text>
                        <Text style={CSS.mlr8}>——</Text>
                        <Text style={baseCss.fs16}>{route.params.date[1]}</Text>
                    </View>
                    <View><Text style={baseCss.fs16}>{ route.params.data.title }</Text></View>
                    <View style={ [baseCss.df ] }>
                        {
                            route.params.data.tag.map(data => {
                                return (
                                    <Text style={ [baseCss.clearDefault, baseCss.fs12, CSS.br1, CSS.pr8 ]}>{data}</Text>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={[baseCss.mt10, baseCss.pd3p, baseCss.mainBg, baseCss.pt10]}>
                    <View style={[baseCss.pb10, baseCss.pt10, baseCss.mt10] }><Text style={ [baseCss.mr5, CSS.fs14 ] }>入住信息 ·<Text style={[baseCss.fs12]}>姓名与证件保持一致,每间只需填一人</Text></Text></View>
                    <View style={[baseCss.df, baseCss.asfe, baseCss.w100p, baseCss.pb10, baseCss.pt10]}>
                        <Text style={ CSS.w80 }>房间数</Text>
                        <TextInput
                            style={ [CSS.f1, baseCss.clearDefault] }
                            onChange={ (text) => { setFuNumber(text) }} 
                            value= {num}
                        />
                        <View style={[CSS.w30]}></View>
                    </View>
                    <View style={[baseCss.df, baseCss.asfe, baseCss.w100p, baseCss.pb10, baseCss.pt10]}>
                        <Text style={ CSS.w80 }>住客姓名</Text>
                        <TextInput
                            style={ [CSS.f1, baseCss.clearDefault] }
                            onChange={ (text) => { setFuNumber(text) }} 
                            value= {num}
                        />
                        <TouchableOpacity style={ CSS.w30 } onPress={ () => {}}>
                            <Image />
                        </TouchableOpacity>
                    </View>
                    <View style={[baseCss.df, baseCss.asfe, baseCss.w100p, baseCss.pb10, baseCss.pt10]}>
                        <Text style={ CSS.w80 }>联系方式</Text>
                        <TextInput
                            style={ [CSS.f1, baseCss.clearDefault] }
                            onChange={ (text) => { setFuNumber(text) }} 
                            value= {num}
                        />
                        <View style={[CSS.w30]}></View>
                    </View>
                    <View style={[baseCss.df, baseCss.asfe, baseCss.w100p, baseCss.pb10, baseCss.pt10]}>
                        <Text style={ CSS.w80 }>预计到店</Text>
                        <TextInput
                            style={ [CSS.f1, baseCss.clearDefault] }
                            onChange={ (text) => { setFuNumber(text) }} 
                            value= {num}
                        />
                        <View style={[CSS.w30]}></View>
                    </View>
                </View>
            </View>
            <View style={[CSS.pab, CSS.h60, baseCss.df, baseCss.pd3p]}>
                <Text>预计成功率: <Text>较高</Text></Text>
                <View style={ CSS.buttonBox }>
                    <Button title="去支付" onPress={ () => { navigation.navigate('') } }/>
                </View>
            </View>
        </View>
    )
}