import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import IoIcon from 'react-native-vector-icons/Ionicons'
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color, typography } from '../../Dependencies/Styles'
import { useNavigation } from '@react-navigation/native'
import TouchedButton from '../../Component/TouchedButton'

export default function Configuration() {
    const navigation = useNavigation()
    const [configs, setConfig] = useState([
        {
            id: 1,
            name: 'Connect BL',
            icon: <IoIcon name="bluetooth" size={36} color={color.info} />,
            onPress: () => navigation.navigate('config_bluetooth')
        },
        {
            id: 2,
            name: 'Wifi Setup',
            icon: <McIcon name="usb-flash-drive" size={36} color={color.success} />,
            onPress: () => navigation.navigate('config_wifi')
        }, 
        {
            id: 3,
            name: 'Dummy Vending',
            icon: <McIcon name="robot-mower" size={36} color={color.warning} />,
            onPress: () => navigation.navigate('config_vending')
        }, 
    ])
    return (
        <FlatList
            data={configs}
            keyExtractor={k => k.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                padding: 20,
                paddingTop: 25,
            }}
            numColumns={3}
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
                            <IoIcon name="ios-chevron-back-sharp" size={24} color={color.primary} />
                        </View>
                    </TouchableOpacity>


                    <View style={{
                        marginLeft: 20
                    }}>
                        <Text style={{
                            ...typography.h1,
                        }}>Pengaturan</Text>
                    </View>

                </View>
            )}
            renderItem={({ item }) => (
                <TouchedButton
                    style={{
                        flex: .333,
                        margin: 5
                    }}
                    onPress={item.onPress}>
                    <View style={{
                        padding: 15,
                        borderRadius: 15,
                        backgroundColor: color.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{
                            flex: 1,
                            height: 60,
                            justifyContent: 'center'
                        }}>
                            {item.icon}
                        </View>
                        <Text
                            lineBreakMode="tail"
                            numberOfLines={1}
                            style={{
                                fontWeight: "bold",
                                fontSize: 12,
                                color: color.dark,
                                textAlign: 'center'
                            }}>{item.name}</Text>
                    </View>
                </TouchedButton>
            )}
        />
    )
}
