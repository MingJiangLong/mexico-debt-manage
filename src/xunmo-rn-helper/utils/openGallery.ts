import ImagePicker from 'react-native-image-crop-picker';
type GalleryOption = {
    width: number
    height: number
    cropping: boolean
}

/**
 * 打开图册
 * @param option 
 * @returns 
 */
export default async function (option = {
    width: 300,
    height: 400,
    cropping: true,
    
}) {
    return ImagePicker.openPicker(option)
}