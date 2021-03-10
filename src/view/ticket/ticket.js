import React, { useState } from 'react';
import { StyleSheet,
        View,
        FlatList,
        Button,
        Text,
        TouchableHighlight,
        Image,
        ImageBackground,
        TouchableOpacity,
        TouchableWithoutFeedback
    } from 'react-native';
import Swiper from 'react-native-swiper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import baseCss from '../../static/css/bese';

const CSS = StyleSheet.create({
    bg: {
        height: '24%',
        marginBottom: 10
    },
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
    card: {
        borderRadius: 20,
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        height: '50%',
        position: 'relative',
        top: '-9%',
        overflow: 'hidden',
        display: 'flex'
    },
    tab: {
        height: 52,
        backgroundColor: 'rgba(0, 0, 0, .5)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    TabControl: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TabControlItem: {
        height: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    selectBtn: {
        width: '90%',
        marginTop: 10,
    },
    chooseTime: {
        width: '90%'
    }
})
const title = "青海湖+茶卡盐湖+德令哈+敦煌莫高窟+鸣 沙山月牙泉+张掖七彩丹1231231"


export default function Ticket ({navigation}) {
    const [TabChoose, setTabChoose] = useState('LianXi')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState('请选择时间')
    const [address1, setAddress1] = useState('出发地')
    const [address2, setAddress2] = useState('到达地')
    const [isStudent, setStudent] = useState(false)
    function TabChooseToggleFun(e) {
        if(e != TabChoose) {
            setTabChoose(e)
        }
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDate(date.toString())
        hideDatePicker();
    };
    // 选项卡面板
    function TabChooseTogglePanelFunWrap() {
        if(TabChoose === 'LianXi') {
            return(
                <View style={ CSS.content }>
                    <View></View>
                    <View style={[baseCss.ptb10, baseCss.bb, { width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <TouchableOpacity onPress={ () => { navigation.navigate('City', {
                            address: address1,
                            callback: (data) => { setAddress1(data) }
                        }) }}>
                            <Text style={ [baseCss.fs20] }>{address1}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => { navigation.navigate('City', {
                            callback: (data) => { setAddress2(data) }
                        }) }}>
                            <Text style={[baseCss.fs20]}>{address2}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ [CSS.chooseTime, baseCss.ptb10, baseCss.bb] }>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <TouchableWithoutFeedback onPress={showDatePicker}>
                            <View>
                                <Text>{ date }<Text>今天</Text></Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={[baseCss.df]}>
                        {/* <Radio 
                            checked={ isStudent }
                            onChange={ (flag) => setStudent(flag) }
                        /> */}
                    </View>
                    <View style={ CSS.selectBtn }>
                        <Button  title="查询" onPress={ ()=>{ navigation.push('TicketList') } }/>
                    </View>
                </View>
            )
        } else if(TabChoose === 'ZhenTi') {
            return(
                <View style={ CSS.content }>
                    <View></View>
                    <View style={[baseCss.ptb10, baseCss.bb, { width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <TouchableOpacity onPress={ () => { navigation.navigate('City', {
                            address: address1,
                            callback: (data) => { setAddress1(data) }
                        }) }}>
                            <Text style={ [baseCss.fs20] }>{address1}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => { navigation.navigate('City', {
                            callback: (data) => { setAddress2(data) }
                        }) }}>
                            <Text style={[baseCss.fs20]}>{address2}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ [CSS.chooseTime, baseCss.ptb10, baseCss.bb] }>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        <TouchableWithoutFeedback onPress={showDatePicker}>
                            <View>
                                <Text>{ date }<Text>今天</Text></Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View></View>
                    <View style={ CSS.selectBtn }>
                        <Button  title="查询" onPress={ ()=>{ navigation.push('TicketList') } }/>
                    </View>
                </View>
            )
        } else if(TabChoose === 'CePing') {
            return(
                <View style={ CSS.content }>
                    <View></View>
                    <View></View>
                    <View><Text>3月8日<Text>今天</Text></Text></View>
                    <View></View>
                    <View style={ CSS.selectBtn }>
                        <Button  title="查询" onPress={ ()=>{ navigation.push('TicketList') } }/>
                    </View>
                </View>
            )
        }
    }
    return (
        <View style={{ height: '100%' }}>
            <View style={ CSS.bg }>
                <Swiper height={ 200 } style={ CSS.banner } autoplay={ true }>
                    <ImageBackground style={ CSS.banner_item } source={require('../../static/images/sy.jpg')}>
                        <View style={ CSS.banner_text_bg }>
                            <Text style={ CSS.desc }><Text style={ CSS.desc_tag }>双飞9日</Text> {title ? (title.length > 32 ? title.substr(0, 32) + "..." : title) : ""}</Text>
                        </View>
                    </ImageBackground>
                    <View>
                        <Text>222</Text>
                    </View>
                </Swiper>
                
            </View>
            <View style={ CSS.card }>
                    {/** tab */}
                <View style={ CSS.tab }>
                    <View style={CSS.TabControl}>
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('LianXi')}>
                            <Text style={{ minWidth: 80, textAlign: 'center', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: TabChoose === 'LianXi' ? '#3399ff' : 'transparent', color: '#fff'}}>机票</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('ZhenTi')}>
                            <Text style={{ minWidth: 80, textAlign: 'center', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: TabChoose === 'ZhenTi' ? '#3399ff' : 'transparent', color: '#fff'}}>火车</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('CePing')}>
                            <Text style={{ minWidth: 80, textAlign: 'center', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: TabChoose === 'CePing' ? '#3399ff' : 'transparent', color: '#fff'}}>汽车/船票</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{ height: '74%' }}>
                    { TabChooseTogglePanelFunWrap() }
                </View>
            </View>
        </View>
    )
}