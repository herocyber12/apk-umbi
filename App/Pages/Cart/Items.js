import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import numeral from 'numeral'
import { font, color } from '../../Dependencies/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Items({ item, qtyItem }) {
    const [qty, setqty] = useState(item.qty)
    useEffect(() => {
        qtyItem(qty)
    }, [qty])
    return (
        <View style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            padding: 10,
            backgroundColor: color.white,
            borderRadius: 20,
        }}>
            <Image
                style={{
                    resizeMode: 'contain',
                    width: 120,
                    height: 120,
                    marginRight: 10
                }}
                source={item.image}
            />
            <View>
                <Text
                    ellipsizeMode={'tail'}
                    numberOfLines={1}
                    style={{
                        fontFamily: font.bold,
                        fontSize: 19,
                        color: color.black_primary,
                        textTransform: 'capitalize',

                    }}>{item.name}</Text>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 15
                }}>
                    {/* item name */}
                    <View style={{
                        paddingHorizontal: 10,
                        backgroundColor: color.yellow_1,
                        borderRadius: 30,
                        marginRight: 10,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: font.bold,
                            color: color.yellow_2
                        }}>{item.qty} Pcs</Text>
                    </View>
                    {/* item price */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}>
                        <Text style={{
                            fontFamily: font.regular,
                            marginRight: 5,
                            marginBottom: 3
                        }}>Rp</Text>
                        <Text style={{
                            fontSize: 21,
                            fontFamily: font.regular
                        }}>{numeral(item.price).format('0,0').replace(',', '.')}</Text>
                    </View>
                </View>
                {/* action */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                    onPress={() => setqty(qty > 1 ? qty - 1 : 0)}
                        activeOpacity={.8}>
                        <View
                            style={{
                                borderRadius: 5,
                                padding: 5,
                                backgroundColor: color.yellow_2
                            }}>
                            <Icon name="remove" size={16} color={color.white} />
                        </View>
                    </TouchableOpacity>

                    <Text style={{
                        fontFamily: font.bold,
                        width: 60,
                        textAlign: 'center',
                        fontSize: 16,
                        color: color.black_primary
                    }}>{qty} Pcs</Text>

                    <TouchableOpacity
                    onPress={() => setqty(qty + 1)}
                        activeOpacity={.8}
                    >
                        <View
                            style={{
                                borderRadius: 5,
                                padding: 5,
                                backgroundColor: color.yellow_2
                            }}>
                            <Icon name="add" size={16} color={color.white} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
