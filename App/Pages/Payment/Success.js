import React from 'react'
import { View, Text } from 'react-native'
import { color, typography } from '../../Dependencies/Styles'
import IoIcon from 'react-native-vector-icons/Ionicons'
import TouchedButton from '../../Component/TouchedButton'
import { useNavigation, CommonActions, useRoute } from '@react-navigation/native'
export default function Success() {
    const navigation = useNavigation()
    const {params} = useRoute()
    function goHome() {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'index'
                    }
                ]
            })
        )

        setTimeout(() => {
            navigation.navigate('detail_order',{
                item : {
                    id : 1,
                    title : 'OR-683829300',
                    amount : 10000,
                    items : params.item
                },
            })
        }, 1000);
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: color.white,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                marginVertical: 30
            }}>
                <IoIcon name="ios-checkmark-circle-outline" size={180} color={color.purple_1} />
            </View>
            <Text style={{
                ...typography.h1,
                color: color.primary
            }}>Transaksi Berhasil</Text>
            <Text style={{
                ...typography.p
            }}>No Pesanan #OR-33991031</Text>
            <View style={{
                width: '70%',
                borderBottomWidth: 1,
                borderBottomColor: color.gray,
                marginVertical: 10,
            }} />
            <Text style={{
                ...typography.p,
                fontSize: 16,
                marginHorizontal: 50,
                textAlign: 'center'
            }}>Silahkan mengambil makananmu dari vending machine</Text>
            <TouchedButton
                style={{
                    marginTop: 10,
                }}
                onPress={() => goHome()}>
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    backgroundColor: color.yellow_2,
                    borderRadius: 30
                }}>
                    <Text style={{
                        color: color.white,
                        fontWeight: 'bold'
                    }}>Kembali</Text>
                </View>
            </TouchedButton>
        </View>
    )
}
