import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { AntDesign } from '@expo/vector-icons';

import { PrimaryColor, Devider, Accent } from '../Theme/colors';

//Import Screens

//Tabs
import HomeScreen from '../Screens/HomeScreen/home.screen';
import BlankScreen from '../Screens/BlankScreen/blank.screen';
import { Inactive } from '../Constants/async.constants';

const TabNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Search: { screen: BlankScreen },
        Bookings: { screen: BlankScreen },
        Account: { screen: BlankScreen },
    },
    {
        initialRouteName: 'Home',
        order: ['Home', 'Search', 'Bookings', 'Account'],
        backBehavior: 'initialRoute',
        lazy: true,
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;

                switch (routeName) {
                    case 'Home':
                        return <AntDesign name="home" size={32} color={tintColor} />
                    case 'Search':
                        return <AntDesign name="search1" size={32} color={tintColor} />
                    case 'Bookings':
                        return <AntDesign name="book" size={32} color={tintColor} />
                    case 'Account':
                        return <AntDesign name="user" size={32} color={tintColor} />
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: PrimaryColor,
            inactiveTintColor: Inactive,
            allowFontScaling: false,
            showLabel: false,
            pressColor: PrimaryColor,
            tabStyle: {
            },
            style: {
            }
        },
    }
);

const RootNavigator = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigator,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'Tabs'
    }
)

export default createAppContainer(RootNavigator);