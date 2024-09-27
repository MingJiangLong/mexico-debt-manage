import { Image, useWindowDimensions } from "react-native";
import { calcHeight } from "utils";
import { Button, Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";
import Icon from "xunmo-rn-helper/components/icon";

type EmptyDebtProps = {
    onPress?: () => void
    title?: string
}
export default function (props: EmptyDebtProps) {
    const { onPress } = props
    const { width } = useWindowDimensions()
    return (
        <Flex.Vertical alignItems="center">
            <Image source={require("assets/empty-debt.png")} style={{ marginTop: 60 }} />
            <Text color={"#666666"} style={{ paddingTop: 12, paddingBottom: 23 }}>Aún no has agregado tu deuda</Text>
        </Flex.Vertical>
    )
}