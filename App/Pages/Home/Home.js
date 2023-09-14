import React, { useState, useEffect, useRef } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { font, color, typography } from '../../Dependencies/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import MciIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import numeral from 'numeral'
import { useNavigation } from '@react-navigation/native'
import * as images from '../../Assets/Images/index'
import TouchedButton from '../../Component/TouchedButton'

const categories = [
    {
        id: 1,
        name: 'Camilan',
    },
    {
        id: 2,
        name: 'Minuman',
    },
    {
        id: 3,
        name: 'Makanan',
    },
]
const snacks = [
    {
        id: 1,
        name: 'Kue akar kelapa',
        price: 9000,
        qty: 1,
        image: images.snack8
    },
    {
        id: 2,
        name: 'Jamur kuping',
        price: 9500,
        qty: 10,
        image: images.snack9
    },
    {
        id: 3,
        name: 'Moto maling',
        price: 10000,
        qty: 5,
        image: images.snack10
    },
    {
        id: 4,
        name: 'fitbar',
        price: 5000,
        qty: 7,
        image: images.snack4
    },
    {
        id: 5,
        name: 'fitchips',
        price: 3500,
        qty: 10,
        image: images.snack5
    },
    {
        id: 6,
        name: 'potabee',
        price: 2500,
        qty: 8,
        image: images.snack6
    },
    {
        id: 7,
        name: 'wafello',
        price: 3000,
        qty: 9,
        image: images.snack7
    },
    {
        id: 8,
        name: 'fitchips',
        price: 4000,
        qty: 10,
        image: images.snack3
    },
    {
        id: 9,
        name: 'potabee',
        price: 2500,
        qty: 12,
        image: images.snack6
    },
    {
        id: 10,
        name: 'wafello',
        price: 3000,
        qty: 14,
        image: images.snack1
    },
]
const drinks = [
    {
        id: 11,
        name: 'Capuccino',
        price: 22000,
        qty: 5,
        image: images.drink11
    },
    {
        id: 1,
        name: 'coca cola',
        price: 4500,
        qty: 15,
        image: images.drink1
    },
    {
        id: 2,
        name: 'fanta',
        price: 2300,
        qty: 10,
        image: images.drink2
    },
    {
        id: 3,
        name: 'milku',
        price: 1700,
        qty: 5,
        image: images.drink3
    },
    {
        id: 4,
        name: 'teh pucuk',
        price: 5000,
        qty: 7,
        image: images.drink4
    },
    {
        id: 5,
        name: 'pulpy',
        price: 3500,
        qty: 10,
        image: images.drink5
    },
    {
        id: 6,
        name: 'sprite',
        price: 2500,
        qty: 8,
        image: images.drink6
    },
    {
        id: 7,
        name: 'tebs',
        price: 3000,
        qty: 9,
        image: images.drink7
    },
    {
        id: 8,
        name: 'ultra milk',
        price: 4000,
        qty: 10,
        image: images.drink8
    },
    {
        id: 9,
        name: 'zoda',
        price: 2500,
        qty: 12,
        image: images.drink9
    },
    {
        id: 10,
        name: 'bintang',
        price: 3000,
        qty: 14,
        image: images.drink10
    },
]
const foods = [
    {
        id: 1,
        name: 'udang goreng',
        price: 4500,
        qty: 15,
        image: images.food1
    },
    {
        id: 2,
        name: 'kornet',
        price: 2300,
        qty: 10,
        image: images.food2
    },
    {
        id: 3,
        name: 'tahu bulat',
        price: 1700,
        qty: 5,
        image: images.food3
    },
    {
        id: 4,
        name: 'cireng',
        price: 5000,
        qty: 7,
        image: images.food4
    },
    {
        id: 5,
        name: 'samosa',
        price: 3500,
        qty: 10,
        image: images.food5
    },
    {
        id: 6,
        name: 'kornet sapi',
        price: 2500,
        qty: 8,
        image: images.food6
    },
    {
        id: 7,
        name: 'pastel',
        price: 3000,
        qty: 9,
        image: images.food7
    },
    {
        id: 8,
        name: 'sosis',
        price: 4000,
        qty: 10,
        image: images.food8
    },
    {
        id: 9,
        name: 'pizza mini',
        price: 2500,
        qty: 12,
        image: images.food9
    },
    {
        id: 10,
        name: 'bakso',
        price: 3000,
        qty: 14,
        image: images.food10
    },
    {
        id: 11,
        name: 'kaki naga',
        price: 3200,
        qty: 12,
        image: images.food11
    },
    {
        id: 12,
        name: 'tempura',
        price: 2400,
        qty: 15,
        image: images.food12
    },
    {
        id: 13,
        name: 'dimsum',
        price: 2800,
        qty: 10,
        image: images.food13
    },
    {
        id: 14,
        name: 'cireng rujak',
        price: 2800,
        qty: 10,
        image: images.food4
    },
]
export default function Home() {
    const navigation = useNavigation()
    const [items, setitems] = useState(snacks)
    const [caID, setCaID] = useState(1)

    useEffect(() => {
        const itemsArr = caID == 1 && snacks || caID == 2 && drinks || caID == 3 && foods || []
        setitems(itemsArr)
    }, [items, caID])

    return (
        <>
            {/* FLATLIST */}
            <FlatList
                data={items}
                keyExtractor={k => k.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 10
                }}
                ListHeaderComponent={(
                    <View style={{
                        paddingHorizontal: 10
                    }}>
                        {/* HEADER */}
                        <View style={{
                            paddingTop: 25,
                            paddingBottom: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={{
                                    ...typography.h1,
                                }}>Hai Soekma</Text>
                                <Text style={{
                                    fontFamily: font.regular,
                                    fontSize: 21,
                                    marginTop: 5,
                                    color: color.dark
                                }}>Mau cari apa nih ?</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <TouchedButton>
                                <Icon name="ios-search-outline" size={32} color={color.dark} style={{
                                    marginRight: 10
                                }} />
                                </TouchedButton>
                                <TouchedButton
                                onPress={() => navigation.navigate('cart')}>
                                    <MciIcon name="shopping" size={32} color={color.yellow_2} />
                                </TouchedButton>
                            </View>
                        </View>

                        {/* CATEGORIES */}
                        <FlatList
                            data={categories}
                            keyExtractor={k => k.id.toString()}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchedButton
                                    onPress={() => setCaID(item.id)}>
                                    <View style={{
                                        padding: 15,
                                        borderRadius: 15,
                                        marginRight: 10,
                                        backgroundColor: caID == item.id ? color.purple_1 : color.white
                                    }}>
                                        <Text style={{ 
                                            fontFamily : font.medium,
                                            fontSize : 16,
                                            color: caID == item.id ? color.primary : color.dark
                                        }}>{item.name}</Text>
                                    </View>
                                </TouchedButton>
                            )}
                        />

                        {/* TOP ITEM */}
                        <View style={{
                            marginVertical: 20
                        }}>
                            <Text style={{
                                ...typography.h2
                            }}>Populer</Text>
                        </View>
                    </View>
                )}
                renderItem={({ item, index }) => (
                    <TouchedButton
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                            marginVertical: 10
                        }}
                        onPress={() => navigation.navigate('detail_item', { item })}
                    >
                        <View style={{
                            padding: 15,
                            borderRadius: 20,
                            backgroundColor: color.white,
                        }}>
                            <Image
                                source={item.image}
                                style={{
                                    resizeMode: 'contain',
                                    width: '100%',
                                    height: 120
                                }}
                            />
                            <Text
                                ellipsizeMode={'tail'}
                                numberOfLines={1}
                                style={{
                                    fontFamily: font.bold,
                                    color: color.black_dim,
                                    fontSize: 21,
                                    textTransform: 'capitalize',

                                }}>{item.name}</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10
                            }}>
                                <View style={{
                                    padding: 7,
                                    backgroundColor: color.yellow_1,
                                    borderRadius: 10
                                }}>
                                    <Text style={{
                                        fontFamily: font.bold,
                                        color: color.yellow_2
                                    }}>{item.qty} Pcs</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                }}>
                                    <Text style={{
                                        fontFamily: font.regular,
                                        marginRight: 2
                                    }}>Rp</Text>
                                    <Text style={{
                                        fontSize: 21,
                                        fontFamily: font.regular
                                    }}>{numeral(item.price).format('0,0').replace(',', '.')}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchedButton>
                )}
            />
        </>
    )
}
