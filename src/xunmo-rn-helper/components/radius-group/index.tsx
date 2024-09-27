import { memo, useCallback, useMemo } from "react"
import Flex from "../flex"
import Radius from "../radius"
import { ViewStyle } from "react-native"

export type Direction = "horizontal" | "vertical"
export type RadiusOption = {
    desc?: string
    value: string | number
}
type RadiusGroupProps = {
    direction?: Direction
    options: RadiusOption[]
    value?: string | number
    style?: ViewStyle
    onPress?: (value: string | number) => void
}
function RadiusGroup(props: RadiusGroupProps) {

    const { options, onPress } = props

    const Container = useMemo(() => {
        if (props.direction === "vertical") return Flex.Vertical
        return Flex.Horizontal
    }, [props])

    return (
        <Container style={props.style}>
            {
                options.map(item => <Radius
                    onPress={() => onPress && onPress(item.value)}
                    key={item.value} checked={item.value === props.value} desc={item.desc} />)
            }
        </Container>
    );

}

export default memo(RadiusGroup)