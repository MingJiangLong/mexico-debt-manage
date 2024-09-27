import { PropsWithChildren, useMemo } from "react";
import {
    FlexAlignType, FlexStyle, GestureResponderEvent,
    StyleProp, StyleSheet, TouchableWithoutFeedback,
    View, ViewStyle
} from "react-native";
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider";
import createGroupStyle from "./styles/index"

type FlexStyleBaseProps = {
    alignItems?: FlexAlignType
    justify?: FlexStyle["justifyContent"]
    style?: ViewStyle
    flex?: FlexStyle["flex"]
}

type HorizontalProps = {
    onPress?: (event: GestureResponderEvent) => void
} & PropsWithChildren & FlexStyleBaseProps

type VerticalProps = {
    onPress?: (event: GestureResponderEvent) => void
} & PropsWithChildren & FlexStyleBaseProps

type FlexItemProps = {
    flex: FlexStyle["flex"]
    style?: StyleProp<ViewStyle>
} & PropsWithChildren



/**
 * !TODO: Fixed 有时候不加flex:1 app崩溃
 * 如果子元素都未touchOpacity标签崩溃
 * @param props 
 * @returns 
 */
function Horizontal(props: HorizontalProps) {
    return <BasicFlex flexDirection="horizontal" {...props} />
}


function Vertical(props: VerticalProps) {
    return <BasicFlex flexDirection="vertical" {...props} />
}


type BasicFlexProps = {
    onPress?: (event: GestureResponderEvent) => void
    flexDirection: "vertical" | "horizontal"
} & FlexStyleBaseProps & PropsWithChildren

function BasicFlex(props: BasicFlexProps) {
    const { onPress, flexDirection, flex } = props
    const groupStyle = useCreateGroupStyle(createGroupStyle)
    const calcStyle = useMemo(() => {
        const base = StyleSheet.create({
            flex_base: {
                alignItems: props.alignItems ?? "baseline",
                justifyContent: props.justify ?? "flex-start"
            }
        })

        return [
            flexDirection === 'vertical' ? groupStyle.flex_vertical : groupStyle.flex_horizontal,
            base.flex_base,
            flex != undefined ? { flex } : {}
        ]

    }, [groupStyle, props, props.style])
    return (
        <TouchableWithoutFeedback onPress={e => onPress && onPress(e)} >
            <View style={[calcStyle, props.style]}>
                {props.children}
            </View>
        </TouchableWithoutFeedback>
    )
}

function Item(props: FlexItemProps) {
    return (
        <View style={[{ flex: props.flex ?? 1 }, props?.style]}>
            {props.children}
        </View>
    )
}

export default {
    Vertical,
    Horizontal,
    Item
}


