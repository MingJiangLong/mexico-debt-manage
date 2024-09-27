import { calcAutoHeightFixedWidth } from "utils"
import Flex from "../flex"
import { memo, useState } from "react"
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import Icon from "../icon"
import { ImageBackground, TouchableOpacity } from "react-native";
type CameraProps = {
    onChooseImage?: (image: ImageOrVideo) => void
}
function Camera(props: CameraProps) {
    const { onChooseImage } = props
    const [imageOrVideo, setImageOrVideo] = useState<ImageOrVideo>()
    async function onPressBtn() {
        const result = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
        setImageOrVideo(result)
        onChooseImage && onChooseImage(result)
    }



    return (
        <>
            {
                imageOrVideo ? (
                    <TouchableOpacity onPress={onPressBtn}>
                        <ImageBackground
                            source={{ uri: imageOrVideo.sourceURL }}
                            style={{ ...calcAutoHeightFixedWidth(1, ".3"), }}
                        />
                    </TouchableOpacity>
                ) : (

                    <Flex.Horizontal
                        onPress={onPressBtn}
                        style={{
                            ...calcAutoHeightFixedWidth(1, ".3"),
                            backgroundColor: "#F9F9F9"
                        }} justify="center" alignItems="center">
                        <Icon name="plus" color={"#CECECE"} size={30} style={{ fontWeight: "normal" }} />
                    </Flex.Horizontal>
                )
            }
        </>
    )
}

export default memo(Camera)