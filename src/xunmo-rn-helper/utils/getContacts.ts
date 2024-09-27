import { Platform } from 'react-native'
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import { selectContact } from 'react-native-select-contact'
const IOS = "ios"
const ANDROID = 'android'

/**
 * 获取联系人
 * @param askInfoWhenAndroid 
 * @returns 
 */
export default async function (askInfoWhenAndroid: {
    title: string
    message: string
    buttonPositive: string
} = {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
    }) {

    try {
        if (Platform.OS === ANDROID) {
            await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, askInfoWhenAndroid)
        }


        return Contacts.getAll()
    } catch (error) {
        console.log("获取权限失败", error)
    }
}

export function pickContact() {
    return selectContact()
}