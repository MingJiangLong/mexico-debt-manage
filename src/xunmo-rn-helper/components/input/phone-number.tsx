import { memo, ReactNode, useMemo } from "react"
import Text from "../text"
import { StyleSheet, TextInput, TextInputProps, TextStyle, View } from 'react-native'
import Input from './index'
type PhoneNumberInputProps = {
    prefix: string | number | ReactNode
    style?: TextStyle
} & TextInputProps
function PhoneNumberInput(props: PhoneNumberInputProps) {
    const { prefix } = props

    const prefixNode = useMemo(() => {

        if (typeof prefix === 'string' || prefix === 'number') return (
            <Text.InputCaption
                style={{
                    lineHeight: 27,
                }}
            >{prefix}</Text.InputCaption>
        )

        if (prefix === undefined) return <></>
        return prefix;
    }, [prefix])
    return (
        <Input
            prefixNode={
                <View style={{
                    borderRightColor: "#DCDCE0",
                    borderRightWidth: StyleSheet.hairlineWidth,
                    paddingRight: 10,
                }}>
                    {prefixNode}
                </View>
            }
            containerStyle={{
                borderBottomColor: "#DCDCE0",
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            {
            ...props
            }
        />
    )
}
PhoneNumberInput.displayName = "PhoneNumberInput"
export default memo(PhoneNumberInput)