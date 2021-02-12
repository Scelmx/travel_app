import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../view/home';
import TripScreen from '../view/trip/trip';
import FindScreen from '../view/find/find';
// import MessageScreen from '../view/message';
import MineScreen from '../view/mine';

import inHomeIcon from '../static/images/inhome.jpg';
import HomeIcon from '../static/images/home.jpg';
import inTripIcon from '../static/images/intrip.jpg';
import TripIcon from '../static/images/trip.jpg';
import FindIcon from '../static/images/find.jpg';
import inFindIcon from '../static/images/infind.jpg';
import MeIcon from '../static/images/me.jpg';
import inMeIcon from '../static/images/inme.jpg';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
      <Tab.Navigator screenOptions={ ({route}) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
                let icon
                switch (route.name) {
                    case 'Home': icon = focused ? HomeIcon: inHomeIcon; break;
                    case 'Trip': icon = focused ? TripIcon: inTripIcon; break;
                    case 'Find': icon = focused ? FindIcon: inFindIcon; break;
                    case 'Mine': icon = focused ? MeIcon: inMeIcon; break;
                }
                return <Image style={{ width: 25, height: 25 }} resizeMode="contain" source={icon}/>
            }
          }
      }} 
      tabBarOptions = {{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }}/>
        <Tab.Screen name="Trip" component={TripScreen} options={{ title: '行程' }}/>
        <Tab.Screen name="Find" component={FindScreen} options={{ title: '发现' }}/>
        {/* <Tab.Screen name="Message" component={MessageScreen} /> */}
        <Tab.Screen name="Mine" component={MineScreen} options={{ title: '我的' }}/>
      </Tab.Navigator>
    )
}