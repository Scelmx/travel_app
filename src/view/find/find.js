import React from 'react';
import { View, Text, FlatList, Image, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import http from '../../util/http';

let nav;

const CardList = [
    { id: 1, title: '重庆旅游攻略', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, position: '重庆' },
    { id: 2, title: '川藏线上的美丽风景', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, position: '四川' },
    { id: 3, title: '青海茶卡盐湖', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, position: '青海' },
    { id: 4, title: '重庆旅游攻略', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, position: '重庆' },
] 

// 页面跳转
function jump (routeName) {
    console.log(routeName)
    nav.push(routeName)
}
// shadowColor: '#e3e3e3', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.8, elevation: 10,
// 渲染发现列表
function renderList ({item}) {
    return (
        <TouchableNativeFeedback onPress={()=>jump('FDetail')}>
            <View style={{ borderRadius: 16,  overflow: 'hidden', width: '47%', maxHeight: 180, marginBottom: 10, justifyContent: 'space-between' }}>
                    <View style={{ overflow: 'hidden', height: '70%' }} ><Image width="100%" resizeMode="cover"  source={require('../../static/images/login_bg.png')}/></View> 
                    <View style={{ paddingLeft: 8, paddingRight: 8, }}>
                        <Text>{item.title}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Image style={{ width: 25, height: 25, borderRadius: 25, marginRight: 5, }} resizeMode="cover" source={require('../../static/images/me_head.jpg')}/>
                                <Text style={{ fontSize: 12 }}>{item.user.username}</Text>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }}>
                                {/* <Image></Image> */}
                                <Text style={{ fontSize: 12 }}>{item.position}</Text>
                            </View>
                        </View>
                    </View>
            </View>
        </TouchableNativeFeedback>
    )
}

// 顶部请求数据
function req (id) {
    http.get('/find', '?' + id).then( res => {
        renderList(res)
    })
}

export default function Find({navigation}) {
    nav = navigation
    return (
        <View>
            <View>
                <View style={{ backgroundColor: '#f68710', marginBottom: 10, paddingBottom: 10 }}>
                    <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }/>
                    <View style={{ width: '100%' }}>
                        <FlatList
                        data={ [{id:1, title: '推荐' }, { id: 2, title: '旅行'}, { id: 3, title: '美食' }, {id: 4, title: '住宿' }, { id: 5, title: '景点'}] }
                        renderItem = { ({item}) => {
                            return (<View style={{ paddingLeft: 5, paddingRight: 5 }}><Text onPress={()=>{ req(item.id) }}>{item.title}</Text></View>)
                        }}
                        keyExtractor={item => item.id}
                        horizontal={true}>
                        </FlatList>
                    </View>
                </View>
                <View style={{ width: '100%', paddingRight: 10, paddingLeft: 10, overflow: 'hidden' }}>
                  <FlatList
                    data = { CardList }
                    renderItem = { renderList }
                    keyExtractor = {  item => item.id }
                    numColumns = { 2 }
                    columnWrapperStyle = {{display: 'flex', justifyContent: 'space-between'}}
                  >
                  </FlatList>
                </View>
            </View>
            
            
        </View>
    )
}