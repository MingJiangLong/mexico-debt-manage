import { memo, ReactNode } from "react";
import Flex from "../flex";
import { StyleSheet, TextInput, TextInputProps, ViewStyle } from "react-native";
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider";
import createStyle from './styles'

type InputProps = {
    prefixNode?: ReactNode
    suffixNode?: ReactNode
    containerStyle?: ViewStyle
} & TextInputProps
function Input(props: InputProps) {

    const groupStyle = useCreateGroupStyle(createStyle);
    const { prefixNode, suffixNode } = props
    return (
        <Flex.Horizontal
            style={
                {
                    ...groupStyle.inputContainer,
                    ...props.containerStyle,

                }
            }>
            {
                !!prefixNode && prefixNode
            }
            <TextInput
                autoFocus
                placeholderTextColor={groupStyle.inputPlaceholderText.color}
                {
                ...props
                }
                style={[
                    {
                        flex: 1,
                    },
                    groupStyle.input,
                    groupStyle.inputCaptionText,
                    props.style,
                ]}
            />
            {
                !!suffixNode && suffixNode
            }
        </Flex.Horizontal>
    )
}

Input.displayName = "Input"
export default memo(Input)