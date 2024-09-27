import { memo } from "react"
import { StyleSheet, View } from "react-native"
import Flex from "xunmo-rn-helper/components/flex"

type TinyStepsProps = {
    active: number
    count: number
}
function TinySteps(props: TinyStepsProps) {
    const { active, count } = props
    const countArr = new Array(count).fill(1)
    return (
        <Flex.Horizontal justify="center" style={{ height: 30 }} alignItems="center">
            {
                countArr.map((_item, index) => {
                    return <View
                        key={index}
                        style={[
                            index === active ? styles.active : styles.inactive,
                            { marginHorizontal: 3 }

                        ]} />
                })
            }
        </Flex.Horizontal>
    )
}

const styles = StyleSheet.create({
    active: {
        backgroundColor: "#333333",
        width: 26,
        height: 8,
        borderRadius: 6
    },
    inactive: {
        backgroundColor: "#999999",
        width: 8,
        height: 8,
        borderRadius: 8
    }
})


export default memo(TinySteps)