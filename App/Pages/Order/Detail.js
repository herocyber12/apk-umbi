import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { color, font, typography } from '../../Dependencies/Styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as images from '../../Assets/Images/index'
import numeral from 'numeral'
import Items from './Items'
import TouchedButton from '../../Component/TouchedButton'
 
const payments = [
    {
        id: 1,
        name: 'ovo',
        image: images.ovo
    },
]
export default function Detail() {
    const navigation = useNavigation()
    const [paymentID, setPaymentID] = useState(1)
    const { params } = useRoute()
    const [items, setitems] = useState([
        {
            id: 1,
            name: params.item.items ? params.item.items.name : "Kue akar kelapa",
            price: params.item.items ? params.item.items.price : 9000,
            qty: params.item.items ? params.item.items.qty : 1,
            image: params.item.items ? params.item.items.image : images.snack8
        },
    ])
    return (
        <FlatList
            data={items}
            keyExtractor={k => k.id.toString()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={(
                <>
                    {/* actions button */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 20,
                        marginBottom: 20
                    }}>
                        <View>
                            <Text style={{
                                ...typography.h1
                            }}>Pesanan </Text>
                            <Text style={{
                                ...typography.p
                            }}>{params.item.title}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            activeOpacity={.9}>
                            <View style={{
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: color.purple_1,
                            }}>
                                <Icon name="close" size={24} color={color.primary} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        padding: 20
                    }}>
                        <Text style={{
                            ...typography.h3,
                            color: color.dark
                        }}>Makanan</Text>
                    </View>
                </>
            )}

            ItemSeparatorComponent={() => (
                <View style={{
                    height: 20
                }} />
            )}
            renderItem={({ item }) => <Items item={item} />}

            ListFooterComponent={(
                <>

                    <View style={{
                        padding: 20
                    }}>
                        <Text style={{
                            ...typography.h3,
                            color: color.dark
                        }}>Pembayaran</Text>
                    </View>

                    <FlatList
                        data={payments}
                        keyExtractor={k => k.id.toString()}
                        ItemSeparatorComponent={() => (
                            <View style={{
                                height: 10
                            }} />
                        )}
                        renderItem={({ item }) => (
                            <TouchedButton
                                activeOpacity={.9}
                                onPress={() => setPaymentID(item.id)}>
                                <View style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 20,
                                    padding: 20,
                                    backgroundColor: color.white,
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <Image
                                        style={{
                                            resizeMode: 'contain',
                                            width: 80,
                                            height: 40,
                                            marginRight: 10
                                        }}
                                        source={item.image}
                                    />
                                    <Icon
                                        name={'ios-checkmark-circle'}
                                        size={24}
                                        color={color.yellow} />
                                </View>
                            </TouchedButton>
                        )}
                    />


                    <View
                        style={{
                            padding: 20,
                            marginHorizontal: 20
                        }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>

                            <Text style={{
                                fontSize: 20,
                                fontFamily: font.medium,
                                color: color.black_primary,
                            }}>Jumlah</Text>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: font.medium,
                                color: color.black_primary,
                            }}>1</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>

                            <Text style={{
                                ...typography.h3
                            }}>Total</Text>

                            <Text style={{
                                ...typography.h3
                            }}>{numeral(items[0].price * items[0].qty).format('0,0').replace(',', '.')}</Text>
                        </View>
                    </View>
                </>
            )}
        />

    )
}
