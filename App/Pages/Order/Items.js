import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import numeral from 'numeral'
import { font, color, typography } from '../../Dependencies/Styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Items({ item }) {
    const [qty, setqty] = useState(item.qty)
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
            <View style={{
                flex : 1,
                justifyContent : 'center'
            }}>
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
                    marginVertical: 10
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
                <View style={{
                    borderRadius: 10,
                    backgroundColor: color.success,
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 50,
                    marginRight : 'auto'
                }}>
                    <Text style={{
                        fontFamily : font.medium,
                        color : color.text_success,
                    }}>Selesai</Text>
                </View>
            </View>
        </View>
    )
}
