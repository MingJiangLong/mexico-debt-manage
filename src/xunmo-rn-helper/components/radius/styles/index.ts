import { StyleSheet } from "react-native";
import { GlobalStyleType } from "xunmo-rn-helper/providers/GlobalStyleProvider";

export default (globalStyle: GlobalStyleType) => StyleSheet.create({

    container: {
        color: globalStyle.color_radius_check
    },

    radius_checked: {
        color: globalStyle.color_radius_check
    },
    radius_uncheck: {
        color: globalStyle.color_radius_check
    },
    size_radius: {
        width: 14,
        height: 14
    }

})