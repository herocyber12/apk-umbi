import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ToastAndroid, } from 'react-native'
import { typography, color, font } from '../../Dependencies/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import TouchedButton from '../../Component/TouchedButton'
import RNBluetooth from 'react-native-bluetooth-classic'

export default function VendingDummy() {
    const navigation = useNavigation()
    const [box, setBox] = useState([])
    const [device, setdevice] = useState(null)
    let subReadDataBL = null

    useLayoutEffect(() => {
        if (device) {
            performReadData()
        }

    }, [device])

    useEffect(() => {
        addData()

        if (!device) {
            getDeviceConnected()
        }
        return () => subReadDataBL && subReadDataBL.remove()
    }, [device])

    function sendCommand(item) {
        if (device) {
            device.write('opvn:' + item.number)
        } else {
            ToastAndroid.show("Device not connected", ToastAndroid.SHORT)
        }
    }

    async function performReadData() {
        try {
            const isConnected = await device.isConnected()
            if (isConnected) {
                subReadDataBL = device.onDataReceived(message => getData(message))
            }
        } catch (error) {
            ToastAndroid.show(error, ToastAndroid.SHORT)
        }
    }

    async function getData(msg) {
        // console.log(msg.data)
        const response = JSON.parse(msg.data)
        if (response.result) {
            ToastAndroid.show(response.msg, ToastAndroid.SHORT)
        }
    }
    function addData() {
        let data = []
        for (let i = 0; i < 6; i++) {
            data = [...data, {
                id: i,
                title: 'No ' + parseInt(i + 1),
                number: 'v' + parseInt(i + 1)
            }]
        }
        setBox(data)
        // console.log(data)

    }

    function getDeviceConnected() {
        RNBluetooth.getConnectedDevices().then(async device => {
            const deviceConnected = device[0]
            if (deviceConnected) {
                setdevice(deviceConnected)
            }
        })
    }


    return (
        <FlatList
            data={box}
            keyExtractor={k => k.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{
                padding: 20,
                paddingTop: 25
            }}
            ListHeaderComponent={(
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 40
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={.9}>
                        <View style={{
                            padding: 10,
                            borderRadius: 10,
                            backgroundColor: color.purple_1,
                        }}>
                            <Icon name="ios-chevron-back-sharp" size={24} color={color.primary} />
                        </View>
                    </TouchableOpacity>


                    <View style={{
                        marginLeft: 20
                    }}>
                        <Text style={{
                            ...typography.h1,
                        }}>Dummy Vending</Text>
                    </View>
                </View>
            )}
            ItemSeparatorComponent={() => (
                <View style={{
                    height: 10
                }} />
            )}
            renderItem={({ item }) => (
                <TouchedButton
                    style={{
                        flex: .5,
                        margin: 5
                    }}
                    onPress={() => sendCommand(item)}>
                    <View style={{
                        paddingVertical: 50,
                        backgroundColor: color.white,
                        borderRadius: 20,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            ...typography.h4,
                        }}>{item.title}</Text>
                    </View>
                </TouchedButton>

            )}
        />
    )
}
