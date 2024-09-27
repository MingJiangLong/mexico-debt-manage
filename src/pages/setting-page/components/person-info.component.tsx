import { memo } from "react";
import { Image } from "react-native";
import { Text } from "xunmo-rn-helper/components";
import Flex from "xunmo-rn-helper/components/flex";

function PersonInfo() {



    return (
        <Flex.Horizontal alignItems="center">
            <Image source={require("assets/attention.png")} style={{ width: 70, height: 70 }} />
            <Text.Caption color={"#FFFFFF"}>947****429</Text.Caption>
        </Flex.Horizontal>
    )
}


export default memo(PersonInfo)