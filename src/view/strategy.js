import React from 'react'
import GraphicCard from '../component/graphicCard' 
import { StyleSheet, View } from 'react-native';

/**
 * 攻略
 */
class strategy extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {

        }
    }
    render() {
        return (
            <View style = { strategy_css.graphic_card }>
                <GraphicCard  img_url = { require('../static/images/chongqing.png') } text = "111"></GraphicCard>
            </View>
        )
    }
}
const strategy_css = StyleSheet.create({
    graphic_card: {
        height: 80,
        width: 120,
        display: 'flex',
        alignItems: 'center'
    }
})
export default strategy