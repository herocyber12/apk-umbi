import React, { useState, useEffect, useLayoutEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, ToastAndroid, TextInput, TabBarIOS } from 'react-native'
import RNBluetooth from 'react-native-bluetooth-classic'
import TouchedButton from '../../Component/TouchedButton'
import { typography, font, color } from '../../Dependencies/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ModalConnect from './Partial/ModalConnect'

export default function SetupWifi() {
    const navigation = useNavigation()
    const [wifi_list, setwifi_list] = useState([])
    const [device, setdevice] = useState(null)
    const [passwd, setpasswd] = useState("BERBAGI360")
    const [modalConnect, setmodalConnect] = useState(false)
    const [ssid, setSsid] = useState(null)
    const [isConnected, setisConnected] = useState(false)

    let subReadDataBL = null
    useLayoutEffect(() => {
        if (device) {
            performReadData()
        }
    },[device])

    useEffect(() => {
        if (!device) {
            console.log("from here")
            getDeviceConnected()
        } 

        return () => subReadDataBL && subReadDataBL.remove()
    }, [device])

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
    function getDeviceConnected() {
        RNBluetooth.getConnectedDevices().then(async device => {
            const deviceConnected = device[0]
            if(deviceConnected){
                deviceConnected.write('get')
                setdevice(deviceConnected)
            }
        })
    }

    function getWifiList() {
        if(device){
            device.write('get')
        }else{
            ToastAndroid.show('Tidak terhubung dengan bluetooth', ToastAndroid.SHORT)
        }
    }

    async function getData(msg) {
        // console.log(msg.data)
        const response = JSON.parse(msg.data)
        if (response.result) {
            switch (response.code) {
                case 1:
                    if (response.data.length == 0) {
                        setTimeout(() => {
                            getWifiList()
                        }, 3000);
                        return
                    }
                    setwifi_list(response.data)

                    break;
                case 2:
                    setisConnected(true)
                    getWifiList()
                case 3:
                    setisConnected(false)
                    getWifiList()
                default:
                    // ToastAndroid.show(response.msg, ToastAndroid.SHORT)
                    setmodalConnect(false)
            }
        } else {
            ToastAndroid.show(response.msg, ToastAndroid.SHORT)
        }

    }


    function disconnectDevice(ssid) {
        if (device) {
            device.write('dcon:' + ssid)
        } else {
            ToastAndroid.show('Tidak terhubung dengan bluetooth', ToastAndroid.SHORT)
        }
    }

    function connectToDevice(ssid) {
        if (device) {
            const data = JSON.stringify({
                ssid,
                passwd
            })
            device.write('conn:' + data)
        } else {
            ToastAndroid.show('Tidak terhubung dengan bluetooth', ToastAndroid.SHORT)
        }
    }

    return (
        <>
            <ModalConnect
                open={modalConnect}
                onBack={() => setmodalConnect(false)}
                onPress={() => setmodalConnect(false)}
                setText={(text) => setpasswd(text)}
                passwd={passwd}
                ssid={ssid}
                onConnect={() => {
                    if (isConnected) {
                        disconnectDevice(ssid)
                    } else {
                        if (passwd) {
                            connectToDevice(ssid)
                        }
                    }
                }}
                isConnected={isConnected}
            />

            <FlatList
                data={wifi_list}
                keyExtractor={k => k.ssid.toString()}
                showsVerticalScrollIndicator={false}
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
                            }}>Wifi Setup</Text>
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
                        onPress={() => {
                            setmodalConnect(true)
                            setSsid(item.ssid)
                            setisConnected(item.con)
                        }}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 30,
                            backgroundColor: color.white,
                            borderRadius: 20,
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Icon
                                    name="wifi"
                                    size={24}
                                    color={item.con ? color.green : color.info}
                                />
                                <Text style={{
                                    ...typography.h4,
                                    marginLeft: 20
                                }}>{item.ssid}</Text>
                            </View>
                        </View>
                    </TouchedButton>

                )}
            />
        </>
    )
}
