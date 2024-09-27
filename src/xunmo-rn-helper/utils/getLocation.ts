import Geolocation, { GeolocationResponse } from '@react-native-community/geolocation';

/**
 * 获取定位
 * @returns 
 */
export default function () {
    return new Promise<GeolocationResponse>((s, e) => {
        Geolocation.getCurrentPosition(info => s(info), error => {
            e(error)
        });
    })
}