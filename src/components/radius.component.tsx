import { memo } from "react";
import { StyleSheet } from "react-native";
import Icon from "xunmo-rn-helper/components/icon";
import Radius, { RadiusProps } from "xunmo-rn-helper/components/radius";

function XMRadius(props: RadiusProps) {

    const { onPress } = props
    return <Radius
        {...props}
        checkedIcon={
            <Icon name="dot-circle" solid color="#F5528C" size={16} style={styles.iconStyle} onPress={onPress} />
        }
        uncheckIcon={
            <Icon name="circle" color="#999999" size={16} style={styles.iconStyle} onPress={onPress} />
        }
    />
}
const styles = StyleSheet.create({
    iconStyle: {
        paddingRight: 7
    }
})

export default memo(XMRadius)