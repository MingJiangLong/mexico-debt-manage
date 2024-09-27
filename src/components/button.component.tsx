import { ImageBackground, ImageBackgroundProps, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Text } from "xunmo-rn-helper/components";

type ImageButtonProps = {
    backgroundImage: ImageSourcePropType
    width: number
    height: number
}
export default function () {
    return (
        <TouchableOpacity>
            <ImageBackground source={require("assets/btn-bg.png")} resizeMode="stretch">
                <Text.Caption>文字</Text.Caption>
            </ImageBackground>
        </TouchableOpacity>
    )
}