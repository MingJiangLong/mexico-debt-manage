import { Image, ImageBackground, ImageSourcePropType, StatusBar, StyleSheet, Touchable, TouchableOpacity, View } from "react-native"
import Flex from "xunmo-rn-helper/components/flex"
import TinyStepsComponent from "./tiny-steps.component"
import { ReactNode, useEffect } from "react"
import { calcAutoHeightFixedWidth } from "utils"

type FlashProps = {
    flashIndex: number
    topImage: ImageSourcePropType
    button: ReactNode
}
export default function (props: FlashProps) {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                hidden
                translucent
            />
            <Image source={props.topImage} style={calcAutoHeightFixedWidth(375 / 556, "1")} resizeMode="cover" />

            <TinyStepsComponent count={3} active={props.flashIndex} />
            <Flex.Horizontal alignItems="center" justify="center" >
                {props.button}
            </Flex.Horizontal>
        </View>
    )


}