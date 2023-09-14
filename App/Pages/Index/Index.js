import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Home,
    Account,
    Activity
} from '../../Dependencies/Pages';
import { color, font } from '../../Dependencies/Styles';
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const screenOps = ({ navigation }) => ({
    tabBarIcon: ({ color, focused }) => {
        const route = useRoute();
        let iconFocus = null,
            iconUnFocus = null,
            iconSize = 32; 

        switch (route.name) {
            case 'home':
                iconUnFocus = 'fast-food-outline'
                iconFocus= 'fast-food'
                break; 
            case 'activity':
                iconUnFocus = 'flame-outline'
                iconFocus= 'flame'
                break; 
            case 'account':
                iconUnFocus = 'person-circle-outline'
                iconFocus= 'person-circle'
                break; 
        }

        // You can return any component that you like here!
        return <Ionicons name={focused ? iconFocus : iconUnFocus} size={iconSize} color={color} />
    }
})

const tabOptions = {
    showLabel: false,
    labelStyle: { 
        marginBottom : 5,
        fontFamily : font.medium,
        fontSize : 12,
        textTransform : 'capitalize'
    },
    activeTintColor: color.primary,
    inactiveTintColor: color.gray,
    allowFontScaling: true,
    style: {
        shadowColor: color.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation : 15,
        borderTopWidth: 0,
        borderRadius : 10,
        height : 55,
        padding : 5,
        elevation: 10,
    },
}

const Tab = createBottomTabNavigator()
export default function Index() {
    return (
        <Tab.Navigator
            backBehavior="initialRoute"
            initialRouteName="home"
            tabBarOptions={tabOptions} 
            screenOptions={screenOps}>
            <Tab.Screen
                name="home" 
                options={{
                    title : 'Beranda'
                }}
                component={Home} /> 
            <Tab.Screen
                name="activity"
                options={{
                    title : 'Aktivitas'
                }}
                component={Activity} /> 
            <Tab.Screen
                name="account"
                options={{
                    title : 'Profil'
                }}
                component={Account} />
        </Tab.Navigator>
    )
}
