import React, { useState } from 'react';
import {
    StyleSheet,
    View, 
    FlatList, 
    Button,  
    Text, 
    TouchableHighlight, 
    Image, 
    TouchableOpacity,
    TextInput
} from 'react-native';

const CSS = StyleSheet.create({
    body: {
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        backgroundColor: '#fff',
    },
    buttonBox: {
        width: '40%'
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

export default function ticketInfo ({navigation, route}) {
    const [phone, setPhone] = useState('')
    return (
        <View style={{ height: '100%', position: "relative" }}>
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
                <View style= { CSS.body }>
                    <View style={ CSS.card }>
                        <Text></Text>
                        <TouchableOpacity onPress={ () => { navigation.navigate('Info') } }>
                            <Text>+添加乘车人（成人、学生、儿童）</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ [CSS.card, CSS.df] }>
                        <Text>手机号码</Text>
                        <TextInput
                            onChangeText={text => setPhone(text)}
                            value={phone}
                        ></TextInput>
                    </View>
                </View>
            </View>
            <View style={ [CSS.bottomBar, CSS.df, CSS.body] }>
                <Text>预计成功率: <Text>较高</Text></Text>
                <View style={ CSS.buttonBox }>
                    <Button title="下一步" onPress={ () => {} }/>
                </View>
            </View>
        </View>
    )
}