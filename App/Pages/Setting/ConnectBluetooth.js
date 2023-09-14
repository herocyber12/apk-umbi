import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ProgressBarAndroid, ToastAndroid } from 'react-native'
import { typography, color, font } from '../../Dependencies/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import TouchedButton from '../../Component/TouchedButton'
import BottomSheet from 'reanimated-bottom-sheet';
import RNBluetooth from 'react-native-bluetooth-classic'
import { requestBluetoothPermission, requestLocationPermissions } from '../../Dependencies/Permission'

export default function ConnectBluetooth() {
    const sheetRef = useRef(null)
    const navigation = useNavigation()
    const [deviceConnecting, setDeviceConnecting] = useState(null)
    const [deviceConnected, setDeviceConnected] = useState(null)
    const [devices, setDevices] = useState([])
    const [connected, setConnected] = useState(false)



    useLayoutEffect(() => {
        requestLocationPermissions()
        requestBluetoothPermission()
    })

    useEffect(() => {

        RNBluetooth.isBluetoothEnabled().then(result => {
            if (result) {
                scanDevice()
            }
        })

    }, [connected])

    function scanDevice() {
        RNBluetooth.getBondedDevices().then(devices => {
            // const deviceList = devices.map(device => device)
            const deviceResult = devices.map(async (item) => {
                const hasConnectedWithDevice = await item.isConnected()
                item.is_connected = hasConnectedWithDevice
                if (hasConnectedWithDevice) setDeviceConnected(item)
                return item
            })
            Promise.all(deviceResult).then(doc => {
                setDevices(doc)
                console.log(doc)
            })
        })

    }

    function openSheet(value) {
        sheetRef.current.snapTo(value)
    }


    async function connectToDevice(device) {
        openSheet(200)
        setDeviceConnecting(device)

        let connect = await device.isConnected();
        // console.log(connect)

        if (!connect) {
            console.log("connecting..")

            connect = await device.connect({
                CONNECTOR_TYPE: "rfcomm",
                DELIMITER: "\n",
            });
        }

        if (connect) {
            openSheet(deviceConnected ? 200 : 0)
            setDeviceConnected(device)
            setConnected(true)
            ToastAndroid.show('Berhasil terhubung dengan ' + device.name, ToastAndroid.SHORT)

            const msg = await device.read()
            console.log(msg)
        }
    }

    async function disconnectDevice() {
        openSheet(0)
        const available = await deviceConnected.isConnected()
        console.log(available)
        if(available){
            const disconnecting = await deviceConnected.disconnect()
            console.log(disconnecting)
            if(disconnecting){
                setDeviceConnected(null)
                setConnected(false)
                ToastAndroid.show('Sambungan terputus',ToastAndroid.SHORT)
            }
        }
    }

    return (
        <>
            <FlatList
                data={devices}
                keyExtractor={k => k.id.toString()}
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
                            }}>Connect Bluetooth</Text>
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
                        onPress={() => connectToDevice(item)}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 30,
                            backgroundColor: color.white,
                            borderRadius: 20,
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <View>
                                <Text style={{
                                    ...typography.h4,
                                }}>{item.name}</Text>

                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontFamily: font.medium,
                                        color: color.dark,
                                    }}>{item.address}</Text>
                                </View>
                            </View>
                            {
                                item.is_connected
                                    ? <Icon name="ios-checkmark-circle" size={32} color={color.green} />
                                    : null
                            }
                        </View>
                    </TouchedButton>

                )}
            />


            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 300, 0]}
                enabledInnerScrolling={false}
                enabledGestureInteraction={false}
                renderContent={() => (
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 30,
                            height: 300,
                            elevation: 15,
                            borderTopRightRadius: 15,
                            borderTopLeftRadius: 15
                        }}>
                        {
                            !deviceConnected ?
                                <>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <Text style={{
                                            ...typography.h5
                                        }}>Menghubungkan</Text>
                                        <ProgressBarAndroid
                                            styleAttr="Horizontal"
                                            animating={true}
                                            color={color.primary}
                                            style={{
                                                marginVertical: 30
                                            }} />
                                        <View>
                                            <Text>Sedang menghubungkan ke perangkat {deviceConnecting ? deviceConnecting.name : null}</Text>
                                        </View>
                                    </View>

                                    <TouchedButton
                                        onPress={() => openSheet(0)}>
                                        <View style={{
                                            padding: 10,
                                            borderRadius: 10,
                                            backgroundColor: color.gray,
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: color.light
                                            }}>Batalkan</Text>
                                        </View>
                                    </TouchedButton>
                                </>
                                :
                                <>
                                    <View style={{
                                        flex: 1
                                    }}>
                                        <View>
                                            <Text>Anda sedang terhubung ke perangkat {deviceConnected ? deviceConnected.name : null}</Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>

                                        <TouchedButton
                                            style={{ flex: 1 }}
                                            onPress={() => openSheet(0)}>
                                            <View style={{
                                                padding: 10,
                                                borderRadius: 10,
                                                backgroundColor: color.gray,
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    color: color.light
                                                }}>Tutup</Text>
                                            </View>
                                        </TouchedButton>
                                        <TouchedButton
                                            style={{ flex: 1, marginLeft : 10 }}
                                            onPress={() => disconnectDevice()}>
                                            <View style={{
                                                padding: 10,
                                                borderRadius: 10,
                                                backgroundColor: color.red,
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    color: color.light
                                                }}>Putus</Text>
                                            </View>
                                        </TouchedButton>
                                    </View>

                                </>
                        }
                    </View>
                )}
            />
        </>
    )
}
