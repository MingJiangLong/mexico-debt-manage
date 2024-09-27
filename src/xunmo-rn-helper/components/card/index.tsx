import { memo, PropsWithChildren, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import Flex from "xunmo-rn-helper/components/flex";
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider";
import { createGroupStyle } from "./styles";

type CardProps = {
    style?: ViewStyle
} & PropsWithChildren

function Card(props: CardProps) {

    const { children } = props
    const groupStyle = useCreateGroupStyle(createGroupStyle)

    const innerStyle = useMemo(() => {
        return {
            ...groupStyle.container,
            ...props.style
        }
    }, [props, groupStyle])

    return (
        <View style={[innerStyle, { elevation: 10, shadowColor: 'red' }]}>
            {children}
        </View>
    )


}

export default memo(Card)