import {
    ButtonProps, GestureResponderEvent, ImageBackground,
    ImageSourcePropType, TouchableOpacity, ViewStyle
} from "react-native";
import { useCreateGroupStyle } from "../../providers/GlobalStyleProvider";
import createGroupStyle from "./styles";
import Text from "../text";
import LinearGradient from 'react-native-linear-gradient';
import { PropsWithChildren, PureComponent, ReactNode, useMemo, useState } from "react";

type ButtonTheme = "primary" | "ghost"

type XMButtonProps = Omit<ButtonProps, "title"> & {
    style?: ViewStyle
    loading?: false
    onPress?: (event: GestureResponderEvent) => void
    onPressIn?: (event: GestureResponderEvent) => void
    onPressOut?: (event: GestureResponderEvent) => void
    disabled?: boolean
    type?: ButtonTheme
    title?: string
} & PropsWithChildren
function XMButton(props: XMButtonProps) {
    const { onPress, children, disabled } = props
    const groupStyle = useCreateGroupStyle(createGroupStyle)

    const childrenNode = useMemo(() => {
        const { children, title } = props


        if (typeof children === 'string' || typeof title === 'string') {
            return <Text.ButtonCaption style={groupStyle.buttonText}>{children ?? title}</Text.ButtonCaption>
        }
        return children ?? title
    }, [props])
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={(e) => onPress && onPress(e)}
            style={[
                groupStyle.buttonBaseContainer,
                groupStyle.ghostButtonContainer,
                props.style,
                {
                    opacity: props.disabled ? 0.6 : 1
                }
            ]}>

            {
                childrenNode
            }
        </TouchableOpacity>

    )
}

type LinearGradientButtonProps = {
    color?: Array<string | number>
    title?: string
    disabled?: boolean
    onPress?: (event: GestureResponderEvent) => void
} & PropsWithChildren



function LinearGradientButton(props: LinearGradientButtonProps) {
    const { color, onPress } = props
    const groupStyle = useCreateGroupStyle(createGroupStyle)
    return (
        <TouchableOpacity
            onPress={(e) => onPress && onPress(e)}
        >
            <LinearGradient colors={color ?? groupStyle.linearGradientBg.color} style={[groupStyle.linearGradient,]}>
                <Text.ButtonCaption style={groupStyle.buttonText}>{props.title ?? props.children}</Text.ButtonCaption>
            </LinearGradient>
        </TouchableOpacity>)
}

type ImageButtonProps = {
    backgroundImage: ImageSourcePropType
    width?: number
    height?: number
    onPress?: (e: GestureResponderEvent) => void
    title?: ReactNode
    disabled?: boolean
    disabledBackgroundImage?: ImageSourcePropType
    style?: ViewStyle
} & PropsWithChildren
function ImageButton(props: ImageButtonProps) {
    const { backgroundImage, width, height, onPress, title, children } = props

    const childrenNode = useMemo(() => {
        const { children, title } = props


        if (typeof children === 'string' || typeof title === 'string') {
            return <Text.ButtonCaption >{title}</Text.ButtonCaption>
        }
        return children ?? title
    }, [props])
    return (
        <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center', }}
            onPress={e => onPress && onPress(e)}
        >

            <ImageBackground
                source={backgroundImage}
                style={[{ width, height, alignItems: 'center', justifyContent: 'center', }, props.style]}>
                {
                    childrenNode
                }
            </ImageBackground>
        </TouchableOpacity>
    )
}


export default class Button extends PureComponent<XMButtonProps, any> {
    static Primary(props: XMButtonProps) {
        return <XMButton {...props} />
    }

    static Ghost(props: XMButtonProps) {
        return <XMButton {...props} />
    }

    static LinearGradient(props: LinearGradientButtonProps) {
        return <LinearGradientButton {...props} />
    }

    static Image(props: ImageButtonProps) {
        return <ImageButton {...props} />
    }

    render() {
        return <XMButton {...this.props} />
    }

}
