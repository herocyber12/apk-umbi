import React from 'react'
import { View, Text } from 'react-native'
import { font, typography, color } from '../../Dependencies/Styles'
import TouchedButton from '../../Component/TouchedButton'
import { useNavigation } from '@react-navigation/native'

export default function Activity() {
    const navigation = useNavigation()
    return (
        <View style={{
            padding: 20,
            paddingTop: 25
        }}>
            <Text style={{
                ...typography.h1,
            }}>Aktivitas</Text>

            <TouchedButton
                onPress={() => navigation.navigate('my_order')}>
                <View style={{
                    flexDirection: 'row',
                    padding: 30,
                    backgroundColor: color.white,
                    borderRadius: 20,
                    justifyContent: 'space-between',
                    marginTop: 30,
                    alignItems : 'center'
                }}>
                    <View>
                        <Text style={{
                            ...typography.h3,
                        }}>Pesananku</Text>
                        <Text style={{
                            ...typography.p,
                        }}>Lihat daftar pesanan saya</Text>
                    </View>

                    <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: color.purple_1,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <Text style={{
                                ...typography.h5,
                                color: color.primary
                            }}>7</Text>
                        </View>
                </View>
                
            </TouchedButton>
        </View>
    )
}
