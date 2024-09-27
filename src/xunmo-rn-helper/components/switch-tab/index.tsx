import { useWindowDimensions, View, ViewStyle } from "react-native"
import Flex from "../flex"
import Text from "../text"
import { memo } from "react"
import { STATUSBAR_HEIGHT } from "utils"
type SwitchOption = {
    name: string
    value: string | number
}
type SwitchTabs = {
    options: [SwitchOption, SwitchOption]
    active: number | string
    onToggle?: (value: string | number) => void
    containerStyle?: ViewStyle
}
function SwitchTabs(props: SwitchTabs) {

    const { height } = useWindowDimensions()
    const { options, active, onToggle } = props
    return (
        <Flex.Horizontal alignItems="center"
            style={{
                backgroundColor: "#F5528C", height: height * .07,
                paddingHorizontal: 10, borderRadius: 30,
                gap: 7,
                ...props.containerStyle
            }}>
            {
                options.map(item => {
                    return (
                        <Flex.Horizontal
                            alignItems="center"
                            justify="center" key={item.value}
                            onPress={() => onToggle && onToggle(item.value)}
                            style={{
                                flex: 1, height: height * .05,
                                backgroundColor: active != item.value ? "#F5528C" : "white",
                                borderRadius: 30,
                                shadowColor: "black",
                                shadowRadius: 30,
                            }}>
                            <Text.Heading fontWeight={"600"} color={active == item.value ? "#F5528C" : "white"}>{item.name}</Text.Heading>
                        </Flex.Horizontal>
                    )
                })
            }

        </Flex.Horizontal>
    )
}


export default memo(SwitchTabs)