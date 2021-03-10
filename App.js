/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler'; //路由
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/view/login';
import HomeScreen from './src/view/home';
import TabNavScreen from './src/router/tab';
import FDetailScreen from './src/view/find/findDetail';
import TripDetailScreen from './src/view/trip/tripDetails';
import OrderScreen from './src/view/order';
import ReleaseScreen from './src/view/release';
import SettingScreen from './src/view/setting/setting';
import TicketScreen from './src/view/ticket/ticket';
import ticketInfoScreen from './src/view/ticket/ticketInfo';
import TicketListScreen from './src/view/ticket/ticketList';
import TicketDetailScreen from './src/view/ticket/ticketDetail';
import TravelScreen from './src/view/travel/travel';
import InfoScreen from './src/view/user/info';
import AddInfoScreen from './src/view/user/addInfo';
import HotelScreen from './src/view/hotel/hotel';
import HotelListScreen from './src/view/hotel/hotelList';
import HotelDetailScreen from './src/view/hotel/hotelDetail';
import HotelInfoScreen from './src/view/hotel/hotelInfo';
import CityDetailScreen from './src/component/city';
import ShowScreen from './src/view/show/show';
import PersonalityScreen from './src/view/user/personality';

const Stack = createStackNavigator();

function jump (nav, url) {
  nav.push(url)
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="TabNav" component={TabNavScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="FDetail" component={FDetailScreen}></Stack.Screen>
          <Stack.Screen name="TripDetail" component={TripDetailScreen}></Stack.Screen>
          <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Release" component={ReleaseScreen} options={{ title: '我的发布', headerStyle: {
            backgroundColor: '#f68710',
          }, headerTintColor: '#fff', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="Travel" component={TravelScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Setting" component={SettingScreen} options={{ title: '设置' }}></Stack.Screen>
          <Stack.Screen name="Ticket" component={TicketScreen} options={{ title: '' }}></Stack.Screen>
          <Stack.Screen name="TicketList" component={TicketListScreen} options={{ title: '设置' }}></Stack.Screen>
          <Stack.Screen name="TicketDetail" component={TicketDetailScreen} options={{ title: '车次详情', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="ticketInfo" component={ticketInfoScreen} options={{ title: '填写抢票信息', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="City" component={CityDetailScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name="Info" component={InfoScreen} options={{ title: '乘客选择', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="AddInfo" component={AddInfoScreen} options={{ title: '新增乘客', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="Hotel" component={HotelScreen} options={{ title: '', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="HotelList" component={HotelListScreen} options={{ title: '', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="HotelDetail" component={HotelDetailScreen} options={{ title: '', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="HotelInfo" component={HotelInfoScreen} options={{ title: '', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="Show" component={ShowScreen} options={{ title: '', headerTitleAlign: 'center' }}></Stack.Screen>
          <Stack.Screen name="Personality" component={PersonalityScreen} options={{ title: '', headerTitleAlign: 'center' }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
