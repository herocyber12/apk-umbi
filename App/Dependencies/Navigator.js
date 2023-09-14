import React from 'react'
import { color } from './Styles'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Pages from './Pages'

const headerBlankOps = {
    headerShown: false
}
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: color.theme,
        background: color.theme
    },
};
const Stack = createStackNavigator()
export default function Navigator() {
    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator initialRouteName="index">
                <Stack.Screen name="index" component={Pages.Index} options={headerBlankOps} />
                <Stack.Screen name="detail_item" component={Pages.Detail} options={headerBlankOps} />
                <Stack.Screen name="cart" component={Pages.Cart} options={headerBlankOps} />
                <Stack.Screen name="my_order" component={Pages.Order} options={headerBlankOps} />
                <Stack.Screen name="detail_order" component={Pages.OrderDetail} options={headerBlankOps} />
                <Stack.Screen name="payment_auth" component={Pages.PaymentAuth} options={headerBlankOps} />
                <Stack.Screen name="payment_success" component={Pages.PaymentSuccess} options={headerBlankOps} />
                <Stack.Screen name="configuration" component={Pages.Configuration} options={headerBlankOps} />
                <Stack.Screen name="config_bluetooth" component={Pages.SettingBluetooth} options={headerBlankOps} />
                <Stack.Screen name="config_wifi" component={Pages.SettingWifi} options={headerBlankOps} />
                <Stack.Screen name="config_vending" component={Pages.SettingVending} options={headerBlankOps} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

