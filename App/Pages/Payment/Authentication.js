import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, StatusBar, BackHandler, FlatList, TouchableNativeFeedback, ProgressBarAndroid } from 'react-native'
import { typography, color } from '../../Dependencies/Styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Authentication() {
    const [colorStatusbar, setcolorStatusbar] = useState(color.primary)
    const navigation = useNavigation()
    const {params} = useRoute()
    const [codes, setCodes] = useState([
        {
            id: 1,
            code: null
        },
        {
            id: 2,
            code: null
        },
        {
            id: 3,
            code: null
        },
        {
            id: 4,
            code: null
        },
    ])

    const [rippleColor, setRippleColor] = useState(color.purple_1);
    const [rippleOverflow, setRippleOverflow] = useState(true);
    const [keypad, setKeypad] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 'back', 0, 'del'])
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {
        StatusBar.setBarStyle(colorStatusbar == color.primary ? 'light-content' : 'dark-content')
        StatusBar.setBackgroundColor(colorStatusbar)
    })
    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => {
                navigation.goBack()
                setcolorStatusbar(color.white)
            }
        );

        return () => backHandler.remove();
    })

    function pressNumber(item) {
        switch (item) {
            case 'back':
                navigation.goBack()
                setcolorStatusbar(color.white)
                break;
            case 'del':
                const defaultCodes = codes.map(data => {
                    data.code = null
                    return data
                })
                // console.log(defaultCodes)
                setCodes(defaultCodes)
                break;
            default:
                const newCodes = codes.filter(item => item.code == null)
                const fillCodes = codes.filter(item => item.code !== null)
                if (!newCodes.length) return
                newCodes[0].code = item
                setCodes([...fillCodes, ...newCodes])
                processingPayment()

                break;
        }

    }

    function processingPayment() {
        const checkFillCodes = codes.filter(item => item.code !== null)
        if (checkFillCodes.length == codes.length) {
            setLoading(true)

            setTimeout(() => {
                navigation.navigate('payment_success',{item : params.item})
                setcolorStatusbar(color.white)
            }, 3000);
        }
    }
    return (
        <FlatList
            data={keypad}
            keyExtractor={k => k.toString()}
            style={{
                padding: 20,
                backgroundColor: color.primary
            }}
            ListHeaderComponent={(
                <>

                    <Text style={{
                        ...typography.h1,
                        color: color.white
                    }}>Kode Keamanan</Text>

                    {
                        loading
                            ? <View style={{
                                marginVertical: 80
                            }}>
                                <ProgressBarAndroid color={color.white} />
                            </View>
                            : <FlatList
                                data={codes}
                                keyExtractor={k => k.id.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={() => (
                                    <View style={{
                                        width: 30
                                    }} />
                                )}
                                style={{
                                    marginVertical: 100
                                }}
                                contentContainerStyle={{
                                    flexGrow: 1,
                                    justifyContent: 'center',
                                }}
                                renderItem={({ item, index }) => (
                                    <View style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 20,
                                        borderWidth: 3,
                                        borderColor: color.purple_1,
                                        backgroundColor: item.code !== null ? item.code : color.purple_1
                                    }} />
                                )}
                            />
                    }
                </>
            )}
            numColumns={3}
            renderItem={({ item }) => (
                <TouchableNativeFeedback
                    onPress={() => pressNumber(item)}
                    background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}>
                    <View style={{
                        flex: 1,
                        padding: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {
                            item == 'back' && <Icon name="arrow-left" size={24} color={color.white} />
                            || item == 'del' && <Icon name="remove" size={24} color={color.white} />
                            ||
                            <Text style={{
                                ...typography.h3,
                                color: color.white
                            }}>{item}</Text>
                        }
                    </View>
                </TouchableNativeFeedback>
            )}
        />
    )
}
