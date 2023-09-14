import React, { useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MciIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color, typography, font } from '../../Dependencies/Styles'
import numeral from 'numeral'
import { useNavigation, useRoute } from '@react-navigation/native'

const SCREEN_WIDTH = Dimensions.get('window').width
const desc = `Fitchips multigrain diolah dengan biji-bijian seperti oat, quinoa dan gandum utuh.

Paduan rasa honey bbq membuat cemilan ini manis dan gurih.

Ingredients:
Keripik multigrain( tepung jagung, tepung gandum utuh, tepung beras, tepung oat utuh, tepung quinoa utuh, minyak sawit, bumbu madu barbekyu, antioksidan askorbil palmitat dan tokoferol campuran).

✅ Bebas Pengawet
✅ Bebas Pewarna
✅ Bebas MSG
✅ Bebas Pemanis Buatan

👍 Rendah Indeks Glikemik
👍 Kaya Serat & Asam Aminio
👍 Tinggi Antioksidan


Berat bersih: 50 gr
Berat produk: 60 gr
Kemasan: Aluminium foil`
const default_line_height = 130
export default function Detail() {
    const [qty, setqty] = useState(1)
    const [textLine, settextLine] = useState(default_line_height)
    const navigation = useNavigation()
    const { params } = useRoute()
    return (
        <>

            {/* CONTENT */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    backgroundColor: color.white,
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 50,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: 20
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
                        <TouchableOpacity
                            onPress={() => navigation.navigate('cart',{item : params.item})}
                            activeOpacity={.9}>
                            <View style={{
                                padding: 10,
                                borderRadius: 10,
                                backgroundColor: color.yellow_1,
                            }}>
                                <MciIcon name="shopping" size={24} color={color.yellow} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={params.item.image}
                        style={{
                            resizeMode: 'contain',
                            width: SCREEN_WIDTH - 20,
                            height: 400,
                            borderRadius : 10,
                            alignSelf : 'center'
                        }}
                    />
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        padding: 20,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
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
                                    <Icon name="remove" size={24} color={color.white} />
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
                                    <Icon name="add" size={24} color={color.white} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{
                    padding: 20
                }}>
                    {/* TITLE */}
                    <View>
                        <Text style={{
                            ...typography.h1,
                            textTransform : 'capitalize'
                        }}>{params.item.name}</Text>
                    </View>
                    {/* INFO LIKE & STAR */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 10
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Icon name="heart" size={24} color={color.red} />
                            <Text style={{
                                ...typography.p,
                                marginLeft: 5,
                            }}>Terlaris</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Icon name="ios-star" size={24} color={color.yellow} />
                            <Text style={{
                                ...typography.p,
                                fontFamily: font.bold,
                                marginHorizontal: 5
                            }}>5.0</Text>
                            <Text style={{
                                ...typography.p,
                            }}>(1204 Ulasan)</Text>
                        </View>
                    </View>

                    {/* DESCRIPTION */}
                    <Text
                        style={{
                            ...typography.p,
                            textAlign: 'justify',
                            height: textLine,
                            color: color.dark
                        }}>{desc}</Text>
                    {/* COLLAPSING BUTTON TEXT */}
                    <TouchableOpacity style={{
                        marginVertical: 10,
                        alignSelf: 'center'
                    }}
                        activeOpacity={.7}
                        onPress={() => settextLine(textLine !== 'auto' ? 'auto' : default_line_height)}
                    >
                        <View style={{
                            backgroundColor: color.light_bone,
                            padding: 5,
                            borderRadius: 20,
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontFamily: font.medium,
                                paddingHorizontal: 10,
                                color: color.dark
                            }}>
                                {textLine == 'auto' ? "Perkecil" : "Selengkapnya"}
                            </Text>
                        </View>
                    </TouchableOpacity>


                    {/* DELIVERY */}
                    <View>
                        <Text style={{
                            ...typography.h3
                        }}>Pengiriman</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop : 10
                        }}>
                            <Icon name="time-outline" size={24} color={color.primary} />
                            <Text style={{
                                marginLeft: 5
                            }}>30 menit</Text>

                        </View>
                    </View>

                </View>

            </ScrollView>
            {/* BUTTON ADD */}
            <View
                style={{
                    position: 'relative',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 999,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    elevation: 25,
                    backgroundColor: color.white,
                }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 15,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        paddingLeft: 10
                    }}>
                        <Text style={{
                            fontFamily: font.medium,
                            color: color.black_primary,
                            marginRight: 5,
                            fontSize: 16,
                            marginBottom: 3
                        }}>Rp</Text>
                        <Text style={{
                            fontSize: 32,
                            fontFamily: font.medium,
                            color: color.black_primary,
                        }}>{numeral(params.item.price).format('0,0').replace(',', '.')}</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('cart',{item : params.item})}
                        activeOpacity={.8}>
                        <View style={{
                            padding: 10,
                            backgroundColor: color.yellow_1,
                            flexDirection: 'row',
                            borderRadius: 50,
                            alignItems: 'center',
                            paddingHorizontal: 20
                        }}>
                            <MciIcon name="shopping" size={24} color={color.yellow} />
                            <Text style={{
                                fontFamily: font.bold,
                                color: color.yellow,
                                fontSize: 14,
                                marginLeft: 5
                            }}>Tambah ke Keranjang</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
