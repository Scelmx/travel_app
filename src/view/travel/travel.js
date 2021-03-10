import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, ImageBackground, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const traCss = StyleSheet.create({
    banner: {
        backgroundColor: '#fff'
    },  
    banner_item: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    banner_text_bg: {
        height: '40%',
        width: '100%',
        backgroundColor: 'rgba(8, 8, 8, .4)',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    desc: {
        color: '#fff',
        fontSize: 14
    },
    desc_tag: {
        color: '#f68710',
        fontSize: 16,
        marginLeft: 8
    },  
    bg: {
        height: '24%',
        marginBottom: 10
    },
    mune_box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon_box: {
        borderRadius: 20,
        width: 40,
        height: 40,
        overflow: 'hidden',
        marginBottom: 6
    },
    icon: {
        width: 40,
        height: 40
    },  
    mune_item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '4%',
        paddingRight: '4%',
        marginBottom: 15
    },
    travel_list_item: {

    },
    travel_list_item_img: {
        height: 120,
        width: 120
    }
})
const title = "青海湖+茶卡盐湖+德令哈+敦煌莫高窟+鸣 沙山月牙泉+张掖七彩丹1231231"
const mune = [
    { title: '一日游', img: require('../../static/icon/yry.jpg') },
    { title: '周边游', img: require('../../static/icon/yry.jpg') },
    { title: '跟团游', img: require('../../static/icon/yry.jpg') },
    { title: '定制游', img: require('../../static/icon/yry.jpg') },
    { title: '自由行', img: require('../../static/icon/yry.jpg') },
]

const travelList = [
    { id: 1, title: '三亚游', img: require('../../static/images/sy.jpg'), day: '五天四夜', tag: '海景房(含早)', price: 1870 }
]

function renderTravelList ({ item }) {
    return (
        <View style={ traCss.travel_list_item }>
            <Image style={ traCss.travel_list_item_img } resizeMode="cover" source={ item.img }/>
            <View>
                <Text>{ item.title }</Text>
                {/* <Tag color/> */}
            </View>
        </View>
    )
}

export default function Travel () {
    return (
        <View style={{ height: '100%' }}>
            <View style={ traCss.bg }>
                <Swiper height={ 200 } style={ traCss.banner } autoplay={ true }>
                    <ImageBackground style={ traCss.banner_item } source={require('../../static/images/sy.jpg')}>
                        <View style={ traCss.banner_text_bg }>
                            <Text style={ traCss.desc }><Text style={ traCss.desc_tag }>双飞9日</Text> {title ? (title.length > 32 ? title.substr(0, 32) + "..." : title) : ""}</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text>222</Text>
                    </View>
                </Swiper>
            </View>
            <View style={ traCss.mune_box }>
            {
                mune.map( data => {
                    return (
                        <View style={ traCss.mune_item }>
                            <View style={ traCss.icon_box }>
                                <Image style={ traCss.icon } resizeMode="contain" source={ data.img }/>
                            </View>
                            <Text>{ data.title }</Text>
                        </View>
                    )
                })
            }
            </View>
            <View style={{ backgroundColor: '#fff', borderRadius: 20, paddingTop: 10, marginTop: 15, paddingRight: '4%', paddingLeft: '4%' }}>
                <View style={{ marginBottom: 10 }}>
                    <FlatList
                        data={[{ id: 1, title: '热门' }, { id: 2, title: '洪崖洞' }, { id: 3, title: '武隆仙女山' }]}
                        renderItem={ ({ item }) => {
                            return (
                                <Text style={{ paddingLeft: 15 }}>{item.title}</Text>
                            )
                        } }
                        keyExtractor={ item => item.id }
                        horizontal={ true }
                    >
                    </FlatList>
                </View>
                <FlatList
                    data={ travelList }
                    renderItem={ renderTravelList }
                    keyExtractor={ item => item.id }
                >
                </FlatList>
            </View>
        </View>
    )
} 