import React from 'react'
import { View, Text, Image } from 'react-native'
import { typography, color } from '../../Dependencies/Styles'
import TouchedButton from '../../Component/TouchedButton'
import * as images from '../../Assets/Images/index'
import IoIcon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
export default function Account() {
    const navigation = useNavigation()
    return (
        <View style={{
            padding: 20,
            paddingTop: 25
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    ...typography.h1
                }}>Profil</Text>

                <TouchedButton
                    onPress={() => navigation.navigate('configuration')}>
                    <IoIcon name="settings-sharp" size={24} color={color.dark} />
                </TouchedButton>
            </View>
            <View style={{
                alignItems: 'center',
                marginVertical: 50
            }}>
                <View style={{
                    backgroundColor: color.white,
                    width: 150,
                    height: 150,
                    borderRadius: 50,
                    overflow: 'hidden',
                    borderWidth: 5,
                    borderColor: color.white
                }}>
                    <Image
                        source={images.user2}
                        style={{
                            resizeMode: 'contain',
                            width: 140,
                            height: 150,
                        }}
                    />
                </View>
            </View>

            <TouchedButton >
                <View style={{
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    backgroundColor: color.white,
                    borderRadius: 20,
                    justifyContent: 'space-between',
                    marginTop: 30,
                }}>
                    <View style={{
                        marginVertical: 10
                    }}>
                        <Text style={{
                            ...typography.h5,
                        }}>Nama</Text>
                        <Text style={{
                            ...typography.p,
                        }}>Soekma Agus S</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: color.light
                    }} />
                    <View style={{
                        marginVertical: 10
                    }}>
                        <Text style={{
                            ...typography.h5,
                        }}>Email</Text>
                        <Text style={{
                            ...typography.p,
                        }}>soekma.as@gmail.com</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: color.light
                    }} />
                    <View style={{
                        marginVertical: 10
                    }}>
                        <Text style={{
                            ...typography.h5,
                        }}>Phone</Text>
                        <Text style={{
                            ...typography.p,
                        }}>+62 821 3850 000</Text>
                    </View>
                </View>
            </TouchedButton>
        </View>
    )
}
