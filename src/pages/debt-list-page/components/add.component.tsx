import { memo } from "react";
import { useWindowDimensions } from "react-native";
import { calcHeight } from "utils";
import { Button, Flex, Icon, Text } from "xunmo-rn-helper/components";

type AddProps = {
    onPress?: () => void
}

function Add(props: AddProps) {
    const { onPress } = props
    const { width } = useWindowDimensions()
    return (
        <Button.Image backgroundImage={require("assets/btn_343_58.png")} width={width * .91}
            onPress={onPress}
            height={calcHeight(343 / 58, width * .91)}
        >
            <Flex.Horizontal alignItems="center" >
                <Icon name="plus-circle" size={18} color={"white"} style={{ paddingHorizontal: 10 }} />
                <Text.ButtonCaption>Añadir</Text.ButtonCaption>
            </Flex.Horizontal>
        </Button.Image>
    )
}

export default memo(Add)