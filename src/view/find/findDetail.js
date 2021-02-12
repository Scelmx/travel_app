import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Image, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import baseCss from '../../static/css/bese';

import mineHead from '../../static/images/me_head.jpg';

export default function FindDetail() {
    return (
        <View style={{ height: '100%' }}>
            <ImageBackground style={{ width: '100%', height: 200, padding: 0, margin: 0, overflow: 'hidden', position: 'relative' }} resizeMode="contain" source={require('../../static/images/chongqing.png')}>
                <View style={{ position:'absolute', bottom: 20, paddingRight: 20, paddingLeft: 20, display: 'flex', flexDirection: 'row', alignItems: 'center' , justifyContent: 'space-between' }}>
                    <View style={{ width: '50%', display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View><Image style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} resizeMode="cover" source={mineHead}/></View>
                        <Text style={{ color: '#fff' }}>scelmx</Text>
                    </View>
                    <View style={{ width: '50%', display: 'flex', flexDirection: 'row-reverse' }}>
                        <View style={{ maxWidth: 60 }}>
                            <Button onPress={()=>{ req() }} title="关注+"/>
                        </View>
                    </View>
                    
                </View>
            </ImageBackground>
            <View style={{ paddingRight: 20, paddingLeft: 20, marginTop: 10, marginBottom: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Image></Image>
                    <Text>重庆洪崖洞</Text>
                </View>
                <Button color='#f67810' onPress={ () => {  } } title="点击查看" />
            </View>
            <View style={{ backgroundColor: '#fff', paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}>
                <Text style={{ textAlign: 'center' }}>
                    title
                </Text>
                <Text>
                    content
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                    <View style={{ width:100, borderRadius: 20, overflow: 'hidden', marginRight: 8}}>
                        <Button color="#fac387" onPress={ () => {  } } title="#重庆夜景"/>
                    </View>
                    <View style={{ width:100, borderRadius: 20, overflow: 'hidden' }}>
                        <Button color="#fac387" onPress={ () => {  } } title="#重庆夜景"/>
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text>2019-9-9</Text>
                </View>
            </View>
        </View>
    )
}