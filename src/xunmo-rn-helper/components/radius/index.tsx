import { GestureResponderEvent, Image, StyleSheet, View, ViewStyle } from "react-native"
import Flex from "../flex"
import Text from "../text"
import { Fragment, memo, ReactNode, useMemo } from "react"
import { useCreateGroupStyle } from "xunmo-rn-helper/providers/GlobalStyleProvider"
import createGroupStyle from './styles/index'
import Icon from 'react-native-vector-icons/FontAwesome5';
export type RadiusProps = {
    checked?: boolean
    desc?: string | ReactNode | ReactNode[]
    onPress?: (e: GestureResponderEvent) => void
    checkedIcon?: ReactNode
    uncheckIcon?: ReactNode

    style?: ViewStyle
}

// TODO 图标改成icon
function XMRadius(props: RadiusProps) {
    const groupStyle = useCreateGroupStyle(createGroupStyle)
    const { desc } = props
    const icons = useMemo(() => {
        const { checked, checkedIcon, uncheckIcon, onPress } = props

        if (checkedIcon && checked) return checkedIcon;
        if (uncheckIcon && !checked) return uncheckIcon;

        let iconName = "circle";
        if (checked) iconName = "check-circle";

        return <Icon name={iconName}
            color={groupStyle.radius_checked.color}
            size={groupStyle.size_radius.width}
            onPress={onPress}
            style={{ paddingHorizontal: 3 }}
        />
    }, [props])

    const descNode = useMemo(() => {

        if (typeof desc === 'string') return <Text.RadiusCaption >{desc}</Text.RadiusCaption>
        if (Array.isArray(desc)) {
            return (
                <Flex.Horizontal>
                    {
                        desc.map((item, index) => <Fragment key={index}>{item}</Fragment>)
                    }
                </Flex.Horizontal>
            )
        }
        return desc
    }, [props.desc])
    return (
        <Flex.Horizontal alignItems="center" style={{ paddingVertical: 3, flex: 0, ...props.style }}>
            <View style={{ width: 25 }}>
                {
                    icons
                }
            </View>
            {
                descNode
            }
        </Flex.Horizontal>

    )
}

export default memo(XMRadius)