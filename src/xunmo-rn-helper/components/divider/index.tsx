import { memo, useMemo } from "react"
import { StyleSheet, View, ViewStyle } from "react-native"
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider"
import createGroupStyle from "./styles"
export type DividerBaseProps = {
    direction: "horizontal" | "vertical",
    height?: ViewStyle["height"]
    width?: ViewStyle["width"]
    backgroundColor?: ViewStyle["backgroundColor"]
    style?: ViewStyle
}

type HorizontalProps = {
    direction: "horizontal" | "vertical",
    height: number
} & DividerBaseProps

type VerticalProps = {
    direction: "vertical",
    width: number
} & DividerBaseProps

function Divider(props: DividerBaseProps) {

    const { direction, height, width } = props

    const groupStyle = useCreateGroupStyle(createGroupStyle)
    const styles = useMemo(() => {
        let baseHorizontal = {
            height,
        }

        let baseVertical = {
            width,
        }

        return [groupStyle.base, direction === "vertical" ? baseVertical : baseHorizontal, props.style,]
    }, [props, groupStyle])
    return (
        <View
            style={styles}
        />
    )
}


export default memo(Divider)