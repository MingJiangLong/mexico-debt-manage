import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export default (globalStyle: GlobalStyleType) => StyleSheet.create({

    base: {
        backgroundColor: globalStyle.backgroundColor_divider
    },

})