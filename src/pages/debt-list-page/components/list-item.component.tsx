import { useNavigation } from "@react-navigation/native";
import { UseNavigationProps } from "@types";
import { AppRouteName, DebtType } from "constant";
import dayjs from "dayjs";
import { memo, useMemo } from "react";
import { Image } from "react-native";
import { Debt } from "store/useDebt";
import { Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";
import Icon from "xunmo-rn-helper/components/icon";
const lendImage = require("assets/lend.png")
const borrowImage = require("assets/borrow.png")

type DebtListItemProps = {
    onPress: () => void
} & Partial<Debt>
function ListItem(props: DebtListItemProps) {

    const { record = [], type, onPress } = props
    const total = useMemo(() => {
        return record.reduce((pre, current) => {
            return pre + Number(current.money)
        }, 0)
    }, [props])

    const color = useMemo(() => {
        return type == DebtType.Lend ? "#FFA914" : "#0081F9"
    }, [type])

    const navigation = useNavigation<UseNavigationProps>()
    return (
        <Flex.Horizontal style={{ padding: 16, backgroundColor: "white", borderRadius: 10 }} alignItems="center"
            onPress={() => {
                onPress && onPress()
            }}
        >
            <Image source={props?.type == DebtType.Lend ? lendImage : borrowImage} style={{ marginRight: 6 }} />
            <Flex.Vertical flex={1}>
                <Text>{props?.debtName}</Text>
                <Text color={"#999999"} style={{ paddingTop: 5 }}>{props.startTime}</Text>
            </Flex.Vertical>
            <Text.Heading color={color} fontSize={20} style={{
                maxWidth: 100,
            }}>${Math.abs(total)}</Text.Heading>
            <Icon name="angle-right" size={20} color={color} style={{ marginLeft: 10 }} />
        </Flex.Horizontal>
    )
}


export default memo(ListItem)