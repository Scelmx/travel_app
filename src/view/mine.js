import React from 'react';
import { 
    StyleSheet,
    StatusBar, 
    TextInput, 
    FlatList, 
    Text, 
    View, 
    Button, 
    Image, 
    ImageBackground, 
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import baseCss from '../static/css/bese';
import iconSetting from '../static/images/setting.jpg';
import mineBg from '../static/images/mine_bg.jpg';
import mineHead from '../static/images/me_head.jpg';
import { log } from 'react-native-reanimated';

const CSS = StyleSheet.create({
    optItem: { 
        width: 80, 
        height: 55, 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 5 
    },
    pr_30: {
        position: 'relative',
        top: -30
    }
})

export default class mine extends React.Component{
    constructor (prop) {
        super(prop),
        this.state = {
            orderOpt: [
                { id: 1, title: '待付款', img: require('../static/icon/to_be_paid.jpg'), routeName: 'Order' },
                { id: 2, title: '待出行', img: require('../static/icon/waiting_to_travel.jpg'), routeName: 'Order' },
                { id: 3, title: '处理中', img: require('../static/icon/process.jpg'), routeName: 'Order' },
                { id: 4, title: '待评价', img: require('../static/icon/assess.jpg'), routeName: 'Order' },
                { id: 5, title: '待退款', img: require('../static/icon/refund.jpg'), routeName: 'Order' }
            ],
            myOpt: [
                { id: 6, title: '收藏', img: require('../static/icon/collection.jpg'), routeName: '' },
                { id: 7, title: '历史', img: require('../static/icon/history.jpg'), routeName: '' },
                { id: 8, title: '我的发布', img: require('../static/icon/release.jpg'), routeName: 'Release' },
                { id: 9, title: '关注', img: require('../static/icon/release.jpg'), routeName: '' },
                { id: 10, title: '红包卡券', img: require('../static/icon/red_packet.jpg'), routeName: '' },
                { id: 11, title: '个性化', img: require('../static/icon/release.jpg'), routeName: 'Personality' },
                { id: 12, title: '足迹记录', img: require('../static/icon/footprint.jpg'),routeName: '' },
                { id: 13, title: '订单记录', img: require('../static/icon/order.jpg'), routeName: '' }
            ]
        }
    }
    jump (route) {
        this.props.navigation.push(route)
    }
    renderOrder = ({item}) => {
        return (
            <TouchableWithoutFeedback  onPress={ ()=> { this.jump( item.routeName) } }>
                <View style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={item.img}></Image>
                    <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render () {
        return (
            <View style={{ height: '100%' }}>
                <ImageBackground style={{ width: '100%', height: 300 }} source={mineBg}>
                {/* // 背景图 */}
                    <View style= {{ paddingLeft: 20, paddingRight: 20 }}>
                            <TouchableWithoutFeedback onPress={ () => { this.jump('Setting') } }><Image resizeMode="contain" source={iconSetting}/></TouchableWithoutFeedback>
                            <View style={{ height: 230, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{ width: 50, height: 50,  borderRadius: 25, overflow: 'hidden' }}>
                                        <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={mineHead}/>
                                    </View>
                                    <View>
                                        <Text style={{ color: '#fff', fontSize: 20 }}>scelmx</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                            <View style={{ borderRadius: 20, width: 80 , overflow: 'hidden', marginRight: 5 }} >
                                                <Button height={ 20 } style={ baseCss.tag1 } title="我的权益"/>
                                            </View>
                                            <View style={{ borderRadius: 20, width: 50, overflow: 'hidden' }} >
                                                <Button style = { baseCss.tag2 } title="v7"/>
                                            </View>
                                        </View>
                                    </View>
                                    
                                </View>
                                <View style={{ alignSelf: 'flex-end', marginBottom: 10 }}><Text style={{ color: '#fff' }}>编辑个人资料></Text></View>
                            </View>
                        </View>
                </ImageBackground>
                <View style={ [baseCss.pd3p, CSS.pr_30] }>
                    <View style = { baseCss.card }>
                            {/* // 订单卡片 */}
                            <View style={{ borderRadius: 20, height: 100, backgroundColor: '#fff' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#eee' }}>
                                    <Text style={{ fontWeight: 'bold' }}>我的订单</Text>
                                    <Text onPress={ () => { this.jump('Order') } } style={{ color: '#868686' }}>查看全部订单></Text>
                                </View>
                                <FlatList
                                    data = { this.state.orderOpt }
                                    renderItem={ this.renderOrder }
                                    keyExtractor={item => item.id}
                                    numColumns={ 5 }
                                    columnWrapperStyle = {{display: 'flex', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, height: 70 }}
                                >
                                </FlatList>
                            </View>
                        </View>
                        {/* // 会员卡片 */}
                        <View style = {{ overflow: 'hidden' }}>
                            <Image style = {{ width: '100%' }}  resizeMode="contain" source={require('../static/images/mine_banner.jpg')}></Image>
                        </View>
                        <View style={ baseCss.card }>
                            {/* // 工具卡片 */}
                            <View  style = {{ borderRadius: 20, paddingBottom: 5, backgroundColor: '#fff' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, paddingTop: 5, borderBottomWidth: 1, paddingBottom: 5, borderBottomColor: '#eee' }}>
                                    <Text style={{ fontWeight: 'bold' }}>我的工具</Text>
                                    <TouchableOpacity onPress={ () => { this.jump('Release'); }}>
                                        <Text style={{ color: '#868686' }}>更多工具></Text>
                                    </TouchableOpacity>
                                    
                                </View>
                                <View style={ [baseCss.df, { flexWrap: 'wrap', paddingTop: 10}] }>
                                    {
                                        this.state.myOpt.map((data, index) => {
                                            return (
                                                    <TouchableWithoutFeedback key={index} onPress={ () => { this.jump(data.routeName); } }>
                                                        <View style={ CSS.optItem }>
                                                            <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={ data.img }/>
                                                            <Text style={{ textAlign: 'center', marginTop: 5 }} >{ data.title }</Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                                    
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        </View>
                </View>
                
                    
            </View>
        )
    }
}