import ImagePicker from 'react-native-image-crop-picker';

/**
 * 打开相机
 * @param option 
 * @returns 
 */
export default function (option = {
    width: 300,
    height: 400,
    cropping: true,
}) {
    try {
        return ImagePicker.openCamera(option)
    } catch (error) {
        console.log("打开相机失败", error);
    }
}