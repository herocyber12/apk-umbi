import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Modal from 'react-native-modal'
import { typography, color, font } from '../../../Dependencies/Styles'
import TouchedButton from '../../../Component/TouchedButton'

export default function ModalConnect(props) {
    const {
        open,
        onBack,
        onPress,
        setText,
        ssid,
        passwd,
        onConnect,
        isConnected
    } = props
    return (
        <Modal
            isVisible={open}
            animationIn="zoomIn"
            animationOut="zoomOut"
            statusBarTranslucent={true}
            useNativeDriver={true}
            useNativeDriverForBackdrop={true}
            onBackButtonPress={onBack}
            onBackdropPress={onPress}
            avoidKeyboard={true}
        >
            <View style={{
                margin: 20,
                padding: 20,
                backgroundColor: color.white,
                borderRadius: 15
            }}>
                <Text style={{
                    ...typography.h3,
                    marginVertical: 15,
                    color: color.dark
                }}>{isConnected ? "Akhiri sambungan" : "Mulai sambungan"} </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10
                }}>
                    {
                        isConnected ?

                            <Text style={{
                                fontFamily: font.medium,
                                fontSize: 16,
                                lineHeight: 21,
                                color: color.dark
                            }}>Anda akan mengakhiri sambungan dengan wifi <Text style={{ fontFamily: font.bold }}>{ssid}</Text></Text>
                            :
                            <Text style={{
                                fontFamily: font.medium,
                                fontSize: 16,
                                lineHeight: 21,
                                color: color.dark
                            }}>Anda akan memulai sambungan dengan <Text style={{ fontFamily: font.bold }}>{ssid}</Text> silahkan mengisi password dibawah.</Text>
                    }
                </View>
                {
                    !isConnected &&
                    <TextInput style={{
                        borderRadius: 50,
                        backgroundColor: color.light,
                        marginVertical: 15,
                        paddingLeft: 15
                    }}
                        placeholder={"Tulis Sandi Wifi " + ssid}
                        onChangeText={setText}
                        value={passwd}
                    />
                }
                <TouchedButton
                style={{
                    marginTop : 20
                }}
                    onPress={onConnect}>
                    <View style={{
                        padding: 10,
                        // backgroundColor: passwd != null ? color.success : color.light,
                        backgroundColor: isConnected ? color.danger : color.success,
                        borderRadius: 50,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            // color : passwd != null ?  color.text_success : color.gray
                            color: isConnected ? color.text_danger : color.text_success
                        }}>{isConnected ? "Putuskan" : "Hubungkan"}</Text>
                    </View>
                </TouchedButton>
            </View>
        </Modal>

    )
}
