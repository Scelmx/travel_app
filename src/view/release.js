import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableWithoutFeedback } from 'react-native'

const relCss = StyleSheet.create({
    content_box: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    searchInput: {
        width: '90%',
        height: 30,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#cfcfcf',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    searchIcon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    input: {
        flex: 1,
        fontSize: 14,
        padding: 0,
        margin: 0
    },  
    card: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 15,
    },
    titleBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        width: '60%'
    },
    title_time: {
        fontSize: 12,
        color: '#969696'
    },
    img_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    img: {
        width: 50,
        height: 50,
        marginRight: 5
    },
    img1: {
        width: 30,
        height: 30
    },
    userBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    user: {
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10
    }
})
const releaseList = [
    { id: 1, title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', release_time: '2020-09-18', content: '问此时的东丽小姐在干嘛，有没有想我', imgs: [require('../static/images/cq.jpg'), require('../static/images/cq1.jpg'), require('../static/images/cq2.jpg')], user: { user_head: require('../static/images/me_head.jpg'), username: 'scelmx' }, like_num: 40 }
]

function req () {
    console.log(111);
}

function renderRelease ({ item }) {
    return (
        <View style={relCss.card}>
            <View style={ relCss.titleBar }>
                <Text style={ relCss.title } numberOfLines={ 1 }>{ item.title }</Text>
                <Text style={ relCss.title_time }>{ item.release_time }</Text>
            </View>
            <View style={ relCss.content }><Text numberOfLines={ 3 }>{item.content}</Text></View>
            <View style={ relCss.img_box }>
                {
                    item.imgs.map(data => {
                        return (
                            <Image style={relCss.img} source={data}/>
                        )
                    })
                }
            </View>
            <View style={ relCss.userBox }>
                <View style={ relCss.userInfo }>
                    <View style={ relCss.user }>
                        <Image style={ relCss.img1 } source={require('../static/images/me_head.jpg')}/>
                    </View>
                    <Text>{ item.user.username }</Text>
                </View>
                <View>
                    <Image/>
                    <Text>{ item.like_num }</Text>
                </View>
            </View>
        </View>
    )
}

export default function Release () {
    return (
        <View>
            <View style={ relCss.content_box }>
                <View style={relCss.searchInput}>
                    <TouchableWithoutFeedback style={ relCss.searchIcon } onPress={ req }>
                        <Image style={ relCss.searchIcon } source={require('../static/icon/search.jpg')}/>
                    </TouchableWithoutFeedback>
                    <TextInput style={ relCss.input }/>
                </View>
                <FlatList
                    data={ releaseList }
                    renderItem={ renderRelease }
                    item={ item => item.id }
                >

                </FlatList>
            </View>
            
        </View>
    )
}