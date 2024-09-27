import { memo, ReactNode } from "react"
import Input from "."
import { Image, StyleSheet, TextInputProps, TouchableOpacity } from "react-native"

type RadiusInputProps = {
    suffixNode?: ReactNode
    placeholder?: string
} & TextInputProps



function RadiusInput(props: RadiusInputProps) {
    return (
        <Input
            suffixNode={props.suffixNode}
            containerStyle={{
                borderColor: "#E2E1E2",
                borderRadius: 22,
                borderWidth: StyleSheet.hairlineWidth,
                marginTop: 10
            }}
            {
            ...props
            }
        />
    )
}

export default memo(RadiusInput)