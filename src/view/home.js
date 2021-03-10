import React from 'react';
import { Image, ImageBackground, StatusBar, View, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, FlatList } from 'react-native';
import HomeCss from '../static/css/home.js'

class home extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {
            menu:[
                { title: '攻略', img: require('../static/icon/strategy.png'), routeName: 'Ticket' },
                { title: '旅游', img: require('../static/icon/scenic_spot.png'), routeName: 'Travel' },
                { title: '美食', img: require('../static/icon/delicacy.png'), routeName: 'Show' },
                { title: '住宿', img: require('../static/icon/stay.png'), routeName: 'Hotel' },
                { title: '景点·门票', img: require('../static/icon/ticket.png'), routeName: '' }
            ],
            choose: [
                { title: '周边游', desc: '洪崖洞、千厮门大桥、两江游', img: require('../static/images/zby.jpg'), routeName: '' },
                { title: '跟团游', desc: '洪崖洞、千厮门大桥、两江游', img: require('../static/images/gty.jpg'), routeName: '' },
                { title: '定制游', desc: '洪崖洞、千厮门大桥、两江游', img: require('../static/images/dzy.jpg'), routeName: '' },
                { title: '自由行', desc: '洪崖洞、千厮门大桥、两江游', img: require('../static/images/zyx.jpg'), routeName: '' }
            ],
            CardList: [
                { id: 1, title: '重庆旅游攻略', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, img: require('../static/images/rm1.jpg'), position: '重庆' },
                { id: 2, title: '川藏线上的美丽风景', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, img: require('../static/images/rm2.jpg'), position: '四川' },
                { id: 3, title: '青海茶卡盐湖', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, img: require('../static/images/dzy.jpg'), position: '青海' },
                { id: 4, title: '重庆旅游攻略', desc: '重庆美丽风景', user: { username: 'SCE林木夕' }, img: require('../static/images/zyx.jpg'), position: '重庆' },
            ] 
        }
    }
    jump (route) {
        this.props.navigation.push(route)
    }
    renderList = ({item}) => {
        return (
            <TouchableWithoutFeedback style={{elevation: 2}} onPress={()=> this.jump('FDetail')}>
                <View style={{ borderRadius: 16,  overflow: 'hidden', width: '48%', maxHeight: 180, marginBottom: 10, justifyContent: 'space-between' }}>
                        <View style={{ overflow: 'hidden', height: '70%' }} ><Image width="100%" resizeMode="contain"  source={ item.img }/></View> 
                        <View style={{ paddingLeft: 8, paddingRight: 8, }}>
                            <Text>{item.title}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image style={{ width: 25, height: 25, borderRadius: 25, marginRight: 5, }} resizeMode="cover" source={require('../static/images/me_head.jpg')}/>
                                    <Text style={{ fontSize: 12 }}>{item.user.username}</Text>
                                </View>
                                <View style={{ alignSelf: 'flex-end' }}>
                                    {/* <Image></Image> */}
                                    <Text style={{ fontSize: 12 }}>{item.position}</Text>
                                </View>
                            </View>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render() {
        return (
            <View style = { HomeCss.home_page }>
                <View style = { HomeCss.status_bar }>
                    <StatusBar backgroundColor = "#043e7f"/>
                </View>
                <View style = { HomeCss.home_bg_box }>
                    <ImageBackground resizeMode="cover" style = { HomeCss.home_bg } source = { require('../static/images/home_bg.png') }>
                        <View style = { HomeCss.top_bar }>
                            <View>
                                {/* <Image s></Image> */}
                                <Text style={{ color: '#fff', fontSize: 16 }}>重庆</Text>
                            </View>
                            <View></View>    
                        </View>
                        <View style = { HomeCss.search_box }>
                            <TextInput style = { HomeCss.search_input } placeholder="输入你想去的地方吧~"></TextInput>
                        </View>
                    </ImageBackground>
                    <View style = { HomeCss.opcity }></View>
                </View>
                <View style = { HomeCss.content }>
                    <View style = { HomeCss.small_btn_list }>
                        {
                            this.state.menu.map( data => {
                                return (
                                    <TouchableWithoutFeedback onPress={ () => { this.jump(data.routeName) } }>
                                        <View style={ HomeCss.icon_btn }>
                                            <Image style={ HomeCss.icon } resizeMode="contain" source={ data.img }/>
                                            <Text style={ HomeCss.icon_text }>{ data.title }</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })
                        }
                    </View>
                    <View style = { HomeCss.big_btn_list }>
                        {
                            this.state.choose.map(data => {
                                return (
                                    <TouchableOpacity onPress={ () => { this.jump('') } } style={ HomeCss.big_list_item }>
                                        <View>
                                            <Text style = { HomeCss.big_title } >{ data.title }</Text>
                                            <Text style = { HomeCss.big_desc }>{ data.desc }</Text>
                                        </View>
                                        <View style = { HomeCss.big_img }>
                                            <Image style = { HomeCss.yx_img } resizeMode="contain" source={ data.img }></Image>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
                <View style={{ backgroundColor: '#fff', borderRadius: 20, paddingTop: 10, marginTop: 15 }}>
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
                    <FlatList
                        data={ this.state.CardList }
                        renderItem={ this.renderList }
                        keyExtractor={ item => item.id }
                        numColumns={ 2 }
                        columnWrapperStyle = { HomeCss.menu_tab }
                    >
                    </FlatList>
                </View>
            </View>
        )
    }
}

export default home