import React from 'react';
import { Image, ImageBackground, StatusBar, View, Text, TextInput } from 'react-native';
import HomeCss from '../static/css/home.js'

class home extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }
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
                                <Text>重庆</Text>
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
                        <Image></Image>
                        <Image></Image>
                        <Image></Image>
                        <Image></Image>
                        <Image></Image>
                    </View>
                    <View style = { HomeCss.big_btn_list }>
                        <View style = { HomeCss.big_list_item }>
                            <View>
                                <Text style = { HomeCss.big_title } >周边游</Text>
                                <Text style = { HomeCss.big_desc }>xxxxx</Text>
                            </View>
                            <View style = { HomeCss.big_img }>
                                <Image resizeMode="contain" source={require('../static/images/login_bg.png')}></Image>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style = { HomeCss.menu_tab }>
                    
                </View>
            
            </View>
        )
    }
}

export default home