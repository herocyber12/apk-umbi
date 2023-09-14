import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { font, typography, color } from '../../Dependencies/Styles'
import TouchedButton from '../../Component/TouchedButton'
import { useNavigation } from '@react-navigation/native'
import numeral from 'numeral'
import Icon from 'react-native-vector-icons/Ionicons'

const orders = [
    {
        id: 1,
        title: 'OR-201224001',
        amount: 3000,
    },
    {
        id: 2,
        title: 'OR-201224002',
        amount: 4000,
    },
    {
        id: 3,
        title: 'OR-201224003',
        amount: 6000,
    },
    {
        id: 4,
        title: 'OR-201224004',
        amount: 7000,
    },
    {
        id: 5,
        title: 'OR-201224005',
        amount: 5000,
    },
    {
        id: 6,
        title: 'OR-201224006',
        amount: 6500,
    },
    {
        id: 7,
        title: 'OR-201224007',
        amount: 4500,
    },
]
export default function Order() {
    const navigation = useNavigation()
    return (
        <FlatList
            data={orders}
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
                        }}>Pesananku</Text>
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
                    onPress={() => navigation.navigate('detail_order', { item })}>
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
                            }}>{item.title}</Text>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                            }}>
                                <Text style={{
                                    fontFamily: font.medium,
                                    color: color.dark,
                                    marginRight: 5,
                                    fontSize: 14,
                                }}>Rp</Text>
                                <Text style={{
                                    fontSize: 18,
                                    fontFamily: font.medium,
                                    color: color.dark,
                                }}>{numeral(item.amount).format('0,0').replace(',', '.')}</Text>
                            </View>
                        </View>
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: color.yellow_1,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon name="ios-chevron-forward" size={32} color={color.yellow_2} />
                        </View>
                    </View>
                </TouchedButton>

            )}
        />
    )
}
