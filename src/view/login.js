import React from 'react'
import { StatusBar, TextInput, Text, View, Button, Image, ImageBackground } from 'react-native'
import http from '../util/http.js'
import LoginCss from '../static/css/login.js'


class login extends React.Component{
    constructor(prop){
        super();
        this.state = {
            userinfo:{
                phone: '',
                username: '',
                password: '',
            },
            btnName: "获取验证码",
            transferBtn: '账号密码登录',
            other: {
                QQ: [],
            }
        }
    }
    // 改变按钮名称和请求数据地址
    changeNameAndUrl = () => {
        this.setState({
            btnName: "登录"
        })
        if(this.state.btnName === "登录") {
            this.props.navigation.push('TabNav')
        }
    }
    login = () => {
        
    }
    transfers = () => {
        if(this.state.transferBtn === "账号密码登录"){
            debugger;
            this.setState({
                transferBtn: '手机号登录'
            })
        }else{
            this.setState({
                transferBtn: '账号密码登录'
            })
        } 
    }
    render(){
        return (
            <View style = { LoginCss.login_page }>
                <View style = { LoginCss.login_page_bg }>
                    <ImageBackground style = { LoginCss.login_bg_pic } source = { require('../static/images/login_bg.png') }>
                        <View style = { LoginCss.status_bar }>
                            <StatusBar backgroundColor="#126fb6"></StatusBar>
                        </View>
                        <View style = { LoginCss.banner }>
                            
                            <View style = { LoginCss.title_box }>
                                <Text style = { LoginCss.title }>登录后更精彩</Text>
                                <Text style = { LoginCss.text }>全世界的旅游故事都在期待与你的相遇</Text>
                            </View>
                            
                            <View style = { LoginCss.tab }>
                                <View style = { this.state.transferBtn === '账号密码登录'? LoginCss.user_form: LoginCss.hidden }>
                                    <TextInput style = { LoginCss.phone } placeholder = "请输入手机号"></TextInput>
                                    <Text style = { LoginCss.login } onPress = { this.changeNameAndUrl }>{ this.state.btnName }</Text>
                                </View>
                                <View style = { this.state.transferBtn === '手机号登录'? LoginCss.user_form: LoginCss.hidden }>
                                    <TextInput style = { LoginCss.phone } placeholder = "请输入用户名"></TextInput>
                                    <TextInput style = { LoginCss.phone } placeholder = "请输入密码"></TextInput>
                                    <Text style = { LoginCss.login } onPress = { this.changeNameAndUrl }>{ this.state.btnName }</Text>
                                </View>
                                <View style = { LoginCss.user_form }>
                                    <Text onPress = { this.transfers } style = { LoginCss.transfer }>{ this.state.transferBtn }</Text>
                                </View>
                                <View className = "radio">

                                </View>
                            </View>
                            
                            <View className = "other_login">
                                <View>
                                    <Text onPress = { this.transfer }>其它方式登录</Text>
                                </View>
                                <View>
                                    <View><Text>QQ</Text></View>
                                    <View><Text>QQ</Text></View>
                                    <View><Text>QQ</Text></View>
                                </View>
                            </View> 
                        </View>
                    </ImageBackground>
                </View>

                
            </View>
        )
    }
}

export default login