import { memo, PropsWithChildren, } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Portal } from "react-native-portalize";

type ModalScreenProps = {
    visible?: boolean
    style?: ViewStyle
} & PropsWithChildren
const ModalScreen = (props: ModalScreenProps,) => {
    const { visible, } = props
    return (

        !!visible && <Portal>
            <View style={[styles.container, props.style]}>
                {props.children}
            </View>
        </Portal>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
        justifyContent: 'center',
        alignItems: "center"
    },
    subContainer: {
        width: "94%",
        backgroundColor: "white",
        borderRadius: 10
    }
})


export default memo(ModalScreen)
