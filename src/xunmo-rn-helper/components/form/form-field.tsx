import { memo, PropsWithChildren, ReactNode, useMemo } from "react"
import Text from "../text"
import { StyleProp, View, ViewStyle } from "react-native"
import Icon from "../icon"
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider"
import { createGroupStyle } from "./styles"

type FormFieldProps = {
    caption: string | ReactNode
    required?: boolean
    name?: string
    style?: StyleProp<ViewStyle>
} & PropsWithChildren

function Field(props: FormFieldProps) {
    const { children, caption } = props;

    const captionNode = useMemo(() => {
        if (typeof caption === 'string') return (<Text.FormCaption>
            {caption}
        </Text.FormCaption>)

        if (!!!caption) return <></>
        return caption
    }, [caption])
    const groupStyle = useCreateGroupStyle(createGroupStyle)
    return (
        <View
            style={[
                groupStyle.formFieldContainer,
                {
                    flexDirection: "row",
                },
                props.style
            ]}
        >
            <View style={
                [
                    groupStyle.formIconContainer,
                    { alignItems: 'center', flexDirection: "row", }
                ]
            }>
                <Icon name="circle" size={4} color="#F782AC" solid />
            </View>
            <View style={{ flex: 1, flexDirection: 'column', }}>
                <View style={groupStyle.formCaptionContainer}>
                    {captionNode}
                </View>
                <View>
                    {children}
                </View>
            </View>
        </View>

    )
}

export default memo(Field)