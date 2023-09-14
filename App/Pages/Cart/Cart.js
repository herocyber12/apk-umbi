import React, { useEffect, useLayoutEffect, useState } from 'react'
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
    {
        id: 2,
        name: 'gopay',
        image: images.gopay
    },
]
export default function Cart() {
    const navigation = useNavigation()
    const {params} = useRoute()
    const [paymentID, setPaymentID] = useState(1)
    const [items, setitems] = useState([
        {
            id: 1,
            name: params ?  params.item.name : "Kue akar kelapa",
            price: params ?  params.item.price : 9000,
            qty: 1,
            image: params ?  params.item.image : images.snack8
        },
    ])
    const [qty, setqty] = useState(1)
    const [total, setTotal] = useState(params ?  params.item.price : 9000)
 
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
                        <Text style={{
                            ...typography.h1
                        }}>Belanjaku</Text>
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
                            color : color.dark
                        }}>Makanan</Text>
                    </View>
                </>
            )}

            ItemSeparatorComponent={() => (
                <View style={{
                    height: 20
                }} />
            )}
            renderItem={({ item }) => <Items item={item} qtyItem={(e) => setqty(e)}/>}

            ListFooterComponent={(
                <>

                    <View style={{
                        padding: 20
                    }}>
                        <Text style={{
                            ...typography.h3,
                            color : color.dark
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
                                        name={
                                            item.id == paymentID
                                                ? 'ios-radio-button-on'
                                                : 'ios-radio-button-off'
                                        }
                                        size={24}
                                        color={
                                            item.id == paymentID
                                                ? color.yellow
                                                : color.dark
                                        } />
                                </View>
                            </TouchedButton>
                        )}
                    />


                    <View
                        style={{
                            borderTopRightRadius: 30,
                            borderTopLeftRadius: 30,
                            elevation: 25,
                            backgroundColor: color.white,
                            padding: 20,
                            paddingTop: 40,
                            marginTop: 40, 
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
                            }}>Terpilih</Text>
                            <Text style={{
                                fontSize: 20,
                                fontFamily: font.medium,
                                color: color.black_primary,
                            }}>{qty}</Text>
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
                            }}>{numeral(total * qty).format('0,0').replace(',', '.')}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('payment_auth',{item : items[0]})}
                            activeOpacity={.8}>

                            <View style={{
                                padding: 15,
                                backgroundColor: color.purple_1,
                                borderRadius: 50,
                                alignItems: 'center',
                                paddingHorizontal: 20,
                            }}>
                                <Text style={{
                                    fontFamily: font.bold,
                                    color: color.primary,
                                    fontSize: 20,
                                }}>Bayar Sekarang</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        />

    )
}
