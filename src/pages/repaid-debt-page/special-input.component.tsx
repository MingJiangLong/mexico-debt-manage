import { View, TextInput } from "react-native";
import { Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";

type SpecialProps = {
    value?: string
    onTextChange?: (value: string) => void
    editable?: boolean

}
export default function (props: SpecialProps) {

    const { value, onTextChange, editable } = props
    return (
        <View
            style={{
                borderBottomWidth: 1,
                borderColor: "#E2E2E2",
                flexDirection: "row",
                alignItems: "center",
                position: "relative"
            }}>
            <View style={{
                width: 40, height: 40,
                borderRightColor: "#E2E2E2", borderRightWidth: 1
            }}>
                <Text fontSize={36} color={"#333333"} fontWeight={"500"}>$</Text>
            </View>
            <TextInput
                style={{ flex: 1, fontSize: 44, fontWeight: 900, paddingVertical: 10, paddingHorizontal: 10 }}
                keyboardType="numeric"
                value={value}
                editable={editable}
                onChangeText={e => onTextChange && onTextChange(e)}
            />
            <View style={{
                position: "absolute",
                width: 16, height: 16,
                borderRightWidth: 1, borderBottomWidth: 1, borderColor: "#E2E2E2",
                backgroundColor: "white",
                transform: [
                    {
                        rotateX: "35deg"
                    },
                    {
                        rotateZ: "45deg"
                    }

                ],
                bottom: -8,
                left: 8

            }} />
        </View>
    )
}