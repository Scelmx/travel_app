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
import baseCss from '../../static/css/bese'
import { TextInput } from 'react-native';

const CSS = StyleSheet.create({
    bg: {
        height: 180,
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
        height: 300,
        position: 'relative',
        top: -62,
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
        // height: '100%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        overflow: 'hidden'
    },
    selectBtn: {
        width: '90%',
        marginTop: 10,
    },
    chooseTime: {
        width: '90%'
    },
    jcsb: {
        justifyContent: 'space-between' 
    },
    ptb10: {
        paddingTop: 10,
        paddingBottom: 10
    },
    ptb6: {
        paddingTop: 6,
        paddingBottom: 6
    },
    w90p: {
        width: '90%'
    },
    fs20: {
        fontSize: 20
    },
    fs16: {
        fontSize: 16
    },
    clearDefault: {
        padding: 0,
        margin: 0
    },
    pl10: {
        paddingLeft: 10
    }
})
const title = "青海湖+茶卡盐湖+德令哈+敦煌莫高窟+鸣 沙山月牙泉+张掖七彩丹1231231"


export default function Ticket ({navigation}) {
    const [TabChoose, setTabChoose] = useState('GuoNei')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date1, setDate1] = useState('请选择时间')
    const [date2, setDate2] = useState('请选择时间')
    const [address1, setAddress1] = useState('位置')
    const [street, setStreet] = useState('酒店/位置')
    const [num, setHotelNum] = useState(1)
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
        if(TabChoose === 'GuoNei') {
            return(
                <View style={ CSS.content }>
                    
                    <View style={[baseCss.bb, CSS.ptb10, { width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <TouchableOpacity onPress={ () => { navigation.navigate('City', {
                            callback: (data) => { setAddress1(data) }
                        }) }}>
                            <Text style={ CSS.fs20 }>{address1}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => {} }>
                            <Image/>
                        </TouchableOpacity>
                    </View>
                    <View style={ [CSS.chooseTime, CSS.ptb10, baseCss.df, CSS.jcsb, baseCss.bb, ] }>
                        <View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <TouchableWithoutFeedback onPress={showDatePicker}>
                                <View>
                                    <Text style={ [ CSS.fs16 ] }>{ date1 }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <Text>——</Text>
                        <View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <TouchableWithoutFeedback onPress={showDatePicker}>
                                <View>
                                    <Text style={ [ CSS.fs16 ] }>{ date2 }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={[baseCss.df, CSS.ptb10, baseCss.bb, CSS.w90p]}>
                        <View>
                            <Text>{street}</Text>
                        </View>
                        <View>
                            <Image/>
                        </View>
                    </View>
                    <View style={ [baseCss.df, CSS.ptb6, baseCss.bb, CSS.w90p] }>
                        <View style={ [baseCss.df] }>
                            <TextInput 
                                style={ [CSS.clearDefault, { flex:.7 }] }
                                onChange={ (text) => { setHotelNum(text) } }
                                placeholder="房间数"
                                value={ num }
                            ></TextInput>
                            <Text></Text>
                            <TextInput 
                                style={ [CSS.clearDefault, CSS.pl10, { flex:.3, borderLeftWidth: 1, borderLeftColor: '#ccc' }] }
                                onChange={ (text) => { setHotelNum(text) } }
                                placeholder="人数"
                                value={ num }
                            ></TextInput>
                        </View>
                    </View>
                    <View style={ [CSS.selectBtn, CSS.fs20] }>
                        <Button  title="查 询" onPress={ ()=>{ navigation.push('HotelList',{ date:[date1, date2] }) } }/>
                    </View>
                </View>
            )
        } else if(TabChoose === 'ZhongDian') {
            return(
                <View style={ CSS.content }>
                    <View style={[baseCss.bb, CSS.ptb10, { width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                        <TouchableOpacity onPress={ () => { navigation.navigate('City', {
                            callback: (data) => { setAddress1(data) }
                        }) }}>
                            <Text style={ CSS.fs20 }>{address1}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={ () => {} }>
                            <Image/>
                        </TouchableOpacity>
                    </View>
                    <View style={ [CSS.chooseTime, CSS.ptb10, baseCss.df, CSS.jcsb, baseCss.bb, ] }>
                        <View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <TouchableWithoutFeedback onPress={showDatePicker}>
                                <View>
                                    <Text style={ [ CSS.fs16 ] }>{ date1 }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={[baseCss.df, CSS.ptb10, baseCss.bb, CSS.w90p]}>
                        <View>
                            <Text>{street}</Text>
                        </View>
                        <View>
                            <Image/>
                        </View>
                    </View>
                    <View style={ [baseCss.df, CSS.ptb6, baseCss.bb, CSS.w90p] }>
                        <View style={ [baseCss.df] }>
                            <TextInput 
                                style={ [CSS.clearDefault, { flex:.7 }] }
                                onChange={ (text) => { setHotelNum(text) } }
                                placeholder="房间数"
                                value={ num }
                            ></TextInput>
                            <Text></Text>
                            <TextInput 
                                style={ [CSS.clearDefault, CSS.pl10, { flex:.3, borderLeftWidth: 1, borderLeftColor: '#ccc' }] }
                                onChange={ (text) => { setHotelNum(text) } }
                                placeholder="人数"
                                value={ num }
                            ></TextInput>
                        </View>
                    </View>
                    <View style={ [CSS.selectBtn, CSS.fs20] }>
                        <Button  title="查 询" onPress={ ()=>{ navigation.push('HotelList', { date:[date1, date2] }) } }/>
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
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('GuoNei')}>
                            <Text style={{ minWidth: 80, textAlign: 'center', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: TabChoose === 'GuoNei' ? '#3399ff' : 'transparent', color: '#fff'}}>酒店</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CSS.TabControlItem} onPress={()=>TabChooseToggleFun('ZhongDian')}>
                            <Text style={{ minWidth: 80, textAlign: 'center', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20, backgroundColor: TabChoose === 'ZhongDian' ? '#3399ff' : 'transparent', color: '#fff'}}>钟点房</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={{ flex: 1 }}>
                    { TabChooseTogglePanelFunWrap() }
                </View>
            </View>
        </View>
    )
}