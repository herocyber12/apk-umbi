import { PermissionsAndroid, Platform, ToastAndroid } from "react-native";
import RNBluetoothClassic from 'react-native-bluetooth-classic'

export const requestLocationPermissions = async () => {
    if (Platform.OS == 'android') {
        const hasLocationPermissions = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)

        if (!hasLocationPermissions) {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        };
    }

};

export const requestBluetoothPermission = () => {
    RNBluetoothClassic.isBluetoothEnabled().then(async state => {
        // console.log(state)
        if (!state) {
            try {
                let enabled = await RNBluetoothClassic.requestBluetoothEnabled();
                // console.log(enabled)
            } catch (error) {
                ToastAndroid.show({
                    text: `Error occurred while enabling bluetooth: ${error.message}`,
                    duration: 200
                })
            }

        }
    })
}