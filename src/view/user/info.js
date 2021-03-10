import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    Button
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import baseCss from '../../static/css/bese';
import info from '../../../data/userinfo.json';

const CSS = StyleSheet.create({
    btn: {
        height: 40,
        borderRadius: 30,
        width: '100%',
        backgroundColor: 'rgba(110, 89, 98, .5)',
        marginBottom: 10,
        marginTop: 10
    },
    lh40: {
        lineHeight: 40
    },
    topBg: {
        height: 220
    },
    prF6p: {
        position: 'relative',
        top: '-16%'
    },
    pr: {
        position: 'relative'
    },
    ptd15: {
        paddingTop: 15,
        paddingBottom: 15
    },
    h100p: {
        height: '100%'
    }
})

export default function Info ({navigation}) {
    return (
        <View style={ [CSS.pr, CSS.h100p]}>
            <View style={CSS.topBg}>
                <LinearGradient colors={["#2A63BF","#57AFFF"]} style={{flex:1}}>

                </LinearGradient>
            </View>
            <View style={ [baseCss.pd3p, CSS.prF6p] }>
                <View style={ [baseCss.card, baseCss.pd3p, baseCss.mainBg, baseCss.mt15] }>
                    <TouchableWithoutFeedback onPress={ () => { navigation.navigate('AddInfo') } }>
                        <View style={CSS.btn}>
                            <Text style={[baseCss.tac, baseCss.w100p, CSS.lh40,baseCss.textMainColor]}>新增乘客</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    {
                            info.map((data, index) => {
                                return(
                                    <View style={ [CSS.ptd15, index!==info.length-1 ? baseCss.bb : ''] }>
                                        <TouchableWithoutFeedback onPress={ () => { navigation.navigate('AddInfo', { data: 111 }) } }>
                                            <Image/>
                                        </TouchableWithoutFeedback>
                                        
                                        <View>
                                            <Text style={baseCss.fs18}>{data.realName}</Text>
                                            <Text style={[baseCss.fs12, baseCss.textFuColor]}>二代身份证{data.IDcard}</Text>
                                        </View>
                                        <View>

                                        </View>
                                    </View>
                                )
                            })
                        }
                    
                </View>
            </View>
            <View style={ [baseCss.bottomBar, baseCss.df, baseCss.pd3p] }>
                <Button title="确认" onPress={ () => {  } }></Button>
            </View>
        </View>
    )
}