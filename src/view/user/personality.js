import React, { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, View, Text, Image, Switch  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import baseCss from '../../static/css/bese';

export default function Personality () {
    const config = ["行程", "发现"]
        
    const [isEnabled1, setEnabled1] = useState(false)
    const [isEnabled2, setEnabled2] = useState(false)

    const [history, setHistory] = useState(false)
    const [publish, setPublish] = useState(false)
    const [follow, setFollow] = useState(false)
    const [redPacket, setRedPacket] = useState(false)
    function Swit (state, setState) {
        return (
            <Switch  
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={state ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={
                    (status) => { 
                        if (status!== state) {
                            setState(status)
                        } 
                    }
                }
                value={state}
            />
        )
    }
    return (
        <View style={{ height: '100%',position: 'relative' }}>
            <View style={ [baseCss.pd3p, baseCss.mainBg] }>
                <View style={ [baseCss.pt10, baseCss.pb10 ] }>
                    <View>
                        <Text style={ [baseCss.fs18] }>栏目配置</Text>
                    </View>
                        { config.map((data, index) => {
                            return (
                                <View
                                    style= { [baseCss.df, baseCss.bb, baseCss.w100p, baseCss.pt10, baseCss.pb10 ] }
                                >
                                    <Text style={ [baseCss.fs16] }>{data}</Text>
                                    <Switch  
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={(index === 0 ? isEnabled1 : isEnabled2) ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={
                                            (status) => { 
                                                if (status!== (index === 0 ? isEnabled1 : isEnabled2)) {
                                                    index===0 ? setEnabled1(status) : setEnabled2(status)
                                                } 
                                            }
                                        }
                                        value={ index === 0 ? isEnabled1 : isEnabled2}
                                    />
                                </View>
                            )
                        }) }
                </View>
                
            </View>
            <View style={ [baseCss.mt10,baseCss.mainBg, baseCss.pd3p] }>
                <View style={[baseCss.pt10, baseCss.pb10 ]}>
                    <View>
                        <Text style={[baseCss.fs18]}>工具配置</Text>
                    </View>
                </View>
                <View>
                    <View
                        style= { [baseCss.df, baseCss.bb, baseCss.w100p, baseCss.pb10 ] }
                    >
                        <Text style={ [baseCss.fs16] }>历史</Text>
                        { Swit(history, setHistory) }
                    </View>
                    <View
                        style= { [baseCss.df, baseCss.bb, baseCss.w100p, baseCss.pt10, baseCss.pb10 ] }
                    >
                        <Text style={ [baseCss.fs16] }>我的发布</Text>
                        { Swit(publish, setPublish) }
                    </View>
                    <View
                        style= { [baseCss.df, baseCss.bb, baseCss.w100p, baseCss.pt10, baseCss.pb10 ] }
                    >
                        <Text style={ [baseCss.fs16] }>关注</Text>
                        { Swit(follow, setFollow) }
                    </View>
                    <View
                        style= { [baseCss.df, baseCss.bb, baseCss.w100p, baseCss.pt10, baseCss.pb10 ] }
                    >
                        <Text style={ [baseCss.fs16] }>红包卡券</Text>
                        { Swit(redPacket, setRedPacket) }
                    </View>
                    <View
                        style= { [baseCss.df, baseCss.bb, baseCss.w100p, baseCss.pt10, baseCss.pb10 ] }
                    >
                        <Text style={ [baseCss.fs16] }>订单记录</Text>
                        { Swit(redPacket, setRedPacket) }
                    </View>
                </View>
            </View>
            <View 
                style={[baseCss.pd3p,{
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#fff',
                    height: 60,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }]}
            >
                <Button title="确定" onPress={ () => {} }/>
            </View>
        </View>
    )
}